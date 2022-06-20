import React from 'react'

const ChangeLanguage = React.createContext({
  activeLanguage: 'HI',
  changeLanguage: () => {},
})

export default ChangeLanguage
