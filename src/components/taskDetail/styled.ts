import { Card, Dialog } from "@blueprintjs/core"

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

const Title = styled.td({
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#4a4a4a',
    height: 24,
    width: 1051,
    paddingBottom: 8,
    borderBottom: '1px solid #979797',
})
const UserCard = styled(Card)({
    background: '#ffffff',
    boxShadow: '0 4px 4px 0 rgba(0,0,0,0.26), 0 7px 14px 0 rgba(0,0,0,0.19)',
    borderRadius: 2,
    width: 1110,
    height: 282,
    marginTop: 50,
    marginLeft: 59,
    overflow: 'auto',

})
const Name = styled.td({
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#4a4a4a',
    height: 24,
    width: 1051,
    paddingBottom: 8,
    fontWeight: 600,
})

const Date = styled.td({
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#4a4a4a',
    width: 75,
})

const TasksTable = styled.table({
    paddingTop: 28,
    width: 1062,

})
const LogsTable = styled.table({
    width: 1056,
    tr: {
        height: 55,
        fontSize: 13,
    },


})

const Buttons = styled.button({
    backgroundColor: "#cfcfcf",
    boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)",
    borderRadius: 2,
    width: 137,
    height: 36,
    marginLeft: 40,
    fontSize: 14,
})

const LogButtons = styled.td({
    alignItems: "right"
})

const Text = styled.td({
    width: 848,
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

const CollapsableCell = styled.td({
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(0,0,0,0.87)',
    textAlign: 'left',
})

const UserText = styled.th({
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(0,0,0,0.87)',
    textAlign: 'left',
    fontWeight: 100,
})

const Photo = styled.img({
    width: 61,
    height: 61,
})

const MessageType = styled.img({
    width: 18,
    height: 18,
})

const StyledDialog = styled(Dialog)({
    paddingBottom: 0,
    width: 200,
    button: { marginTop: 10 }
})

export {
    Buttons,
    CollapsableCell,
    Container,
    Date,
    LogButtons,
    LogsTable,
    MessageType,
    Name,
    Photo,
    StyledDialog,
    TableContent,
    TableHeader,
    TableRow,
    TasksCard,
    TasksTable,
    Text,
    Title,
    UserCard,
    UserText
}