import React from "react"

interface Props {
    small?: boolean
}

const Heading: React.FC<Props> = ({ children, small }) => {
    return (
        <span className="title" style={small ? { fontSize: "3rem" } : {}}>
            {children}
        </span>
    )
}

export default Heading
