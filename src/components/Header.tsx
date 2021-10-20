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
            {/* <div className="header_logo" >
                aakash
            </div> */}
            <nav ref={nav} >
                <ul>
                    <li> <Link to="/" >aakash</Link></li>
                    <li> <Link to="/work" >work</Link></li>
                    <li> <Link to="/about" >about</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
