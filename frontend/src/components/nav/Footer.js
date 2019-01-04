import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: tw`p-12`
}

const Footer = ({ classes }) => (
  <AppBar color='primary' position='static' classes={classes}>
    Footer
  </AppBar>
)

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)