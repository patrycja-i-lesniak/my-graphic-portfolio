import BoxContent from 'components/BoxContent';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
// 
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';


const Root = () => (
  <>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <NavigationBar />
          <BoxContent />
      </ThemeProvider>
   
  </>
);

export default Root;
