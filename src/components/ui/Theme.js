import { createMuiTheme } from '@material-ui/core/styles';

const blobBlue = '#0B72B9';
const blobOrange = '#FFBA60';

export const theme = createMuiTheme({
  palette: {
    common: {
      blue:  `${blobBlue}`,
      orange: `${blobOrange}`
    },
    primary: {
      main: `${blobBlue}`
    },
    secondary: {
      main: `${blobOrange}`
    }
  },
  typography: {
    h6: {
      fontWeight: 500
    }
  }
})