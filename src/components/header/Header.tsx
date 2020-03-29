import { AppMenu, Logo } from './styled'

import AlfaLogo from './AlfaLogo.svg'
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppMenu>
      <Logo alt='alfaLogo' src={AlfaLogo} />
    </AppMenu>
  );
}

export default Header