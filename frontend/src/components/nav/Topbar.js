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
import LanguageIcon from '@material-ui/icons/Language'

import Spacer from '../Spacer'
import Link from './Link'

import { API_HOST } from '$src/const'
import { storeReferer } from '../../modules/auth';

const styles = {
  menuButton: tw`xs:mr-1 md:mr-3`,
  brand: tw`mr-3`,
  buttonIcon: tw`mr-1`,
}

const Topbar = ({
  title,
  openSidebar,
  classes,
  loggedIn,
  fetchUser,
  logout,
  locale,
  setLocale,
}) => {
  useEffect(() => {
    if (!window.location.pathname.startsWith('/connect')) {
      storeReferer()
    }
    fetchUser()
  }, [])

  const [profileEl, setProfileEl] = useState(null)
  const [langEl, setLangEl] = useState(null)

  function handleLangClick (locale) {
    setLocale(locale)
    setLangEl(null)
  }

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
        <Button color='inherit' onClick={e => setLangEl(e.currentTarget)}>
          <LanguageIcon color='inherit' className={classes.buttonIcon} />
          {locale}
        </Button>
        <Menu anchorEl={langEl} open={!!langEl} onClose={() => setLangEl(null)}>
          <MenuItem onClick={() => handleLangClick('en-US')}>English</MenuItem>
          <MenuItem onClick={() => handleLangClick('id-ID')}>Indonesia</MenuItem>
        </Menu>
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
  logout: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
}

export default withStyles(styles)(Topbar)