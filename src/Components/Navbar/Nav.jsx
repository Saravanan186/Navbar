import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav(){
    return (
        <>
            <div className="flex justify-evenly bg-gray-300 h-[100px] items-center">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink to="/" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <button>Click here</button>
                </div>
            </div>
        </>
    );
}

export default Nav;
