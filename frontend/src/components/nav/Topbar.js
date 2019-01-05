import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'

import Hidden from '@material-ui/core/Hidden'
import withStyles from '@material-ui/core/styles/withStyles'

import Spacer from '../Spacer'
import Link from './Link'

const styles = {
  menuButton: tw`xs:mr-1 md:mr-3`,
  brand: tw`mr-3`
}

const Topbar = ({ title, openSidebar, classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton
        color='inherit'
        className={classes.menuButton}
        aria-label='Menu'
        onClick={openSidebar}>
        <MenuIcon />
      </IconButton>
      <Link to='/' className={classes.brand}>
        <Typography variant='h6' color='inherit'>{title}</Typography>
      </Link>
      <Hidden smDown>
        <Button color='inherit'>
          <Typography variant='button' color='inherit'>Home</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='button' color='inherit'>Categories</Typography>
        </Button>
      </Hidden>
      <Spacer />
      <IconButton color='inherit' aria-label='Account'>
        <PersonIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  openSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Topbar)