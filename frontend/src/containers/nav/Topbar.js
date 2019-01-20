import { connect } from 'react-redux'

import Topbar from '$comp/nav/Topbar'
import { openSidebar } from '$act/sidebar'
import { fetchUser } from '$act/user'

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.user,
})

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(openSidebar()),
  fetchUser: () => dispatch(fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)