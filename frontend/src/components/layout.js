import 'typeface-roboto'

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from '../theme'
import Topbar from './nav/Topbar'

const Content = styled.div`
  ${tw`xs:p-4 md:px-8 md:py-6`}
`

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
