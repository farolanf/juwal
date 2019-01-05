import { connect } from 'react-redux'
import Topbar from '$comp/nav/Topbar'
import { openSidebar } from '$act/sidebar'

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(openSidebar()),
})

export default connect(null, mapDispatchToProps)(Topbar)