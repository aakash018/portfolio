import React from 'react'

interface Props  {
    onClick: () => any
}

const WorkHolder:React.FC<Props> = ({onClick}) => {
    return (
        <div className="workHolder" >
            <div className="workHolder__contaienr" >
                <div className="workHolder__prj_logo" ></div>
                <div className="workHolder__prj_info" >
                    <div className="workHolder__prj_info_title" onClick={onClick}>HamroKhata</div>
                    <div className="workHolder__prj_info_desc" >
                    A user  based web app to keep track of expenditure mainly for students living in droms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHolder
