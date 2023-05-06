import React from 'react';

const Card = () =>{
    return(
        <>
        <div className="w-full px-3 flex flex-row gap-x-8 mt-3">
            <label className="text-gray-800 items-center text-center mx-auto">1.</label>
            <label className="text-gray-800 items-center text-center mx-auto">Virat Kohli</label>
            <label className="text-gray-800 items-center text-center mx-auto">939</label>

           
        </div>
        </>
    );
}

const Ranking = () =>{
    return(
        <>
        <Player/>
        <div className="w-full mx-auto px-4 pt-[10%] md:pt-[6%]">

            <div className="max-w-[500px] mx-auto p-5 text-center mt-7 md:mt-0">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">ICC Ranking</h1>

                <div className="w-[600px] mx-auto flex flex-row gap-x-3 items-center px-[12%] md:px-[26%]">

                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>
                       <h1 className="text-cyan-500 font-semibold">What I doing</h1>
                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

                </div>

            </div>

            <div className="w-full flex flex-col tab:flex-row gap-5 p-1">

                <div className="w-full bg-gray-200 mx-auto rounded-lg shadow-lg py-5">
                   <h1 className="text-center text-gray-800 text-2xl font-bold font-serif">Test</h1>

                   <div className="w-full flex flex-row font-bold gap-x-8 mx-auto mt-6">
                      <h1 className="mx-auto">Position</h1>
                       <h1 className="mx-auto">Player</h1>
                       <h1 className="mx-auto">Rating</h1>
                   </div>

                   <Card/>
                   <Card/><Card/>
                   
                </div>

                <div className="w-full bg-gray-200 mx-auto rounded-lg shadow-lg py-5">
                    <h1 className="text-center text-gray-800 text-2xl font-bold font-serif">ODI</h1>

                    <div className="w-full flex flex-row font-bold  gap-x-8 mx-auto mt-6">
                      <h1 className="mx-auto">Position</h1>
                       <h1 className="mx-auto">Player</h1>
                       <h1 className="mx-auto">Rating</h1>
                   </div>
                </div>

                <div className="w-full bg-gray-200 mx-auto rounded-lg shadow-lg py-5">
                    <h1 className="text-center text-gray-800 text-2xl font-bold font-serif">T-20</h1>

                    <div className="w-full flex flex-row font-bold  gap-x-8 mx-auto mt-6">
                      <h1 className="mx-auto">Position</h1>
                       <h1 className="mx-auto">Player</h1>
                       <h1 className="mx-auto">Rating</h1>
                   </div>
                </div>
                
                
                
            </div>
        </div>
        
        </>
    );
}
export default Ranking;