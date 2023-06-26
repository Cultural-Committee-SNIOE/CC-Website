import EventHeroSection from '@/components/EventHeroSection/EventHeroSection';

import ClubEventCard from "@/components/ClubEventCards/ClubEventCard";
function Event()
{
    return(
        <div className="EventContainer">
            <section>
                <EventHeroSection/>
            </section>
            <section className="ClubEventCard">
                <ClubEventCard/>
            </section>
        </div>
    )
}

export default Event;