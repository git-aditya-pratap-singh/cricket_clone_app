import React, {useState, useEffect} from "react";
import axios from "axios";
//import ig from "../assets/b2.jpg";

const Card = (props) =>{
    
    return(
        <>  
          <div className="max-w-[400px] p-3 bg-white rounded-lg space-y-2 shadow-lg items-center text-center ">
            
            <h1 className="text-gray-800 font-bold text-xl text-center">{props.name}</h1>

            <div className="flex flex-row space-x-5 items-center justify-center">
                
                <div className="p-3 flex flex-col items-center space-y-2">
                    <img src={props.team[0].img} alt="Error" className="rounded-full w-20 h-20 border-4 border-gray-800"/>
                    <h1 className="text-semibold bg-gray-900 p-1 rounded-lg text-white text-[12px]">{props.team[0].shortname}</h1>
                    <h1 className="text-semibold text-gray-700 text-[12px]">Score :      
                    {props.score[0].r}/{props.score[0].w}/({props.score[0].o})
                    
                    </h1>
                </div>

                <h1 className="text-gray-800 font-bold text-3xl">V/S</h1>

                <div className="p-3 flex flex-col items-center space-y-2 ">
                    <img src={props.team[1].img}  alt="Error" className="rounded-full w-20 h-20 border-4 border-gray-800"/>
                    <h1 className="text-semibold bg-gray-900 p-1 rounded-lg text-white text-[12px]">{props.team[1].shortname}</h1>
                    <h1 className="text-semibold text-gray-700 text-[12px]">Score : 
                    
                    
                   

                    </h1>
                </div>

            </div>

            <h2 className="text-gray-800 font-bold text-sm">Status : <span className="text-green-500 font-semibold">{props.status}</span></h2>
            <h2 className="text-gray-800 font-bold text-sm">Venue : <span className="text-gray-700 font-normal">{props.venue}</span></h2>
            <h2 className="text-gray-800 font-bold text-sm">Date : <span className="text-gray-700 font-normal">{props.date}</span></h2>

        </div>  

        </>
    )
}

const Current = () =>{
    const [currentdata, setCurrentdata] = useState([]);

    const API = `https://api.cricapi.com/v1/currentMatches?apikey=b4aa2e83-8b31-406b-9928-01a7f0f8cccc&offset=0`;

    useEffect(()=>{
        const fetchApi = async()=>{
            const response = await axios.get(API);
            //console.log(response);
            setCurrentdata(response.data.data);
           
        }
        fetchApi();
    },[])

    console.log(currentdata);
    return(
        <>
        <section className="bg-gray-900 w-full pt-24">
            <h2 className="text-white text-3xl text-center font-bold font-serif">Current Matches</h2>
            <div className="w-full grid grid-cols-1 tab:grid-cols-2 md:grid-cols-3 p-5 gap-5 justify-items-center">
              
               {
                   
                   currentdata.map((elem,index)=>{
                    return(
                        <>

                        <Card
                           key = {elem.id}
                           name = {elem.name}
                           team = {elem.teamInfo}
                           score = {elem.score}
                           status = {elem.status}
                           venue = {elem.venue}
                           date = {elem.date}
                           />

                        </>
                    )
                   })
               }
                
            </div>
                
        </section>
        </>
    );
}

export default Current;