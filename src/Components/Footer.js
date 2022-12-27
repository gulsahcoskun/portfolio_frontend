import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Gulsah Coskun</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/g%C3%BCl%C5%9Fah-co%C5%9Fkun-70935199/" className="footer-icon"><LinkedInIcon/></a>
                <a href="https://github.com/gulsahcoskun" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2022 copyright all right reserved</p>
        </div>
    )
}

export default Footer
