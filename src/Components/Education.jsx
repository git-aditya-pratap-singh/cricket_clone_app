import React from 'react';

const Education = () =>{
    return(
        <> 
        <div className="w-full mx-auto px-5 pt-[6%]">

            <div className="max-w-[500px] mx-auto p-5 text-center mt-7 md:mt-0">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Education</h1>

                <div className="w-[600px] mx-auto flex flex-row gap-x-3 items-center px-[26%]">

                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>
                        <h1 className="text-cyan-500 font-semibold">What I doing</h1>
                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

                </div>

            </div>

            <div className="flex flex-col">
            <div className="flex flex-row gap-5 mx-auto max-w-[500px] p-5">
                <div className="w-3 h-3 p-2 mt-2 bg-gray-800 rounded-full shadow-md"></div>
                <div className="flex flex-col">
                    <h1 className="font-bold tab:text-xl">Masters Of Computer Application (MCA)</h1>
                    <p className="text-cyan-500 text-semibold">Bundelkhand University, Jhansi</p>
                    <p>July 2021 - June 2023</p>
                    <p className="text-gray-500 text-[13px]">Completed Master Of Computer Application from Bundelkhand University, Jhansi. I got overall 74% in my MCA Degree.</p>
                </div>
            </div>


            <div className="flex flex-row gap-5 mx-auto max-w-[500px] p-5">
                <div className="w-3 h-3 p-2 mt-2 bg-gray-800 rounded-full shadow-md"></div>
                <div className="flex flex-col">
                    <h1 className="font-bold tab:text-xl">Masters Of Computer Application (MCA)</h1>
                    <p className="text-cyan-500 text-semibold">Bundelkhand University, Jhansi</p>
                    <p>July 2021 - June 2023</p>
                    <p className="text-gray-500 text-[13px]">Completed Master Of Computer Application from Bundelkhand University, Jhansi. I got overall 74% in my MCA Degree.</p>
                </div>
            </div>
            </div>

        </div>
        </>
    );
}
export default Education;