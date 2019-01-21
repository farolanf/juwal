import { createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: deepPurple,
    error: red,
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: 'white'
      }
    }
  }
})

console.log(theme)

export default theme