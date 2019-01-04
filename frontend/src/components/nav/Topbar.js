import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'

import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/core/styles'

import Spacer from '../Spacer'
import Link from './Link'

const MenuButton = withStyles(theme => ({
  root: {
    ...tw`mr-1`,
    [theme.breakpoints.up('md')]: tw`mr-3`
  },
}))(({ classes }) => (
  <IconButton color='inherit' className={classes.root} aria-label='Menu'>
    <MenuIcon />
  </IconButton>
))

const Brand = withStyles({
  brand: tw`mr-2`
})(({ title, classes }) => (
  <Link to='/' className={classes.brand}>
    <Typography variant='h6' color='inherit'>{title}</Typography>
  </Link>
))

const TopMenu = withWidth()(({ width }) => (
  isWidthUp('md', width) && (
    <>
      <Button color='inherit'>
        <Typography variant='button' color='inherit'>Home</Typography>
      </Button>
      <Button color='inherit'>
        <Typography variant='button' color='inherit'>Categories</Typography>
      </Button>
    </>
  )
))

const Topbar = ({ title }) => (
  <AppBar position='static'>
    <Toolbar>
      <MenuButton />
      <Brand title={title} />
      <TopMenu />
      <Spacer />
      <IconButton color='inherit' aria-label='Account'>
        <PersonIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Topbar