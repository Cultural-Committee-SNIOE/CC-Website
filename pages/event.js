import HeroSectionEvent from "@/components/HeroSection2/HeroSectionEvent";
import '../components/HeroSection2/HeroSectionEvent.scss'
import ClubEventCard from "@/components/ClubEventCards/ClubEventCard";
function Event()
{
    return(
        <section className="HeroSectionContainer-event">
            <HeroSectionEvent/>
            <ClubEventCard/>
        </section>
    )
}

export default Event;