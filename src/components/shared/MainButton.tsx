import React from 'react'
interface Props {
    type: "button" | "submit",
    onClick ?: () => any,
}

const MainButton:React.FC<Props> = ({ type, onClick, children }) => {
    return (
        <>
            <button type={type} onClick={onClick} className="mainButton">
                {children}
            </button>
        </>
    )
}

export default MainButton
