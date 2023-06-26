// Used for: Club Page 
const { default: ClubPageHeader } = require("@/components/ClubPageHeader/ClubPageHeader");
import '../styles/root/clubPage.scss'
function ClubPage()
{
    return(
        <section className="ClubPageHeader">
            <ClubPageHeader />
        </section>
    )
}

export default ClubPage;

