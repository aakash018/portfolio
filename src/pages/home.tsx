import React from 'react'
import avater from "../assets/avater/unknown.png"
import ScrollBar from '../components/ScrollBar'
import Heading from "../components/shared/Heading"


const Home = () => {
    return (
        <div className="home">
            <ScrollBar />
            <div className="home__container" >
                <div className="home__sitting_avater">
                    {/* width="306px" height="471px" */}
                    <img src={avater} />
                </div>
                <div className="home__text_info">
                    <div className="home__title">
                        <Heading>Aakash</Heading>
                    </div>
                    <section className="subtitle">
                        <span>A Creative <a className="highlight">Fullstack</a> </span>
                        <span>developer & <a className="highlight">designer</a></span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home
