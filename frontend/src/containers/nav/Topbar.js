import { connect } from 'react-redux'

import Topbar from '$comp/nav/Topbar'
import { openSidebar } from '$act/sidebar'
import { fetchUser, doLogout } from '$act/account'

const mapStateToProps = state => ({
  loggedIn: state.account.loggedIn,
  user: state.account.user.data,
})

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(openSidebar()),
  fetchUser: () => dispatch(fetchUser()),
  logout: () => dispatch(doLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)