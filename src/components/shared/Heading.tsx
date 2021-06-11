import React from "react"

const Heading: React.FC = ({ children }) => {
    return (
        <span className="title" >
            {children}
        </span>
    )
}

export default Heading
