export const InitialState = {
  activeLanguage: 'EN',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_language':
      return {...state, activeLanguage: action.payload}
    default:
      return null
  }
}
export default reducer
