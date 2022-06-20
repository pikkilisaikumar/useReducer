import {useReducer} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

import reducer, {InitialState} from './Reducer/ReducerComponent'

const App = () => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  console.log(state, 'saikumar')

  const {activeLanguage} = state

  const changeLanguage = activeoneLanguage => {
    dispatch({type: 'change_language', payload: activeoneLanguage})
  }

  return (
    <>
      <Header changeLanguage={changeLanguage} activeLanguage={activeLanguage} />
      <LandingSection />
      <FeaturesSection />
    </>
  )
}

export default App
