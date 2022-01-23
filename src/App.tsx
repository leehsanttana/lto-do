import React from 'react';
import GlobalStyle from './styles/global';
import {ThemeProvider, DefaultTheme} from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './components/utils/usePersistedState';

import Header from  './components/Header';
import Section from './components/Section';

const App: React.FC  = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light );

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