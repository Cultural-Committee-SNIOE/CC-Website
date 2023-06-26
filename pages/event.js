import HeroSectionEvent from "@/components/HeroSection2/HeroSectionEvent";
import '../components/HeroSection2/HeroSectionEvent.scss'
import ClubEventCard from "@/components/ClubEventCards/ClubEventCard";
import ClubEvents from "@/components/ClubEvents/ClubEvents";
function Event()
{
    return(
        <section className="HeroSectionContainer-event">
            <HeroSectionEvent/>
            <ClubEvents/>
        </section>
    )
}

export default Event;