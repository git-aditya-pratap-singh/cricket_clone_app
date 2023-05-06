import React, { useState,useEffect } from "react";
import axios from "axios";
import { MdSportsCricket } from "react-icons/md";

const Data = (props) =>{
    return(
       <div className="w-[350px] p-5 bg-gray-900 mx-auto rounded-lg shadow-lg flex flex-col text-white items-center">
        <div className="w-[60px] p-4 mx-auto rounded-full shadow-lg  bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <MdSportsCricket className="font-3xl text-white " size={25}/>
        </div>

        <div className="leading-9 py-5">
        <h1 className="mt-5 font-bold">{props.date}</h1>
        {
            props.series.map((data)=>{
                
                return(
                    <>
                       
                       <h1 className="font-bold text-yellow-500">{data.name}</h1>
                       <h1>Start-Date : {data.startDt}</h1>
                       <h1>End-Date : {data.endDt}</h1>
                       <div className="w-full h-1 bg-white mt-3 rounded-md"></div>
                    </>
                );
                
            })
        }
        </div>
       </div>
    );
}
 
const SeriesList = () =>{
    const [fdata, setData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
        headers: {
          'X-RapidAPI-Key': '13355dffd9msh177dbb2aa11f7eep146392jsn3a27e917b25f',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        axios.request(options).then(function (response) {

            setData(response.data.seriesMapProto);
        }).catch(function (error) {
            console.log(new Date(1654128000000));
            console.error(error);
        });

    },[]);

    return(
        <>        
        <div className="w-full text-center pt-[25%] tab:pt-[10%] md:pt-[6%]">

        <h1 className="font-bold text-2xl md:text-4xl text-gray-800 font-serif">Series List</h1>

        <div className="w-[250px] mx-auto flex flex-row gap-x-3 items-center px-2">

        <div className="w-[60px] h-1 bg-gray-800 rounded-md"></div>
           <h1 className="text-cyan-500 font-semibold">Who I Know</h1>
        <div className="w-[60px] h-1 bg-gray-800 rounded-md"></div>

        </div>

        <div className="w-full grid grid-cols-1 tab:grid-cols-2 md:grid-cols-4 gap-2 gap-y-4 pt-5 tab:px-9 ">
        {
            fdata.map((data)=>{
                return(
                    <>
                    <Data {...data}/>
                    </>
                );
            })
        }
        </div>
         
        </div> 
        </>
    );
}
export default SeriesList;