import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'

import Topbar from '$con/nav/Topbar'
import Sidebar from '$con/nav/Sidebar'

import containerStyle from '$styles/container'

const styles = theme => ({
  root: {
    margin: '0 auto',
    ...containerStyle(theme)
  },
  content: tw`xs:p-4 md:px-8 md:py-6`
})

const Layout = ({ classes, children }) => {
  return (
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
        <div className={classes.root}>
          <Topbar title={data.site.siteMetadata.title} />
          <div className={classes.content}>
            {children}
          </div>
          <Sidebar />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
