import React from "react";
import About from "./About";
import banner from "../assets/bd.png";
import Bot from './Bot';
import sm from "../assets/bc.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import './header.css';


const Home = () =>{
    
    return(
        <>
       
        <div className="bg-gray-800">

            <div className="flex flex-col tab:flex-row w-full px-6">

                <div className="pt-[10%] basis-[50%]">
                    <h1 className="text-center text-white text-6xl md:text-8xl mt-[25%] md:mt-[10%] font">Welcome</h1> 
                    <h1 className="text-center text-white text-3xl font">to</h1> 
                    <h1 className="text-center text-cyan-500  text-4xl font">Sports <span className="text-yellow-500">Wala!</span></h1>
                    <p className="text-center py-5 px-5 md:px-8 text-white">No Cricket team in the world depends on one or two players.
                    The team always plays to win. Cricket is not everything, not by any means, but it is a large part of who I am.</p>
                    <div className="w-[50px] p-3 bg-orange-500 rounded-full shadow-md mx-auto  text-white text-center items-center text-[25px]">
                        <BsFillArrowDownCircleFill/></div>
                </div>

                <div className="pt-[18%] md:pt-[10%] basis-[70%]">
                    
                {
                         window.innerWidth <=600 ? (<img src={sm} alt="Error" className="bg-cover"/>):
                              (<img src={banner} alt="Error" className="bg-cover"/>)
                }
                  
                </div>
            
            </div>
            
        </div>
        <Bot/>
        <About/>
         {/* Footer Design */}

         <div className="w-full bg-slate-900 text-center items-center py-5 px-3 absolute">
            <h1 className=" text-white font-semibold text-sm tab:text-[20px] md:text-[16px]">Developed By 
            <span className="text-cyan-400"> Aditya Pratap Singh</span> | ©️ 2023 All rights reserved.</h1>
        </div>
        </>
    );
}
export default Home;