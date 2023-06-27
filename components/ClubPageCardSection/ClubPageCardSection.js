import ClubPageCard from '../ClubPageCard/ClubPageCard';
import './ClubPageCardSection.scss'

function ClubPageCardSection() {
    return(
        <div className="ClubPageCardSectionContainer">
            <div className='ClubPageCardSectionContainer__SlideSection'>
            <div className='ClubPageCardSectionContainer__SlideSection--slide'>
                <div className='ClubPageCardSectionContainer__SlideSection--slide--track'>
                    <ClubPageCard />
                </div>
            </div>
            </div>
        </div>
    )
}
export default ClubPageCardSection;