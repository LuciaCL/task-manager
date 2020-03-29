import styled from "styled-components"

import { Navbar } from "@blueprintjs/core"

const AppMenu = styled(Navbar)({
    backgroundColor: '#292d45',
    boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.23), 0px 3px 6px 0px rgba(0,0,0,0.16)",
    alignContent: 'center',
    height: 66,
})

const Logo = styled.img({
    marginTop: 10,
    marginLeft: 65,
})

export {AppMenu, Logo}