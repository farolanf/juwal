import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'lodash/fp'

import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'

import Spacer from '../Spacer'
import Link from './Link'

const styles = {
  spaceRight: tw`mr-2`
}

const Topbar = ({ title, width, classes }) => (
  <AppBar position='static'>
    <Toolbar>
      {isWidthUp('md', width) && (
        <IconButton color='inherit' className={classes.spaceRight} aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      )}
      <Link to='/' className={classes.spaceRight}>
        <Typography variant='h6' color='inherit'>{title}</Typography>
      </Link>
      <Button color='inherit'>
        <Typography variant='button' color='inherit'>Home</Typography>
      </Button>
      <Button color='inherit'>
        <Typography variant='button' color='inherit'>Categories</Typography>
      </Button>
      <Spacer />
      <IconButton color='inherit' aria-label='Account'>
        <PersonIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default compose(withWidth(), withStyles(styles))(Topbar)