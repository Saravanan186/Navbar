import React from "react"

import Logo from "../../assets/logo_2306634.png"

const  Navbarlinks= [
    {
    id:1,
    tittle:"home",
    links:"/" 
    },
    {
        id:2,
        tittle:"feautures",
        links:"#" 
        },
        {
            id:3,
            tittle:"shop",
            links:"#" 
            }
]

const Navbar=() => {
    return <>
    <div className="py-4 container flex justify-evenly item-center">

    <div className="flex items-center">
    <img src={Logo} alt="" className="w-[70px]" />
    <p className="font-bold">Lorem</p>
    </div>
    <div className="hidden md:block">
        <ul className="flex gap-3">
            {
            Navbarlinks.map((link) => {
                return( 
                    <li key={link.id}>
                       <a className="hover:text-primary uppercase" href={link.link}>{link.tittle}</a> 
                    

                    </li>
                );
            })}
        </ul>
    </div>
    <div>
        <button className="primary-btn"  >Reques Now</button>
    </div>
    </div>
    </>
};

export default Navbar