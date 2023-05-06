import React,{useState, useEffect} from "react";
import HashLoader from "react-spinners/HashLoader";

const Infoplayer = (props) =>{
    const [loading,setloading]=useState(false)

    useEffect(()=>{
      setloading(true)
        setTimeout(() => {
          setloading(false)
        },4000);
    },[])

    return(
        <>
        {
        loading ? <HashLoader color="#0bb8f1" loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader"
        className="mx-auto mt-[10rem]"/>
        :  
        <div>
            {/* Image and Player name Section */}
            <div className="w-full p-5 flex flex-col tab:flex-row space-x-11">
                <div className="w-[200px] h-[200px] rounded-md shadow-lg bg-gray-500 p-2 ">
                    <img src={props.image} alt="Error!" className="bg-center bg-cover"/>
                </div>

                <div className="flex flex-col space-y-2 tab:mt-[120px]">
                    <h1 className="text-gray-800 font-bold text-3xl">{props.name}</h1>
                    <h1 className="text-gray-800 font-semibold">{props.intlTeam}</h1>
                </div>

            </div>


             {/* Player Information section */}
            <div className="w-full p-5 flex flex-col tab:flex-row">
                {/* Personal Information */}
                <div className="max-w-[500px] bg-gray-200 p-6 rounded-md shadow-md">
                    <h1 className="font-bold text-gray-800 text-xl">Personal Information</h1>

                    <div className="mt-5 flex flex-col space-y-3">

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">DOB :</h1>
                            <h1 className=" max-w-[250px] text-gray-800 text-[14px]">{props.DoB}</h1>
                        </div>


                        <div className="w-full flex flex-row space-x-3 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Birth-Place :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.birthPlace}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Height :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.height}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Role :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.role}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Batting :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.bat}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Bowling :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.bowl}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Nickname :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.nickName}</h1>
                        </div>

                        <div className="w-full flex flex-row space-x-4 items-center">
                            <h1 className="min-w-[100px] font-bold text-gray-800 text-[15px]">Teams :</h1>
                            <h1 className="max-w-[250px] text-gray-800 text-[14px]">{props.teams}</h1>
                        </div>

                        
                    </div>

                    <div>
                    <h1 className="mt-5 font-bold text-gray-800 text-xl">Ranking</h1>
                     <h1 className="ml-5 mt-3 font-bold text-gray-800 text-[14px]">Batting</h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">Test : </h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">ODI :</h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">T-20 :</h1>


                     <h1 className="ml-5 mt-3 font-bold text-gray-800 text-[14px]">Bowling</h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">Test : </h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">ODI : </h1>
                     <h1 className="ml-8 mt-3 font-bold text-gray-800 text-[14px]">T-20 : </h1>
                    </div>

                    
                </div>

                {/* Player Record */}

                <div>
                    Aditya
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default Infoplayer;