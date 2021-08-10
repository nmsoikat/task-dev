import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily:['Nunito Sans', 'sans-serif'].join(',')
  },
  
  palette: {
    error: {
      main: red.A400,
    },
  },
});

export default theme;