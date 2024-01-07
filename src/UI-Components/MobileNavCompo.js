import React from 'react'
import lightICON from '../assets/lightICON.png'
import nightICON from '../assets/nightICON.png'
import { useContext } from 'react'
import { MyThemeContext } from '../Theme/ThemeContext'
import { NavLink } from 'react-router-dom'
function MobileNavCompo({handleActiveNav}) {
    const { IsDarkMode, handleSwitchTheme } = (useContext(MyThemeContext));
    return (
        <div className="mobileNavcontainer">
            <nav className='MobileNavBar'>
                <div className="mobilenav_themeSwitcherContainer">
                    <span className='mobileNav__themeText'> Switch to  {
                        IsDarkMode ? "Light" : "Dark"
                    } Mode</span>
                    {
                        IsDarkMode ? <img src={lightICON} alt="ThemeICON" className="themeSwitcherIcon" title='Swith To Light Theme' onClick={handleSwitchTheme} /> : <img src={nightICON} alt="ThemeICON" className="themeSwitcherIcon" title='Swith To Dark Theme' onClick={handleSwitchTheme} />
                    }
                </div>

                <NavLink to="/" className='mobileNavbar_item' onClick={handleActiveNav}>Home</NavLink>
                <NavLink to="/portfolio" className='mobileNavbar_item' onClick={handleActiveNav}>Portfolio</NavLink>
                <NavLink to="/education" className='mobileNavbar_item' onClick={handleActiveNav}>Education</NavLink>
                <NavLink to="/skils" className='mobileNavbar_item' onClick={handleActiveNav}>Skils</NavLink>
                <NavLink to="/contact" className='mobileNavbar_item' onClick={handleActiveNav}>Contact</NavLink>
            </nav>
        </div>
    )
}

export default MobileNavCompo
