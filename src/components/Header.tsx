import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { Hamburger } from "./Hamburger"

const Header: React.FC = () => {

    const nav = useRef<HTMLElement>(null)
    const handleMenuClick = () => {
        nav.current?.classList.toggle("nav_active")
    }

    return (
        <header>
            <div className="header_ham">
                <Hamburger onClick={handleMenuClick} />
            </div>
            <nav ref={nav} >
                <ul>
                    <li> <Link to="/work" >work</Link></li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
