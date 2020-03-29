import { Buttons, Container, LogButtons, LogsTable, MessageType, TasksCard, Text, Title } from './styled'
import React, { useState } from 'react';

import { LogEntry } from './TaskDetail'
import { Modal } from './modal/Modal'
import noteIcon from './note.png'
import phoneIcon from './phone.png'

export interface Props {
  logs: Array<LogEntry>
  addEntry: (l: LogEntry) => void
}

export interface LogProps {
  log: LogEntry
}

interface CallDetails {
  callText: string
  callDuration: string
}

export const Logs: React.FC<Props> = ({ logs, addEntry }) => {
  const note = "note"
  const call = "call"
  const [isOpenNote, setIsOpenNote] = useState(false)
  const [isOpenCall, setIsOpenCall] = useState(false)

  const [noteText, setNoteText] = useState("")
  const [callDetails, setCallDetails] = useState<CallDetails>({
    callText: "",
    callDuration: "",
  })

  const handleClose = (element: string) => {
    element === "note" ?
      isOpenNote && setIsOpenNote(false) :
      isOpenCall && setIsOpenCall(false)
  }

  const handleClickNote = () => {
    setIsOpenNote(true)
    setNoteText("")
  }
  const handleClickCall = () => {
    setIsOpenCall(true)
    setCallDetails({ callText: "", callDuration: "" })
  }

  const handleCreateNote = (noteText: string) => {
    const newEntry = {
      taskNumber: 1,
      date: new Date().toLocaleString(),
      typeInfo: "message",
      taskBody: noteText
    }

    addEntry(newEntry)
    handleClose(note)
  }
  const handleCreateCall = (callText: string, duration: string) => {
    const newEntry: LogEntry = {
      taskNumber: 1,
      date: new Date().toLocaleString(),
      typeInfo: "phone",
      taskBody: callText,
      callDuration: duration
    }

    addEntry(newEntry)
    handleClose(call)
  }

  return (

    <TasksCard>
      <Container>
        <Title> Log </Title>

        <LogsTable className={'bp3-html-table bp3-html-table-striped'}>
          <tbody>
            {logs.map((log: LogEntry) => <Log key={log.taskNumber + log.date} log={log} />)}
          </tbody>
          <tr>
            <LogButtons colSpan={3}>
              <div style={{ float: "right" }}>
                <Buttons onClick={handleClickNote}>
                  <img style={{ width: 19, paddingRight: 7 }} alt={"Add a note"} src={noteIcon} />
                  Add a note
                </Buttons>
                <Modal
                  cancelText="No"
                  confirmText="Yes"
                  isOpen={isOpenNote}
                  onCancel={() => handleClose(note)}
                  onConfirm={() => handleCreateNote(noteText)}
                  title="Add a note"
                >
                  <>
                    <span>New note: </span>
                    <input value={noteText} type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteText(e.target.value)} />
                  </>
                </Modal>

                <Buttons onClick={handleClickCall}>
                  <img style={{ width: 17, paddingRight: 5 }} alt={"Add a call"} src={phoneIcon} />
                  Add a call
                </Buttons>
                <Modal
                  isOpen={isOpenCall}
                  onCancel={() => handleClose(call)}
                  onConfirm={() => handleCreateCall(callDetails.callText, callDetails.callDuration)}
                  title="Add a call"
                >
                  <span>Reason:</span>
                  <input value={callDetails.callText} type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallDetails({ ...callDetails, callText: e.target.value })} />
                  <span>Duration:</span>
                  <input value={callDetails.callDuration} type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallDetails({ ...callDetails, callDuration: e.target.value })} />
                </Modal>


              </div>
            </LogButtons>
          </tr>
        </LogsTable>
      </Container>
    </TasksCard>
  )
}

const Log: React.FC<LogProps> = ({ log: { date, typeInfo, taskBody, callDuration } }) => {
  let typeOfMessage = (note: string) => note === 'message' ? noteIcon : phoneIcon
  return (
    <tr>
      <td>
        <MessageType alt={typeInfo + date} src={typeOfMessage(typeInfo)} />
      </td>
      <Text>{taskBody} {callDuration && ` Duration: ${callDuration}`}</Text>
      <td>{date}</td>
    </tr>
  )
}
