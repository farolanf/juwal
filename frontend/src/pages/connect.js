import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import url from 'url'

import Layout from '$comp/layout'

import { connect, loadReferer } from '$src/modules/auth'

const ConnectPage = ({ navigate }) => {
  const urlObj = url.parse(window.location.href, true)
  
  useEffect(() => {
    connect(urlObj.query.provider, window.location.search).then(() => {
      navigate(loadReferer() || '/')
    })
  }, [])
  
  return (
    <Layout>
      Connecting to {urlObj.query.provider}
    </Layout>
  )
}

ConnectPage.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default ConnectPage