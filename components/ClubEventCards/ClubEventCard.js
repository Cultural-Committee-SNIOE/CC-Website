import './ClubEventCard.scss'
import {IoIosArrowRoundForward} from "react-icons/io";

const ClubEventCard = () => {
    const EventDetails = [
        {
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },
        {
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },{
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },
        {
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },{
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },
        {
            "Hero_image": '/Images/event_cards/hero_img.png',
            "Logo_img": '/Images/event_cards/logo_img.png',
            "Title": "Ragnarok",
            "Club_name": "Entrepreneur Cell",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
            "date": "Tuesday, 4th April",
            "time": "10am Onwards",
            "venue":"G Block Auditorium"
        },
        ]
    return (
        <div className="ClubEventCard">
            <div className="ClubEventCard__container">
                {EventDetails.map((Cevent) => {
                    return(
                    <div className="ClubEventCard__card">
                        <div className="ClubEventCard__card__heroimg">
                            <img src={Cevent.Hero_image} alt="Hero Image"/>
                        </div>
                        <div className='ClubEventCard__card__club'>
                            <img src={Cevent.Logo_img} className='ClubEventCard__card__club--logo'/>
                            <div className="ClubEventCard__Card__club__details">
                                <p className='ClubEventCard__club__details--title'>{Cevent.Title}</p>
                                <p className='ClubEventCard__club__details--club'>{Cevent.Club_name}</p>
                            </div>
                        </div>
                        <div className='ClubEventCard__card__description'>
                            <p className='ClubEventCard__card__description--content'>{Cevent.content}</p>
                        </div>
                        <div className='ClubEventCard__card__details'>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Date</p>
                                <p className='ClubEventCard__card__details--container__value'>{Cevent.date}</p>
                            </div>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Time</p>
                                <p className='ClubEventCard__card__details--container__value'>{Cevent.time}</p>
                            </div>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Venue</p>
                                <p className='ClubEventCard__card__details--container__value'>{Cevent.venue}</p>
                            </div>
                        </div>
                        <div className='ClubEventCard__Card__report'>
                            <button className='ClubEvent__Card__report--button'>
                            Event Report<span><IoIosArrowRoundForward/></span></button>
                        </div>
                    </div>
                );})}
            </div>
        </div>
    );
};

export default ClubEventCard;