import 'typeface-roboto'

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, withTheme } from '@material-ui/core/styles'

import theme from '../theme'
import Topbar from './nav/Topbar'

const Content = withTheme()(styled.div`
  ${tw`p-4`}
  ${({ theme }) => ({
    [theme.breakpoints.up('md')]: tw`px-8 py-6`,
  })}
`)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar title={data.site.siteMetadata.title} />
        <Content>
          {children}
        </Content>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
