import { ThemeProvider } from 'styled-components';
import AppFrame from './AppFrame.js';
import variables from '../../styles/variables.js';

export default ({ children }) => (
  <ThemeProvider theme={variables}>
    <AppFrame>{children}</AppFrame>
  </ThemeProvider>
);
