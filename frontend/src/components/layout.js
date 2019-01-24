import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'

import Topbar from '$con/nav/Topbar'
import Sidebar from '$con/nav/Sidebar'

const styles = {
  content: tw`xs:p-4 md:px-8 md:py-6`
}

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
        <>
          <Topbar title={data.site.siteMetadata.title} />
          <div className={classes.content}>
            {children}
          </div>
          <Sidebar />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
