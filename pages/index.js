import Demo from '@/components/Demo/Demo'
import HeroSection from '@/components/HeroSection/HeroSection'
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
        </main>
    )
}
