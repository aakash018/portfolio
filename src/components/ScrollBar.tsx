import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from 'react';
const ScrollBar = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useEffect(() => {
        gsap.to(".sudo_scrollBar__top_bar", {
            scrollTrigger: {
                trigger: "#home__subtitle",
                start: "30% 40%",
                end: "center 35%",
                scrub: 2,
                // markers: true,
            },
            transformOrigin: "bottom",
            scale: 1,
            opacity: 1
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])

    useEffect(() => {
        gsap.to(".sudo_scrollBar__bottom_bar", {
            scrollTrigger: {
                trigger: "#home__thankYou",
                start: "top 70%",
                end: "40% 65%",
                scrub: 2,
            },
            transformOrigin: "top",
            scale: 0,
            opacity: 0
            // rotateX: "180deg",
            // transformStyle: "preserve-3d",

        });
    }, [])

    return (
        <div className="sudo_scrollBar">
            <div className="sudo_scrollBar__top_bar"></div>
            <div className="sudo_scrollBar__circle"></div>
            <div className="sudo_scrollBar__bottom_bar"></div>
        </div>
    )
}

export default ScrollBar
