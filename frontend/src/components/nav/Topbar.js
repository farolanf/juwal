import React from 'react'
import PropTypes from 'prop-types'

import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'

import Spacer from '../Spacer'
import Link from './Link'

const Topbar = ({ title, width }) => (
  <AppBar position='static'>
    <Toolbar>
      {isWidthUp('md', width) && (
        <IconButton color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      )}
      <Link to='/'>
        <Typography variant='h5' color='inherit'>{title}</Typography>
      </Link>
      <Spacer />
      <IconButton color='inherit' aria-label='Account'>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

export default withWidth()(Topbar)