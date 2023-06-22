import './Footer.scss'

export default function Footer() {
    return(
        <div className='FooterContainer' >
            <div className='FooterContainer__main'>
                <div className='FooterContainer__main--comp'>
                    <div>
                        <img src="Images/Utils/cc_logo.png" className='FooterContainer__main--comp__logo' />
                    </div>
                    <p className='FooterContainer__main--comp__text'>Cultural Committee, SNIoE</p>
                    <div className='FooterContainer__main--comp__social'>
                        <img src="Images/Utils/instagram.png"/>
                        <img src="Images/Utils/facebook.png"/>
                        <img src="Images/Utils/twitter.png"/>
                        <img src="Images/Utils/linkedin.png"/>
                    </div>
                </div>
                <div className='FooterContainer__main--comp'>
                    <h3 className='FooterContainer__main--comp__heading'>Pages</h3>
                    <p className='FooterContainer__main--comp__text'>Home</p>
                    <p className='FooterContainer__main--comp__text'>Pricing</p>
                    <p className='FooterContainer__main--comp__text'>Blog</p>
                    <p className='FooterContainer__main--comp__text'>Clubs</p>
                </div>
                <div className='FooterContainer__main--comp'>
                    <h3 className='FooterContainer__main--comp__heading'>Services</h3>
                    <p className='FooterContainer__main--comp__text'>Shopify</p>
                    <p className='FooterContainer__main--comp__text'>Wordpress</p>
                    <p className='FooterContainer__main--comp__text'>UI/UX</p>
                    <p className='FooterContainer__main--comp__text'>Bookings</p>
                </div>
                <div className='FooterContainer__main--comp'>
                    <h3 className='FooterContainer__main--comp__heading'>Resources</h3>
                    <p className='FooterContainer__main--comp__text'>HTML</p>
                    <p className='FooterContainer__main--comp__text'>CSS</p>
                    <p className='FooterContainer__main--comp__text'>JavaScript</p>
                    <p className='FooterContainer__main--comp__text'>React</p>
                </div>
                <div className='FooterContainer__main--comp'>
                    <h3 className='FooterContainer__main--comp__heading'>Company</h3>
                    <p className='FooterContainer__main--comp__text'>Pricing</p>
                    <p className='FooterContainer__main--comp__text'>Security</p>
                    <p className='FooterContainer__main--comp__text'>Privacy Policy</p>
                    <p className='FooterContainer__main--comp__text'>Terms of Service</p>
                </div>
                <div className='FooterContainer__main--comp'>
                    <h3 className='FooterContainer__main--comp__heading'>About Us</h3>
                    <p className='FooterContainer__main--comp__text'>You can contact us to send email</p>
                    <div className='FooterContainer__main--comp__contact'>
                        <input type='text' placeholder='Email' className='FooterContainer__main--comp__contact__input' />
                        <button className='FooterContainer__main--comp__contact__button'><img src='Images/Utils/send.png'/></button>
                    </div>
                </div>
            </div>

            <div className='FooterContainer__divider'>
                <hr className='FooterContainer__divider--line' />
                <p className='FooterContainer__divider--text'>© 2023 Cultural Committee, Shiv Nadar IoE</p>
            </div>
        </div>
    )
}