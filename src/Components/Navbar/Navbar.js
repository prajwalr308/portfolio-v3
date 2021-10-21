import React from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        
        <div className="fixed top-0 bottom-0 bg-white w-screen h-16 flex flex-row  backdrop-filter backdrop-blur-lg bg-opacity-20 ">
           <ul className="flex flex-row items-center justify-between w-full h-16 mx-5 text-gray-100 ">
               <li>Prajwal R</li>
               <li className=""><FaBars  size="20" /></li>
           </ul>
            
        </div>
       
    )
}

export default Navbar
