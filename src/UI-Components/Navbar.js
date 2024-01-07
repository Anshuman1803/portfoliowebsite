
import { NavLink } from 'react-router-dom'
import lightICON from '../assets/lightICON.png'
import nightICON from '../assets/nightICON.png'
import { useContext } from 'react'
import {MyThemeContext} from '../Theme/ThemeContext'
function Navbar() {
  const  {IsDarkMode, handleSwitchTheme} = (useContext(MyThemeContext))
    return (
        <nav className="app_Navbar">
            <NavLink to="/" className='appNavbar_item'>Home</NavLink>
            <NavLink to="/portfolio" className='appNavbar_item'>Portfolio</NavLink>
            <NavLink to="/education" className='appNavbar_item'>Education</NavLink>
            <NavLink to="/skils" className='appNavbar_item'>Skils</NavLink>
            <NavLink to="/contact" className='appNavbar_item'>Contact</NavLink>
            {
                IsDarkMode ? <img src={lightICON} alt="ThemeICON" className="themeSwitcherIcon" title='Swith To Light Theme' onClick={handleSwitchTheme}/> :  <img src={nightICON} alt="ThemeICON" className="themeSwitcherIcon" title='Swith To Dark Theme' onClick={handleSwitchTheme}/>
            } 
            
           
        </nav>
    )
}

export default Navbar
