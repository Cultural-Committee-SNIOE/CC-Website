import './HeroSection.scss'

function HeroSection() {
    return (
        <div className='HeroSectionContainer'>
            <div className='HeroSectionContainer__left'>
                <p className='HeroSectionContainer__left--heading'>Celebrate Diversity, Fosters<br />Unity, and Builds an Inclusive<br/>Community Together</p>
                <p className='HeroSectionContainer__left--description'>Welcome to the Cultural Committee at Shiv Nadar Institute of Eminence. We promote cultural awareness and diversity on campus, fostering an inclusive environment for all. </p>
                <img src='/Images/Homepage/underline.png' className='HeroSectionContainer__left--underline2' />
                <img src='/Images/Homepage/underline_2.svg' className='HeroSectionContainer__left--underline' />
                <div className='HeroSectionContainer__left--buttons'>
                    <p className='HeroSectionContainer__left--buttons__explore'>Explore Clubs</p>
                    <p className='HeroSectionContainer__left--buttons__about'>About Us</p>
                </div>
                <img src='/Images/Homepage/heart.svg' className='HeroSectionContainer__left--heart' />
                <div className='HeroSectionContainer__left--sponsors'>
                    <p className='HeroSectionContainer__left--sponsors__text'>OUR TOP SPONSORS</p>
                    <img src='/Images/Homepage/sponsors.png' className='HeroSectionContainer__left--sponsors__image' />
                </div>
            </div>
            <div className='HeroSectionContainer__right'>
                <img src='/Images/Homepage/homepage_image3.png' className='HeroSectionContainer__right--image1' />
                <div className='HeroSectionContainer__right--below'>
                <img src='/Images/Homepage/homepage_image2.png' className='HeroSectionContainer__right--below--image2' />
                <img src='/Images/Homepage/homepage_image1.png' className='HeroSectionContainer__right--below--image3' />

                </div>
            </div>
        </div>
    )
}

export default HeroSection;