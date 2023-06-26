const { default: ClubPageHeader } = require("@/components/ClubPageHeader/ClubPageHeader");
const { default: ClubPageCardSection } = require("@/components/ClubPageCardSection/ClubPageCardSection");

import '../styles/root/clubPage.scss'
function ClubPage()
{
    return(
        <section className="ClubPageHeader">
            <ClubPageHeader />
            <ClubPageCardSection />
        </section>
    )
}

export default ClubPage;