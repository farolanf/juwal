import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import PersonIcon from '@material-ui/icons/Person'

import Hidden from '@material-ui/core/Hidden'

import Spacer from '../Spacer'
import Link from './Link'

const MenuButton = styled(({ className }) => (
  <IconButton color='inherit' className={className} aria-label='Menu'>
    <MenuIcon />
  </IconButton>
))`
  && {
    ${tw`xs:mr-1 md:mr-3`}
  }
`

const Brand = styled(({ title, className }) => (
  <Link to='/' className={className}>
    <Typography variant='h6' color='inherit'>{title}</Typography>
  </Link>
))`
  && {
    ${tw`mr-3`}
  }
`

const TopMenu = (() => (
  <Hidden smDown>
    <Button color='inherit'>
      <Typography variant='button' color='inherit'>Home</Typography>
    </Button>
    <Button color='inherit'>
      <Typography variant='button' color='inherit'>Categories</Typography>
    </Button>
  </Hidden>
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