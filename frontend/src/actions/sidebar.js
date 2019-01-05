export const SIDEBAR_OPEN = 'SIDEBAR_OPEN'
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE'
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

export const openSidebar = () => ({ type: SIDEBAR_OPEN })
export const closeSidebar = () => ({ type: SIDEBAR_CLOSE })
export const toggleSidebar = () => ({ type: SIDEBAR_TOGGLE })