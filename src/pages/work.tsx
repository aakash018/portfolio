import React from 'react'
import { useState } from 'react'
import ProjectInfo from '../components/shared/ProjectInfo'
import WorkHolder from '../components/shared/WorkHolder'

const Work:React.FC = () => {

    const [showHKInfo, setHKinfo] = useState(false)

    return (
        <>
             <ProjectInfo
                title={
                    <h1>Hamro<span className="highlight_hk" >Khata</span></h1>
                }
                desc={
                    <>
                <p> This is a web app,  whose main purpose is to keep tract and devide
                 expenditure, for students living  together. The motivation of the project
                  came when me and my my room mates had a really big problem keeping tract of the expences </p>


                  <p> Basically after you make your account, you cna add information about
                       expances and the app automatically divides it to every roommates and
                        keep tracks everyons’s lone with eachother. </p>
                
                <p>I did full frontend to backend development fotr this project.</p>
                <p>
                Visite the page here:<br />
                hamrokahta.netlify.com
                </p>
                </>
                }
                showProject={showHKInfo}
                setShowPrj={setHKinfo}
             />
            <div className="work" >
                <div className="work__container" >
                    <div className="work__timeline" >
                        <div className="work__timeline_bar" />
                        <div className="work__timeline_projects" >
                            <WorkHolder onClick={()  => setHKinfo(true)}/>
                        </div>
                    </div>
                    </div>    
            </div> 
            </> 
    )
}

export default Work
