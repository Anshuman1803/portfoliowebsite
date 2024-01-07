
import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png"
import Navbar from "./Navbar"
import { useState } from "react"
import MobileNavCompo from "./MobileNavCompo";
function HeaderCompo() {
    const [activenNav, Setactivenav] = useState(false);
    const handleActiveNav = ()=>{
        Setactivenav(!activenNav)
    }
    return (
        <header className="appHeader">
            <div className="appHeader_LogoContainer"> <Link to={"/"} className="appLogo_Link"><img src={Logo} alt="Logo" className="appLogo" /></Link>
            </div>
            <Navbar />
            {activenNav && <MobileNavCompo handleActiveNav= {handleActiveNav}/>}
            <i className={`fa-solid ${activenNav ? "fa-xmark" : "fa-bars"} hamMenuButton`} onClick={handleActiveNav}></i>


        </header>
    )
}

export default HeaderCompo
