import './Footer.scss'

export default function Footer() {
    return(
        <div className='FooterContainer' 
            // style={{
            //     backgroundColor: '#FFFFFF',
            // }}
        >
            <div className='FooterContainer__main'>
                <div className='FooterContainer__main--comp'>

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
                </div>
            </div>

            <div className='FooterContainer__divider'>
                <hr className='FooterContainer__divider--line' />
                <p className='FooterContainer__divider--text'>© 2023 Cultural Committee, Shiv Nadar IoE</p>
            </div>
        </div>
    )
}