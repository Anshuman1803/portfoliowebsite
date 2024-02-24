import React from 'react'
import LOGO from '../assets/Logo.png'
function FooterCompo() {
    return (
        <footer className='app__footer'>
            <div className="footer_profileContainer">
                <img src={LOGO} alt="AppLOGO" className='footerLOGO' />
                <span className='footer_Name'>Anshuman</span>
            </div>
            <div className="footer_SocialLinks">

                <a href="https://www.linkedin.com/in/anshuman1803/" rel="noreferrer" target='_blank' className='socialLink_item' ><i className="fa-brands fa-linkedin socialLink_item"></i></a>

                <a href="https://github.com/Anshuman1803" rel="noreferrer" className='socialLink_item' target='_blank' ><i className="fa-brands fa-github"></i></a>
                
                <a href="https://www.codewars.com/users/AnshumanMahi7781" rel="noreferrer" className='socialLink_item' target='_blank' ><img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt="" /></a>


                <a href="https://www.instagram.com/_anshuman_1803/" rel="noreferrer" className='socialLink_item' target='_blank' ><i className="fa-brands fa-square-instagram"></i></a>

                <a href="https://www.facebook.com/anshuman1803/" rel="noreferrer" className='socialLink_item' target='_blank' ><i className="fa-brands fa-facebook"></i></a>

                <a
                    href="https://api.whatsapp.com/send/?phone=7061751101&text&type=phone_number&app_absent=0"
                    className="socialLink_item"
                    target="_blank"
                    rel="noreferrer"
                ><i className="fa-brands fa-whatsapp socialIcons"></i
                ></a>

            </div>

        </footer>
    )
}

export default FooterCompo
