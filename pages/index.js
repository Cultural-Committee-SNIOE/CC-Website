import ClubsAndSocieties from '@/components/ClubsAndSocieties/ClubsAndSocieties'
import Demo from '@/components/Demo/Demo'
import HeroSection from '@/components/HeroSection/HeroSection'
import StatsSection from '@/components/StatsSection/StatsSection'
import Spons from '@/components/Spons/Spons'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {
    return (
        <main>
            <section className='HeroSection'>
                <img src='/Images/Homepage/Ellipse_1.png' className='HeroSection__image1' />
                <img src='/Images/Homepage/Ellipse_2.png' className='HeroSection__image2' />
                <HeroSection />
            </section>
            <section className='StatsSection'>
                <StatsSection />
            </section>
            <section className='ClubsAndSocietiesSection'>
                <ClubsAndSocieties />
            </section>
            <section className='Spons'>
                <Spons />
            </section>
        </main>
    )
}
