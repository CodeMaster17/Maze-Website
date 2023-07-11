

import VisionText from '../Sections/VisionText'
import InvestmentIdea from '../Sections/InvestmentIdea'
import HeroArea from '../Sections/HeroArea'
import Waitlist from '../Sections/Waitlist'
import Working from '../Sections/Working'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'
import Youtube from '../Sections/Youtube'
import TalentCard from '../components/TalentCard'
import OurTalents from '../Sections/OurTalents'

const Home = () => {
    return (
        <>

            <HeroArea />
            <VisionText />
            <InvestmentIdea />
            <Youtube />

            {/* <Waitlist /> */}
            <OurTalents />
            <Working />
            <Contact />
        </>

    )
}

export default Home
