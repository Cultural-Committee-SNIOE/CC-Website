import './ClubsAndSocsCard.scss'

function ClubsAndSocsCard() {
    const clubDetails = [
        {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        },
        {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "GDSC",
            "desc": "The Coding Society",
            "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
        },
    ]
    return (
        clubDetails.map((item) => {
            return (
            <div key={item.name} className="ClubsAndSocsCardContainer">
                <div className="ClubsAndSocsCardContainer__top">
                    <div className="ClubsAndSocsCardContainer__top--imagCont">
                        <img className="ClubsAndSocsCardContainer__top--imagCont__image" src={item.image} />
                    </div>
                    <div className="ClubsAndSocsCardContainer__top--introCont">
                        <p className='ClubsAndSocsCardContainer__top--introCont__name'>{item.name}</p>
                        <p className='ClubsAndSocsCardContainer__top--introCont__desc'>{item.desc}</p>
                    </div>
                </div>
                <div className="ClubsAndSocsCardContainer__middle">
                    {item.content}
                </div>
                <div className="ClubsAndSocsCardContainer__bottom">
                    <p className="ClubsAndSocsCardContainer__bottom--explore">Events</p>
                    <p className="ClubsAndSocsCardContainer__bottom--learn">Learn More</p>
                </div>
            </div>
            )
        })
    )
}

export default ClubsAndSocsCard;