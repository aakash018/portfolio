import React from 'react'
import MainButton from '../components/shared/MainButton'
import { FiDownload } from "react-icons/fi"


const About:React.FC = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__title">
                    <span>About</span> 
                    <MainButton type="button" > resume <FiDownload /> </MainButton>
                </div>
                <div className="about__bio">
                    I am a full-stack developer, who mains on <span className="highlight">MERN</span> and 
                    <span className="highlight"> PERN</span> stack, 
                    and based on Kathmanud.
                </div>
                <div className="about__main_skills about_subs">
                    Main <span className="highlight">Skills</span>
                </div>
                <div className="about__skill_list">
                    <div className="about__skill_block">
                        <div className="title">Languages</div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className="about__skill_block">
                        <div className="title">FrontEnd <span className="highlight">Tools</span></div>
                        <ul>
                            <li>React</li>
                            <li>Sass</li>
                            <li>Next.js</li>
                            <li>Vite</li>
                            <li>CRA</li>
                            <li>Figma</li>
                            <li>Axios</li>
                        </ul>
                    </div>

                    <div className="about__skill_block">
                        <div className="title">BackEnd <span className="highlight">Tools</span></div>
                        <ul>
                            <li>Node</li>
                            <li>Typescript</li>
                            <li>Sockets</li>
                            <li>Git</li>
                            <li>REST</li>
                            <li>MongoDB</li>
                            <li>ProstgresSQL</li>
                        </ul>
                    </div>
                </div>

                <div className="about__edu">
                    <div className="about_subs">Education</div>
                    
                    <div className="about__edu about_bio">
                    I am currently pursuing my Bachelor in Computer Engineering
                    and am at my 4th semester
                    </div>
                    
                </div>

                <div className="about__hobbies">
                <div className="about_subs">Hobbies</div>
                <div className="about_bio">
                Beside coding, I mainly keep myself busy with video games, musics, books
                <br /> and most important of all cooking. I am a really sucker for good food.
                </div>
                </div>

            </div>
        </div>
    )
}

export default About
