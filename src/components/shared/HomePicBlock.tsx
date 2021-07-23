import React from 'react'

interface Props {
    pic: string,
    rotate: boolean
}

const HomePicBlock:React.FC<Props> = ({pic, rotate}) => {
    return (
        <div>
            <div className="home__pic_block" >
                <div className={`${rotate? "home__pic_block_img" : ""}`}>
                <img src={pic} alt="code" />
                </div>
            </div>
        </div>
    )
}

export default HomePicBlock
