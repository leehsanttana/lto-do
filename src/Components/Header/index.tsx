import React , {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import  * as C  from './styles'

const Header: React.FC  = () => {

  const { colors } = useContext(ThemeContext);

  return (
    <C.Header>
      <Switch onChange={() => {}} checked={true} checkedIcon={false} uncheckedIcon={false} height={10} width={40} handleDiameter={20}  />
      <C.Brand> <span>L</span> to.<span>do</span> </C.Brand>
    </C.Header>
  )
}

export default Header;