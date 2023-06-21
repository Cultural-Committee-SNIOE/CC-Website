import './StatsSection.scss'

function StatsSection() {
    return (
    <div className='StatsContainer'>
        <div className='StatsContainer__top'>
            <div className='StatsContainer__top--left'>
                <p className='StatsContainer__top--left__hashtag'>#CulturalCommitteeStatistics</p>
                <p className='StatsContainer__top--left__heading'>Data-Driven Insights<br />for our Cultural Events</p>
            </div>
            <div className='StatsContainer__top--right'>
                <p className='StatsContainer__top--right__description'>Highlighting the success and impact of the events organized by the committee & demonstrates the committee&apos;s commitment to promoting cultural diversity.</p>
            </div>
        </div>
        <div className='StatsContainer__bottom'>
            <div className='StatsContainer__bottom--video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ysPr0CuXZ9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='StatsContainer__bottom--stats'>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>40+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Clubs & Societies</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>26L+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Funds Raised</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>20+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Events Organized</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>10K+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Yearly Footfall</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StatsSection;