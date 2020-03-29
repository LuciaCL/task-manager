import { Container, Date, Name, Photo, Title, UserCard, UserText } from './styled'

import { Logs } from './Logs'
import React from 'react';
import userImage from './userImg.png'

export interface LogEntry {
    taskNumber: number
    date: string
    typeInfo: string
    taskBody: string
    callDuration?: string | undefined
}

const createUser = (userId: string, name: string, date: string, text: string) => ({ userId, name, date, text })
const user = createUser(userImage, 'MIRO TOMAZ', '20/09/2017', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
const createLog = (taskNumber: number, date: string, typeInfo: string, taskBody: string, callDuration?:string) => ({ taskNumber, date, typeInfo, taskBody, callDuration })
const logs: Array<LogEntry> = [
    createLog(254148514, '19/09/2017 13:41', 'phone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',"30mins"),
    createLog(254148515, '19/09/2017 13:52', 'message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    createLog(254148516, '19/09/2017 13:53', 'message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    createLog(254148517, '19/09/2017 13:54', 'phone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', "30mins"),
    createLog(254148518, '19/09/2017 13:55', 'phone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', "30mins"),
    createLog(254148519, '19/09/2017 13:56', 'phone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', "30mins"),
];

const TaskDetail: React.FC = () => {

    const addLogEntry = (logEntry: LogEntry) => {
        logs.push(logEntry)
    }

    return (
        <>
            <UserCard>
                <Container>
                    <Title> Task information </Title>
                    <table className={'bp3-html-table'}>
                        <tbody>
                            <tr>
                                <td><Photo alt={user.userId} src={user.userId} /></td>
                                <Name style={{ marginLeft: 34 }}>{user.name}</Name>
                                <Date>{user.date}</Date>
                            </tr>
                            <tr>
                                <UserText colSpan={3}>{user.text}</UserText>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </UserCard>
            <Logs logs={logs} addEntry={addLogEntry} />
        </>
    )
}

export default TaskDetail