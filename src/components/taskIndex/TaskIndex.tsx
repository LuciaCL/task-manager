import { Container, TBody, TableHeader, TableRow, TasksCard, TasksTable, Title } from './styled'

import React from 'react';
import TaskRow from './TaskRow';
import data from "../../data.json"

export interface Data {
  taskNumber: number
  date: string
  customer: string
  taskBody: string
}

const TaskIndex: React.FC = () => {
  const rows: Array<Data> = data

  return (
    <TasksCard>
      <Container>
        <Title> Tasks </Title>

        <TasksTable className={'bp3-html-table'}>
          <thead>
            <TableRow>
              <TableHeader align="right">Task number</TableHeader>
              <TableHeader align="right">Note</TableHeader>
              <TableHeader align="right">Customer</TableHeader>
              <TableHeader align="right">Date</TableHeader>
            </TableRow>
          </thead>
          <TBody>
            {rows.map((row: Data, index: number) => (
              <TaskRow classComponent={index % 2 === 0 ? "even" : "odd"} key={row.taskNumber} taskNumber={row.taskNumber} taskBody={row.taskBody} customer={row.customer} date={row.date} />
            ))}
          </TBody>
        </TasksTable>
      </Container>
    </TasksCard>

  )
}

export default TaskIndex