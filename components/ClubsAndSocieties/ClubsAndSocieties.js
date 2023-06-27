import ClubsAndSocsCard from '../ClubsAndSocsCard/ClubsAndSocsCard';
import './ClubsAndSocieties.scss'

function ClubsAndSocieties() {
    return (
        <div className="ClubsAndSocietiesContainer">
            <div className='ClubsAndSocietiesContainer__top'>
                <p className='ClubsAndSocietiesContainer__top--heading'>
                    Our Clubs & Societies
                </p>
                <img className='ClubsAndSocietiesContainer__top--image' src='/Images/ClubsAndSocieties/underline.svg' />
                <p className='ClubsAndSocietiesContainer__top--description'>Welcome to the Cultural Committee at Shiv Nadar Institute of Excellence. We promote cultural awareness and diversity on campus, fostering an inclusive environment for all. </p>
            </div>
            <div className='ClubsAndSocietiesContainer__SlideSection'>
                <div className='ClubsAndSocietiesContainer__SlideSection--slide'>
                    <div className='ClubsAndSocietiesContainer__SlideSection--slide--track'>
                        <ClubsAndSocsCard />
                    </div>
                </div>
                <div className='ClubsAndSocietiesContainer__SlideSection--slide2'>
                    <div className='ClubsAndSocietiesContainer__SlideSection--slide2--track'>
                        <ClubsAndSocsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClubsAndSocieties;