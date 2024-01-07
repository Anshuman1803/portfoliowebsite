
import './App.css'
import './Theme.css'
import AppRouter from "./Router/AppRouter"
import { MyThemeContext } from './Theme/ThemeContext'
import HeaderCompo from './UI-Components/HeaderCompo'
import { useContext } from 'react'
import FooterCompo from './UI-Components/FooterCompo'
function App() {
  const { IsDarkMode } = (useContext(MyThemeContext))
  return (
    <div className={`${IsDarkMode ? 'darkMode' : 'lightMode'} App__Container`}>
      <HeaderCompo />
      <AppRouter />
      <FooterCompo/>
    </div>
  )
}

export default App
