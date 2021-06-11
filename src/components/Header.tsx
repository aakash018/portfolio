import React from "react"
import { Hamburger } from "./Hamburger"

const Header: React.FC = () => {
    return (
        <header>
            <Hamburger />

            <nav>
                <ul>
                    <li>work</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
