import React, {useState} from "react";
import axios from "axios";
import './header.css';
import Infoplayer from "./Infoplayer";

const Player = () =>{
    const [searchName, setsearchName] = useState("");
    const [searchData, setsearchData] = useState("");
    const [searchPlayerid, setsearchPlayer] = useState("");
    const [searchPlayer, setPlayer] = useState("");

    //const API = `https://api.cricapi.com/v1/players?apikey=5f927fa4-8314-471b-80d0-dbcc8176d6a4&offset=0&search=${searchData}`;

    const submitData = (event) =>{
        event.preventDefault();
        setsearchData(searchName);
        fetchApi();   
    }


    const fetchData = async() =>{
        
        const options = {
            method: 'GET',
            url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${searchPlayerid}`,
            headers: {
              'X-RapidAPI-Key': '13355dffd9msh177dbb2aa11f7eep146392jsn3a27e917b25f',
              'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
          };
          
          await axios.request(options)
          .then(function (response) {
              //console.log(response.data);
              setPlayer(response.data);
              //console.log("------>",searchPlayer);
          })
          .catch(function (error) {
              console.error(error);
          });
    }

    const options = {
       method: 'GET',
       url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search',
       params: {plrN: searchData},
       headers: {
        'X-RapidAPI-Key': '13355dffd9msh177dbb2aa11f7eep146392jsn3a27e917b25f',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };

    const fetchApi = async() =>{
        
        await axios.request(options)
        .then(function (response) {
            console.log("----------->",response.data);
            response.data.player.filter((elem,index)=>{
                if(elem.name === searchData){
                    console.warn("&&&&&&&&",elem);
                    setsearchPlayer(elem.id);
                    fetchData();
                }
                
            })
            
        })

        .catch(function (error) {
            console.error(error);
        });  
    }
    return(
        <> 
        <div className="w-full mx-auto pt-[14%] md:pt-[5%]">
            <div className="w-full flex flex-col tab:flex-row flex-wrap bg-gray-800 p-5 space-y-5 tab:space-x-8 mx-auto shadow-lg items-center">
                <label className="font-bold font-Serif text-3xl text-white font">Player Information</label>
                
                <label className="block">
                   
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full 
                    border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                    focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Search for player name..." type="search" name="search" 
                    value={searchName} onChange={(event)=>{setsearchName(event.target.value);}}  />
                </label>

                <button className="px-6 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 
                hover:text-white hover:bg-purple-600
                 hover:border-transparent focus:outline-none focus:ring-2 
                 focus:ring-purple-600 focus:ring-offset-2" type="submit" 
                 onClick={submitData}>Search</button>
                
            </div> 
            
        </div>

        {searchPlayer === "" ? null : <Infoplayer {...searchPlayer}/>}
        </>
    );
}
export default Player;