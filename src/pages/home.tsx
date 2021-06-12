import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import avater from "../assets/avater/sitting.svg";
import ScrollBar from '../components/ScrollBar';
import Heading from '../components/shared/Heading';


const Home = () => {

    const introText = useRef<HTMLDivElement>(null)
    const course = useRef<HTMLDivElement>(null)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useEffect(() => {
        gsap.to(introText.current, {
            scrollTrigger: {
                trigger: introText.current as any,
                start: "top 40%",
                end: "center 35%",
                scrub: true,
                markers: true,
            },
            // x: 100,
            rotateZ: "30deg",
            opacity: 0,
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])


    useEffect(() => {
        gsap.to(course.current, {
            scrollTrigger: {
                trigger: course.current as any,
                start: "top 60%",
                end: "center 35%",
                scrub: true,
                markers: true,
            },
            // x: 100,
            opacity: 1,
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])

    return (
        <div className="home">
            <ScrollBar />
            <div className="home__container" >
                <div className="home__sitting_avater">
                    <img src={avater} />
                </div>
                <div className="home__text_info" >
                    <div ref={introText}>
                        <div className="home__title">
                            <Heading>Aakash</Heading>
                        </div>
                        <section className="subtitle">
                            <span>A Creative <a className="highlight">Fullstack</a> </span>
                            <span>developer & <a className="highlight">designer</a></span>
                        </section>
                    </div>
                </div>

                <div className="home__text_info " >
                    <div className="home__title "  >
                        <h1 className="home__course" ref={course}>Course of <span className="highlight">life.</span></h1>
                    </div>
                </div>




            </div>
        </div >
    )
}

export default Home
