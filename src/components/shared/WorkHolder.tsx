import React from 'react'
interface Props  {
    title: string,
    desc: string,
    logo: string,
    onClick: () => any
}

const WorkHolder:React.FC<Props> = ({onClick, title, desc, logo}) => {
    return (
        <div className="workHolder" >
            <div className="workHolder__container" onClick={onClick}>
                <div className="workHolder__prj_logo" >
                    <img src={logo} alt="HamroKhata" />
                </div>
                <div className="workHolder__prj_info" >
                    <div className="workHolder__prj_info_title" >{title}</div>
                    <div className="workHolder__prj_info_desc" >
                    {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHolder
