import React from "react"
// import Hero from "../Hero/Hero";
import Logo from "../../assets/logo_2306634.png"
import { Link, NavLink } from "react-router-dom";

const Navbar=() => {
    return <>
    <div className="py-4 container flex justify-evenly item-center">

    <div className="flex items-center">
    <img src={Logo} alt="" className="w-[70px]" />
    <p className="font-bold">Lorem</p>
    </div>
    <div className="hidden md:block">
        <ul className="flex gap-3">
            <Link to="/home" className="hover:text-primary uppercase">
                Home
              </Link>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    <div>
        <button className="primary-btn"  >Reques Now</button>
    </div>
    </div>
    </>
};

export default Navbar