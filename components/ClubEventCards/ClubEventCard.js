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
        }
        ]
    return (
        EventDetails.map((item) => {
            return (
        <div key={item.name} className="EventCard-tray">
            <div className="EventCard">
                <div className="EventCard-club_img">
                    <img src={item.Hero_image} className="EventCard-club_details__img1"/>
                </div>
                <div className="EventCard-club_details">
                    <img src={item.Logo_img} className="EventCard-club_details__img2"/>
                    <div className="EventCard-club_event-details">
                        <div className="EventCard-club_event">
                            <p className="EventCard-club_event-title">{item.Title}</p>
                        </div>
                        <div className="EventCard-club_name">
                            <p className="EventCard-club_event-club">{item.Club_name}</p>
                        </div>
                    </div>
                </div>
                <div className="EventCard-event_content">
                    <p>{item.content}</p>
                </div>
                <div className="EventCard-event_details">
                    <div className="EventCard-event_details-date">
                        <p className="EventCard-event_details-all">Date</p>
                        <p className="EventCard-event_details-out">{item.date}</p>
                    </div>
                    <div className="EventCard-event_details-time">
                        <p className="EventCard-event_details-all">Time</p>
                        <p className="EventCard-event_details-out">{item.time}</p>
                    </div>
                    <div className="EventCard-event_details-venue">
                        <p className="EventCard-event_details-all">Venue</p>
                        <p className="EventCard-event_details-out">{item.venue}</p>
                    </div>
                </div>
                <div className="EventCard-enterin">
                    <p>Event Report</p>
                    <span><IoIosArrowRoundForward/></span>
                </div>
            </div>
            <div className="EventCard">
                <div className="EventCard-club_img">
                    <img src="/Images/event_cards/hero_img.png" className="EventCard-club_details__img1"/>
                </div>
                <div className="EventCard-club_details">
                    <img src="/Images/event_cards/logo_img.png" className="EventCard-club_details__img2"/>
                    <div className="EventCard-club_event-details">
                        <div className="EventCard-club_event">
                            <p className="EventCard-club_event-title">Ragnarok</p>
                        </div>
                        <div className="EventCard-club_name">
                            <p className="EventCard-club_event-club">Entrepreneur Cell</p>
                        </div>
                    </div>
                </div>
                <div className="EventCard-event_content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                </div>
                <div className="EventCard-event_details">
                    <div className="EventCard-event_details-date">
                        <p className="EventCard-event_details-all">Date</p>
                        <p className="EventCard-event_details-out">Tuesday, 4th April</p>
                    </div>
                    <div className="EventCard-event_details-time">
                        <p className="EventCard-event_details-all">Time</p>
                        <p className="EventCard-event_details-out">10am Onwards</p>
                    </div>
                    <div className="EventCard-event_details-venue">
                        <p className="EventCard-event_details-all">Venue</p>
                        <p className="EventCard-event_details-out">G Block Auditorium</p>
                    </div>
                </div>
                <div className="EventCard-enterin">
                    <p>Event Report</p>
                    <span><IoIosArrowRoundForward/></span>
                </div>
            </div>
            <div className="EventCard">
                <div className="EventCard-club_img">
                    <img src="/Images/event_cards/hero_img.png" className="EventCard-club_details__img1"/>
                </div>
                <div className="EventCard-club_details">
                    <img src="/Images/event_cards/logo_img.png" className="EventCard-club_details__img2"/>
                    <div className="EventCard-club_event-details">
                        <div className="EventCard-club_event">
                            <p className="EventCard-club_event-title">Ragnarok</p>
                        </div>
                        <div className="EventCard-club_name">
                            <p className="EventCard-club_event-club">Entrepreneur Cell</p>
                        </div>
                    </div>
                </div>
                <div className="EventCard-event_content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                </div>
                <div className="EventCard-event_details">
                    <div className="EventCard-event_details-date">
                        <p className="EventCard-event_details-all">Date</p>
                        <p className="EventCard-event_details-out">Tuesday, 4th April</p>
                    </div>
                    <div className="EventCard-event_details-time">
                        <p className="EventCard-event_details-all">Time</p>
                        <p className="EventCard-event_details-out">10am Onwards</p>
                    </div>
                    <div className="EventCard-event_details-venue">
                        <p className="EventCard-event_details-all">Venue</p>
                        <p className="EventCard-event_details-out">G Block Auditorium</p>
                    </div>
                </div>
                <div className="EventCard-enterin">
                    <p>Event Report</p>
                    <span><IoIosArrowRoundForward/></span>
                </div>
            </div>
        </div>
            );
        })
    );
};

export default ClubEventCard;