import './ClubPageHeader.scss'

function ClubPageHeader()
{
    return (
        <div className="ClubPageContainer">
            <div className="ClubPageContainer__bluebox">
                <div className="ClubPageContainer__bluebox__left">
                    <p className='ClubPageContainer__bluebox__left--hashtag'>#BeApartOfSomethingBigger</p>
                    <p className='ClubPageContainer__bluebox__left--heading'>Find your tribe and unlock new opportunities for personal and professional growth!</p>
                </div>
                <div className='ClubPageContainer__bluebox__right'>
                    <p className='ClubPageContainer__bluebox__right--para'>Welcome to our college clubs community! Find your passion and explore new interests with our diverse range of clubs. Connect with like-minded individuals and create unforgettable memories. Join us today and unlock new opportunities for personal and professional growth. </p>
                    <div className='ClubPageContainer__bluebox__right--searchBar'>
                        <p className='ClubPageContainer__bluebox__right--searchBar--text'>Try searching 'GDSC' </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.6)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubPageHeader;