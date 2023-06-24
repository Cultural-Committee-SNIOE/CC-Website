import HeroSectionEvent from "@/components/HeroSection2/HeroSectionEvent";

// const { default: ClubPageHeader } = require("@/components/ClubPageHeader/ClubPageHeader");
// const {HeroSectionEvent} = require("@/components/HeroSection2/HeroSectionEvent")
import '../components/HeroSection2/HeroSectionEvent.scss'
function Event()
{
    return(
        <section className="HeroSectionContainer-event">
            <HeroSectionEvent/>
        </section>
    )
}

export default Event;