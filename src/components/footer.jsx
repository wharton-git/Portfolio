import React from 'react';
import FooterWave from './../assets/svg/footerWave.svg'
import './../assets/styles/css/Style.css'
import './../index.css'

function Footer () {
    return (

        <div className=''>
            <div className=''>
                <div className='footer'>
                    <div className='w-screen'>
                    
                        <div className='pt-10 grid grid-cols-2 text-center'>
                            <div>
                                Go back to : 
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Projects</a></li>
                                </ul>
                            </div>
                            <div>
                                Ask something ?
                                <ul>
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">WhatsApp</a></li>
                                    <li><a href="#">Email</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Linked In</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=' flex items-center justify-center text-xs'>
                            Wharton Aldrick CopyRight ©️2024 All Reserved
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;