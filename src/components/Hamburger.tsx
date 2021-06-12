import React from 'react'

interface Props {
    onClick: () => any
}

export const Hamburger: React.FC<Props> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="hamburger_container">
            <div className="hamburgerMenu" >

            </div>
        </div>
    )
}
