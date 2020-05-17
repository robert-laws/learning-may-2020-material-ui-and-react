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
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      '&:last-child': {
        marginRight: '15px'
      }
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: '#FFFFFF'
    }
  }
})