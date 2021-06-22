import { gsap } from "gsap";
import React, { useEffect, useRef } from 'react';
const ThankYou: React.FC = () => {

    const thanks = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    // }, [])

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: thanks.current as any,
                start: "top 55%",
                end: "center 55%",
                scrub: 0.5,
            },
        });
        tl.add("exit_avatar").to("#home__avatar__sit", {
            opacity: 0
        })
            .add("intro").to(thanks.current, {
                opacity: 1,
            })
            .add("intro").to(thanks.current, {
                opacity: 1,
            })
            .add("exist").to(thanks.current, {
                opacity: 0
            })
    }, [])



    return (

        <>
            <div className="home__text_block home__thanks" ref={thanks} >
                <div className="title_text title_small" id="home__thankYou">
                    Thank you for checking my <span className="highlight">website</span>
                </div>
                <p style={{ marginTop: "40px" }}><>Check Works and About Me section for more</></p>
                <p>aakashkhanal015@<span className="highlight">gmail.com</span></p>
            </div>
        </>
    )
}

export default ThankYou
