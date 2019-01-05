import { connect } from 'react-redux'
import Topbar from '$comp/nav/Topbar'
import { openSidebar, closeSidebar, toggleSidebar } from '$act/sidebar'

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(openSidebar()),
  closeSidebar: () => dispatch(closeSidebar()),
  toggleSidebar: () => dispatch(toggleSidebar()),
})

export default connect(null, mapDispatchToProps)(Topbar)