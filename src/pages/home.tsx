import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useContext, useEffect, useRef } from 'react';
import avater from "../assets/avater/sitting.svg";
import ScrollBar from '../components/ScrollBar';
import ThankYou from "../components/ThankYou";

import codePic from "../assets/home_blocks/code.svg"
import sun from "../assets/home_blocks/sun.png"
import HomePicBlock from "../components/shared/HomePicBlock";
import { MobileNavState } from "../App";


const Home:React.FC = () => {

    const introText = useRef<HTMLDivElement>(null)
    const introText_subtitle = useRef<HTMLDivElement>(null)
    const course = useRef<HTMLDivElement>(null)
    const work = useRef<HTMLDivElement>(null)
    const current = useRef<HTMLDivElement>(null)
    const early = useRef<HTMLDivElement>(null)
    const early_dis = useRef<HTMLDivElement>(null)

    const {setShowMobileNav} = useContext(MobileNavState)

    // * INIT
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useEffect(() => {
        setShowMobileNav(false)
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
            stagger: 3,
            opacity: 1,
            rotateX: "0",
        })
            .add("intro").to(work.current, {
                stagger: 3,
                opacity: 1,
                rotateX: "0",
            })
            .add("exist").to(work.current, {
                opacity: 0,
                // rotateZ: "30deg"
            })
    }, [])

    // * CURRENT
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
            stagger: 3,
            opacity: 1,
            rotateX: "0",
        })
            .add("intro").to(current.current, {
                stagger: 3,
                opacity: 1,
                rotateX: "0",
            })
            .add("exist").to(current.current, {
                opacity: 0,
                // rotateZ: "30deg"
            })
    }, [])


    // * Early 
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: early.current as any,
                start: "top 55%",
                end: "+=200 55%",
                scrub: 1,
            },
        });
        tl.add("intro").to(early.current, {
            stagger: 3,
            opacity: 1,
            rotateX: "0",
        })
            .add("intro").to(early.current, {
                stagger: 3,
                opacity: 1,
                rotateX: "0",
            })
            .add("exist").to(early.current, {
                opacity: 0,
                rotateZ: "30deg"
            })
    }, [])

    // * Early dis 
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: early_dis.current as any,
                start: "top 55%",
                end: "bottom 55%",
                scrub: 0.5,
            },
        });
        tl.add("intro").to(early_dis.current, {
            stagger: 3,
            opacity: 1,
            rotateX: "0",
        })
            .add("intro").to(early_dis.current, {
                stagger: 3,
                opacity: 1,
                rotateX: "0",
            })
            .add("exist").to(early_dis.current, {
                opacity: 0,
                // rotateZ: "30deg"
            })
    }, [])

    // Sun 
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: early_dis.current as any,
                start: "top 55%",
                end: "bottom 55%",
                scrub: 0.5,
            },
        });
        tl.add("intro").to(".home__early_sun", {
            opacity: 1,
        })
            .add("intro").to(".home__early_sun", {
                opacity: 1,
                transform: "translate(5px, -1px)",   
            })
            .add("exist").to(".home__early_sun", {
                opacity: 0,
                transform: "translate(60px, -1px)",
            })
    }, [])
        



    return (

        <div className="home">
            <ScrollBar />
            <div className="home__container" >
                <div className="home__sitting_avater" id="home__avatar__sit">
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
                                <span>web developer</span>
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
                        <HomePicBlock pic={codePic} rotate={false}/>
                    </div>


                    <div className="home__text_block home__work" ref={current}>
                        <div className="title_text">Currently</div>
                        <p>
                            doing my <span className="highlight"><b>Bachelor in Computer Engineering </b></span>
                            from <span className="highlight"><b>Advanced College of Engineering and Management</b></span>
                        </p>
                    </div>

                    <div className="home__text_block home__course" ref={early}>
                        <div className="title_text">Early<span className="highlight">Days</span></div>
                        {/* <p>
                            It all startes when I  was , you can say, forced
                            to  pick Qbasic in grade 6. I was lucky enough
                            to fall in love with it really fast.
                        </p> */}
                    </div>


                    <div className="home__text_block home__early_dis home__work" ref={early_dis}>
                        <p>
                            Got to know about basic <span className="highlight">HTML</span>  through school curriculum and have been hooked with it ever since.
                        </p>
                        <p>
                            Highschool was where I got to explore it more and lernet <span className="highlight"> HTML</span>
                            and<span className="highlight"> CSS</span> with some basic
                            <span className="highlight"> JS</span>.
                        </p>
                        <p>
                            Also I made my first “real” web project during this period.
                        </p>
                        <div className="home__early_sun" >
                            <HomePicBlock pic={sun} rotate={true}/>
                        </div>
                    </div>


                    <ThankYou />
                </div>
            </div>


        </div >
    
        
    )
}

export default Home
