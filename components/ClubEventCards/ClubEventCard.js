import './ClubEventCard.scss'
import {IoIosArrowRoundForward} from "react-icons/io";

function ClubEventCard(
    Hero_image,
    Logo_img,
    Title,
    Club_name,
    content,
    date,
    time,
    venue
){
    return (
        <div className="ClubEventCard">
            <div className="ClubEventCard__container">
                {/* {EventDetails.map((Cevent) => { */}
                    {/* return( */}
                    <div className="ClubEventCard__card">
                        <div className="ClubEventCard__card__heroimg">
                            <img src={Hero_image} alt="Hero Image"/>
                        </div>
                        <div className='ClubEventCard__card__club'>
                            <img src={Logo_img} className='ClubEventCard__card__club--logo'/>
                            <div className="ClubEventCard__Card__club__details">
                                <p className='ClubEventCard__club__details--title'>{Title}</p>
                                <p className='ClubEventCard__club__details--club'>{Club_name}</p>
                            </div>
                        </div>
                        <div className='ClubEventCard__card__description'>
                            <p className='ClubEventCard__card__description--content'>{content}</p>
                        </div>
                        <div className='ClubEventCard__card__details'>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Date</p>
                                <p className='ClubEventCard__card__details--container__value'>{date}</p>
                            </div>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Time</p>
                                <p className='ClubEventCard__card__details--container__value'>{time}</p>
                            </div>
                            <div className='ClubEventCard__card__details--container'>
                                <p className='ClubEventCard__card__details--container__title'>Venue</p>
                                <p className='ClubEventCard__card__details--container__value'>{venue}</p>
                            </div>
                        </div>
                        <div className='ClubEventCard__card__button'>
                            <button className='button' type="button">Event Report <span><IoIosArrowRoundForward/></span></button>
                        </div>
                    </div>
                {/* ); */}
                {/* })} */}
            </div>
        </div>
    );
};

export default ClubEventCard;