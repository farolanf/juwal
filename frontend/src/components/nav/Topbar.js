import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Hidden from '@material-ui/core/Hidden'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'

import Spacer from '../Spacer'
import Link from './Link'

import { API_HOST } from '$src/const'
import { storeReferer } from '../../modules/auth';

const styles = {
  menuButton: tw`xs:mr-1 md:mr-3`,
  brand: tw`mr-3`
}

const Topbar = ({
  title,
  openSidebar,
  classes,
  loggedIn,
  user,
  fetchUser,
  logout
}) => {
  useEffect(() => {
    if (!window.location.pathname.startsWith('/connect')) {
      storeReferer()
    }
    fetchUser()
  }, [])

  const [profileEl, setProfileEl] = useState(null)

  return (
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
        {!loggedIn ? (
          <Button color='inherit' href={`${API_HOST}/connect/facebook/`}>
            <Typography variant='button' color='inherit'>Sign In</Typography>
          </Button>
        ) : (
          <>
            <IconButton color='inherit' aria-label='Account' onClick={e => setProfileEl(e.currentTarget)}>
              <PersonIcon />
            </IconButton>
            <Menu
              anchorEl={profileEl}
              open={!!profileEl}
              onClose={() => setProfileEl(null)}
            >
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  openSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
}

export default withStyles(styles)(Topbar)