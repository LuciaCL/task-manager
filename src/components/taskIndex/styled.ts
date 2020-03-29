import { Button, Card } from "@blueprintjs/core"

import styled from 'styled-components'

const TasksCard = styled(Card)({
    background: '#ffffff',
    boxShadow: '0 4px 4px 0 rgba(0,0,0,0.26), 0 7px 14px 0 rgba(0,0,0,0.19)',
    borderRadius: 2,
    width: 1110,
    height: 513,
    marginTop: 28,
    marginLeft: 62,
    overflow: 'auto',

})

const Container = styled.div({
    marginTop: 25,
    marginLeft: 22,
})

const Title = styled.div({
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#4a4a4a',
    height: 24,
    width: 1051,
    paddingBottom: 8,
    borderBottom: '1px solid #979797',
})

const TasksTable = styled.table({
    paddingTop: 28,
    width: 1062,
})

const TBody = styled.tbody({
    "> tr.FirstRow_odd": {
        background: "rgba(26,41,95,0.16)",
    },
    "> tr.SecondRow_odd": {
        background: "rgba(26,41,95,0.16)",
        textAlign: "right",
    },
})

const TableHeader = styled.td({
    fontFamily: 'Roboto',
    fontWeight: 600,
    fontSize: 12,
    color: 'rgba(0,0,0,0.54)',
})

const TableRow = styled.tr({
    paddingLeft: 26,
    borderSpacing: 26,
})

const TableContent = styled.td({
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(0,0,0,0.87)',
    height: 35,
})



const ArrowButton = styled(Button)({
    width: 12,
})

export { ArrowButton, TBody, Container, TableContent, TableHeader, TableRow, TasksCard, TasksTable, Title }