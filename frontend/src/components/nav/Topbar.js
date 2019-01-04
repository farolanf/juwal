import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'lodash/fp'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import { withStyles } from '@material-ui/styles'

import Spacer from '../Spacer'
import Link from './Link'

const styles = {
  menuButton: ({ width }) => isWidthUp('md', width) ? tw`mr-3` : tw`mr-1`,
  brand: tw`mr-2`
}

const Topbar = ({ title, width, classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton color='inherit' className={classes.menuButton} aria-label='Menu'>
        <MenuIcon />
      </IconButton>
      <Link to='/' className={classes.brand}>
        <Typography variant='h6' color='inherit'>{title}</Typography>
      </Link>
      {isWidthUp('md', width) && (
        <>
          <Button color='inherit'>
            <Typography variant='button' color='inherit'>Home</Typography>
          </Button>
          <Button color='inherit'>
            <Typography variant='button' color='inherit'>Categories</Typography>
          </Button>
        </>
      )}
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