import React , {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import  * as C  from './styles'

interface HeaderProps {
  toggleTheme(): void; 
}

const Header: React.FC<HeaderProps>  = ({toggleTheme}) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <C.Header>
      <Switch className='toggle' onChange={toggleTheme} checked={title === 'dark'} checkedIcon={false} uncheckedIcon={false} height={10} width={40} handleDiameter={20} offColor={colors.background} onColor={colors.background} />
      <C.Brand> <span>L</span> to.<span>do</span> </C.Brand>
    </C.Header>
  )
}

export default Header;