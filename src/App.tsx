import React, {useState} from 'react';
import GlobalStyle from './styles/global';
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark'

import Header from  './components/Header';
import Section from './components/Section';

const App: React.FC  = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Section />
    </ThemeProvider>
  );
};

export default App;