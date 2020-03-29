import { ArrowButton, TableContent, TableRow } from "./styled"
import React, { useState } from "react"

import { Icon } from "@blueprintjs/core"
import { Link } from "react-router-dom"

export interface Props {
    classComponent: string
    taskNumber: number
    taskBody: string
    customer: string
    date: string
}
const TaskRow: React.FC<Props> = ({ classComponent, taskNumber, taskBody, customer, date }) => {
    const [isToggled, setToggled] = useState(false)

    const iconArrowDown = <Icon icon={'chevron-down'} iconSize={12} />
    const iconArrowUp = <Icon icon={'chevron-up'} iconSize={12} />
    const icon = isToggled ? iconArrowUp : iconArrowDown
    const toggle = () => setToggled(!isToggled)

    return (
        <React.Fragment key={taskNumber}>
            <TableRow className={`FirstRow_${classComponent}`} key={taskNumber}>

                <TableContent align='center'>{taskNumber}</TableContent>
                <TableContent align="right">{taskBody}</TableContent>
                <TableContent align="right">{customer}</TableContent>
                <TableContent align="right">{date}</TableContent>
                <td>
                    <ArrowButton onClick={() => toggle()} minimal={true}>
                        <Icon icon={icon} iconSize={12} />
                    </ArrowButton>
                </td>

            </TableRow>
            {isToggled && (
                <tr className={`SecondRow_${classComponent}`}>
                    <TableContent colSpan={5}>
                        <div>{taskBody}   </div>

                        <div style={{ float: "right" }}>
                            <Link to="/taskDetail">VIEW TASK</Link>
                        </div>

                    </TableContent>

                </tr>)}

        </React.Fragment >
    )

}

export default TaskRow