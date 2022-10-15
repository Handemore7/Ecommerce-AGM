import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineGpsFixed} from 'react-icons/md'

const Footer = () => {
    //Se carga el logo de manera local
    const images = [
        'data:image/png;base64,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',
        'data:image/png;base64,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'
];
    //Esto es solo maquetación, no tiene lógica, tiene algunos hovers
  return (
    <div className='footerContainer'>
        <div className='footerInfo'>
            <div className='footerLogo'>
                <img className='footerLogo1' src={images[0]} alt="" />
                <img className='footerLogo2' src={images[1]} alt="" />
            </div>
            <p>HAVEN'T YOU REGISTERED YET?</p>
            <p>Select the type of profile with which you want to be part of the AgriGlobal Market Community</p>
            <div className='footerButtons'>
                <button>Buyer</button>
                <button>Provider</button>
            </div>
        </div>
        <div className='footerContactUs'>
            <p className='footerContactUsTitle'>CONTACT US</p>
            <div className='footerContactUsModule'>
                <div className='iconModule'>
                    <div>
                        <AiOutlineMail />
                    </div>
                </div>
                <div className='contentModule'>
                    <p><strong>Address:</strong></p>
                    <p>8333 N.W. 53rd Street Suite 450</p>
                    <p>33166</p>
                    <p>Doral FL, United States</p>
                </div>
            </div>
            <div className='footerContactUsModule'>
                <div className='iconModule'>
                    <div>
                        <MdOutlineGpsFixed />
                    </div>
                </div>
                <div className='contentModule'>
                    <p><strong>Email: </strong></p>
                    <p>service@agriglobalmarket.com</p>
                </div>
            </div>
        </div>
        <div className='footerServices'>
            <div className='footerServicesList'>
                <h1><strong>Our services</strong></h1>
                <p>About us</p>
                <p>Sell your product on AGM</p>
                <p>Sign In</p>
                <p>Help Center</p>
                <p>AGM News</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className='footerTermsCons'>
            <div className='termsContent'>
                <span>AgriGlobal Market INC ©2022 All Rights Reserved</span>
                <span>Terms and Conditions</span>
                <span>Privacy Policies</span>
            </div>
        </div>
    </div>
  )
}

export default Footer