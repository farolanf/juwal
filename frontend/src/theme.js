import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lime from '@material-ui/core/colors/lime'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: lime,
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