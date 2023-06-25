import HeroSectionEvent from "@/components/HeroSection2/HeroSectionEvent";
import ClubEventCard from "@/components/ClubEventCard/ClubEventCard";
function Event()
{
    return(
        <div className="EventContainer">
            <section className="EventHeroSection">
                <HeroSectionEvent/>
            </section>
            <section className="ClubEventCard">
                <ClubEventCard/>
            </section>
        </div>
    )
}

export default Event;