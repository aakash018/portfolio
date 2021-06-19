import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import avater from "../assets/avater/sitting.svg";
import ScrollBar from '../components/ScrollBar';


const Home = () => {

    const introText = useRef<HTMLDivElement>(null)
    const introText_subtitle = useRef<HTMLDivElement>(null)
    const course = useRef<HTMLDivElement>(null)
    const work = useRef<HTMLDivElement>(null)
    const current = useRef<HTMLDivElement>(null)
    const early = useRef<HTMLDivElement>(null)

    // * INIT
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    // * Introduse main
    useEffect(() => {
        gsap.to([introText.current], {
            scrollTrigger: {
                trigger: introText.current as any,
                start: "30% 40%",
                end: "center 35%",
                scrub: 1,
                // markers: true,
            },
            transformOrigin: "center",
            rotateZ: "20deg",
            opacity: 0,
            duration: 2
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])

    // * Introduse Subs
    useEffect(() => {
        gsap.to(introText_subtitle.current, {
            scrollTrigger: {
                trigger: introText_subtitle.current as any,
                start: "top 50%",
                end: "center 45%",
                scrub: 1,
                // markers: true,
            },
            // x: 100,
            rotateZ: "-20deg",
            opacity: 0,
            duration: 2
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])


    // * Course of life
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: course.current as any,
                start: "top 55%",
                end: "+=200 55%",
                scrub: 1,
                // markers: true
            },
        });
        tl.add("intro").to(course.current, {
            stagger: 3,
            opacity: 1,
            rotateX: "0",
        })
            .add("intro").to(course.current, {
                stagger: 3,
                opacity: 1,
                rotateX: "0",
            })
            .add("exist").to(course.current, {
                opacity: 0,
                rotateZ: "30deg"
            })
    }, [])

    // * Work 
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: work.current as any,
                start: "top 55%",
                end: "bottom 55%",
                scrub: 0.5,
            },
        });
        tl.add("intro").to(work.current, {
            opacity: 1,
            // rotateX: "0",
        })
            .add("intro").to(work.current, {
                opacity: 1,
                // rotateX: "0",
            })
            .add("exist").to(work.current, {
                opacity: 0,
                rotateZ: "30deg"
            })
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: current.current as any,
                start: "top 55%",
                end: "bottom 55%",
                scrub: 0.5,
            },
        });
        tl.add("intro").to(current.current, {
            opacity: 1,
            // rotateX: "0",
        })
            .add("intro").to(current.current, {
                opacity: 1,
                // rotateX: "0",
            })
            .add("exist").to(current.current, {
                opacity: 0,
                rotateZ: "30deg"
            })
    }, [])


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: early.current as any,
                start: "top 55%",
                end: "bottom 55%",
                scrub: 0.5,
            },
        });
        tl.add("intro").to(early.current, {
            opacity: 1,
            // rotateX: "0",
        })
            .add("intro").to(early.current, {
                opacity: 1,
                // rotateX: "0",
            })
            .add("exist").to(early.current, {
                opacity: 0,
                rotateZ: "30deg"
            })
    }, [])

    return (
        <div className="home">
            <ScrollBar />
            <div className="home__container" >
                <div className="home__sitting_avater">
                    <img src={avater} />
                </div>
                <div className="home__text_info" >
                    <div className="home__text_block" >
                        <div className="home__title">
                            <h1 className="title_text" ref={introText} id="home__subtitle" >Aakash</h1>
                        </div>
                        <div className="subtitle">
                            <div ref={introText_subtitle}>
                                <span >A Creative <b className="highlight">Fullstack</b> </span>
                                <span>developer & <b className="highlight">designer</b></span>
                            </div>
                        </div>
                    </div>


                    <div ref={course} className="home__course home__text_block" >
                        <span className="title_text home__course__text" >Course of <span className="highlight">life.</span></span>
                    </div>

                    <div className="home__text_block home__work" ref={work}>
                        <div className="title_text" >
                            Wo<span className="highlight" >rk</span>
                        </div>
                        <p>
                            I am most comfortable using either <span className="highlight" ><b>MERN </b></span>
                            or <span className="highlight" ><b>PERN</b></span> stack  but am always looking
                            forward learning any new technologies.
                            Also have couple of production and some
                            for fun projects under my belt.
                        </p>
                    </div>


                    <div className="home__text_block home__work" ref={current}>
                        <div className="title_text">Currently</div>
                        <p>
                            doing my <span className="highlight"><b>Bachelor in Computer Engineering </b></span>
                            from <span className="highlight"><b>Advanced College of Engineering and Management</b></span>
                        </p>
                    </div>

                    <div className="home__text_block home__early" ref={early}>
                        <div className="title_text">Early<span className="highlight">Days</span></div>
                        <p>
                            It all startes when I  was , you can say, forced
                            to  pick Qbasic in grade 6. I was lucky enough
                            to fall in love with it really fast.
                        </p>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Home
