import './ClubPageCard.scss'

function ClubPageCard() {
  const clubDetails = [
    {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "GDSC",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ACM",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ECELL",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "GDSC",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ACM",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ECELL",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "GDSC",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ACM",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ECELL",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "GDSC",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ACM",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ECELL",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "GDSC",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ACM",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "ECELL",
      "desc": "The Coding Society",
      "content": "This club aims to provide all the theatre lovers and nukkad enthusiasts an opportunity to learn more about the beautiful art and to improve as an individual."
    },
  ]

  const chunks = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const clubChunks = chunks(clubDetails, 3);

  return (
    <div className="ClubPageCardRow">
      {clubChunks.map((chunk, index) => (
        <div key={index} className="ClubPageCardContainerRow">
          {chunk.map((item) => (
            <div key={item.name} className="ClubPageCardContainer">
              <div className="ClubPageCardContainer__top">
                <div className="ClubPageCardContainer__top--imagCont">
                  <img className="ClubPageCardContainer__top--imagCont__image" src={item.image} />
                </div>
                <div className="ClubPageCardContainer__top--introCont">
                  <p className='ClubPageCardContainer__top--introCont__name'>{item.name}</p>
                  <p className='ClubPageCardContainer__top--introCont__desc'>{item.desc}</p>
                </div>
              </div>
              <div className="ClubPageCardContainer__middle">
                {item.content}
              </div>
              <div className="ClubPageCardContainer__bottom">
                <p className="ClubPageCardContainer__bottom--explore">Events</p>
                <p className="ClubPageCardContainer__bottom--learn">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ClubPageCard;   