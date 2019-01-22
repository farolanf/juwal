import React, { useEffect } from 'react'
import url from 'url'

import Layout from '$comp/layout'

import { connect, loginRedirect } from '$src/modules/auth'

const ConnectPage = () => {
  const urlObj = url.parse(window.location.href, true)
  
  useEffect(() => {
    connect(urlObj.query.provider, window.location.search)
      .then(() => {
        loginRedirect()
      })
  }, [])
  
  return (
    <Layout>
      Connecting to {urlObj.query.provider}
    </Layout>
  )
}

export default ConnectPage