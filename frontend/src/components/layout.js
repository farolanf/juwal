import 'typeface-roboto'

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'

import theme from '../theme'
import Topbar from './nav/Topbar'

const styles = {
  content: tw`xs:p-4 md:px-8 md:py-6`
}

const Layout = ({ classes, children }) => (
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
        <div className={classes.content}>
          {children}
        </div>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
