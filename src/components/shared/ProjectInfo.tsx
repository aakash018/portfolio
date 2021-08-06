import React, { CSSProperties } from 'react'
import { GrClose } from 'react-icons/all'

interface Props {
    title: React.ReactNode,
    desc: React.ReactNode,
    showProject: boolean,
    setShowPrj: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectInfo:React.FC<Props> = ({title, desc, showProject, setShowPrj}) => {

    const backgroundCSS: CSSProperties = {
        background: "linear-gradient(to bottom,rgb(10, 12, 19),rgba(10, 12, 19, 0.8)60%) ,url('/src/assets/PrjBG/hamroKhata.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "50%",
        backgroundPositionY: "300px",
    }

    return (
        <div className={`projectInfo ${showProject? "prj_active" : ""}`}>
            <div className="projectInfo__hide" onClick={() => setShowPrj(false)}>
                <GrClose />
            </div>
            <div className="projectInfo__container" style={backgroundCSS}>
                <div className="projectInfo__title" >
                    {title}
                </div>
                <div className="projectInfo__desc">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
