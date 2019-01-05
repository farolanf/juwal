import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SIDEBAR_TOGGLE } from '$act/sidebar'

const reducer = (state = {
  open: false,
}, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, open: true }
    case SIDEBAR_CLOSE:
      return { ...state, open: false }
    case SIDEBAR_TOGGLE:
      return { ...state, open: !state.open }
    default:
      return state
  }
}

export default reducer