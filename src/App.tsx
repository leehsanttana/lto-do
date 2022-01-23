import GlobalStyle from './styles/global';
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light';

import Header from './Components/Header';
import Section from './Components/Section';

export default function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Section />
    </ThemeProvider>
  );
};
