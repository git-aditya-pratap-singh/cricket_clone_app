import React, {useState} from "react";
import { Outlet, NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { MdSportsCricket } from "react-icons/md";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";


const Navbar = () =>{
    const [toggle, setToggle] = useState(false);
    return(
        <>
        <div className="w-full bg-gray-800 p-3 fixed">
            <div className="max-w-[1450px] mx-auto flex justify-between items-center px-2 md:px-[20px] bg-red ">

            <div className="text-2xl font-bold text-cyan-500 flex items-center">
                <img src={logo} alt="Error" className="w-[50px] md:w-[50px]"/>
                <h1>Spo<span className="text-yellow-500">rts.</span></h1>
            </div>

            {
                    toggle?
                    <ImCross onClick={() => setToggle(!toggle)} className="text-2xl text-white block md:hidden"/>
                    :
                    <TiThMenu onClick={() => setToggle(!toggle)} className="text-2xl text-white block md:hidden"/>
            }

            <ul className="hidden md:flex text-white font-semibold gap-12 items-center">

                    <li className="hover:text-cyan-500 ease-in duration-300 break-before-column cursor-pointer">
                        <NavLink to="/" smooth={true} duration={800} className="flex flex-row items-center gap-1"><AiFillHome/>Home</NavLink>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <NavLink to="/about" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUser/>About-Us</NavLink>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <NavLink to="/current" smooth={true} duration={800} className="flex flex-row items-center gap-1"><GiAmericanFootballHelmet/>Current Matches</NavLink>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <NavLink to="" smooth={true} duration={800} className="flex flex-row items-center gap-1"><MdSportsCricket/>Live Score</NavLink>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <NavLink to="/series" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaClipboardList/>Series List</NavLink>                  
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <NavLink to="/player" smooth={true} duration={800} className="flex flex-row items-center gap-1"><RiUserSearchFill/>Player Info</NavLink>
                    </li>
            </ul>

             {/* Mobile/tab Menu bar*

             <ul className={`flex flex-col duration-300 md:hidden w-full text-center absolute bg-slate-50 shadow-lg rounded-b-lg
             top-0 left-0 text-gray-800 font-semibold transition-all-duration-500 ease-in-out border-t-2
             ${toggle? 'top-[44px]':'top-[-100%]'}
             `}>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer" >
                       <Link to="home" onClick={() => setToggle(false)} smooth={true} duration={800}>🏠Home</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="about" onClick={() => setToggle(false)} smooth={true} duration={800}>🧖‍♂️About-Us</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="skill" onClick={() => setToggle(false)} smooth={true} duration={800}>🪬Skills</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="project" onClick={() => setToggle(false)} smooth={true} duration={800}>🎖️Projects</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="reposit" onClick={() => setToggle(false)} smooth={true} duration={800}>🪟Repositories</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="contact" onClick={() => setToggle(false)} smooth={true} duration={800}>📞Contact</Link>
                    </li>
            </ul>*/}

            <div className={`w-[210px] bg-gray-800 md:hidden absolute mt-[460px]  py-9 shadow-lg rounded-b-lg
            transition-all-duration-500 ease-in-out duration-300
            ${toggle? 'right-0':'right-[-80%]'}
            `}>
            <ul className="flex flex-col text-white font-semibold gap-10 items-center">

                <li className="hover:text-cyan-500 ease-in duration-300 break-before-column cursor-pointer ">
                    <NavLink to="/" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><AiFillHome/>Home</NavLink>
                </li>

                <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                    <NavLink to="/about" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUser/>About-Us</NavLink>
                </li>

                <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                    <NavLink to="home" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><GiAmericanFootballHelmet/>Current Matches</NavLink>
                </li>

                <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                    <NavLink to="" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><MdSportsCricket/>Live Score</NavLink>
                </li>

                <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                    <NavLink to="/series" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaClipboardList/>Series List</NavLink>                  
                </li>

                <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                    <NavLink to="/player" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><RiUserSearchFill/>Player Info</NavLink>
                </li>
            </ul>
            </div>

            </div>
        </div>
        <Outlet/>
        </>
    );
}
export default Navbar;