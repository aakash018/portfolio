import React, { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MobileNavState } from "../App"
import { Hamburger } from "./Hamburger"

const Header: React.FC = () => {
    const { showMobileNav, setShowMobileNav }  = useContext(MobileNavState)
    const nav = useRef<HTMLElement>(null)

    useEffect(() => {
        if(!showMobileNav) {
            nav.current?.classList.remove("nav_active")
        }
    }, [showMobileNav])

    const handleMenuClick = () => {
        nav.current?.classList.toggle("nav_active")
        setShowMobileNav(true)
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
