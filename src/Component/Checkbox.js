import React from "react";

export default function Checkbox() {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl ml-10 mt-10 mb-7 text-gray-500 font-bold">My List</h2>
            <div className="mb-1 bg-white mx-5 px-5 py-3 rounded-lg shadow-md">
                <input className="w-4 h-4 mr-5 rounded-full" type="checkbox" id="task-1"></input>
                <label className="text-1xl" for="task-1">Go out with the dog</label>
            </div>

            <div className="mb-1 bg-white mx-5 px-5 py-3 rounded-lg shadow-md">
                <input className="w-4 h-4 mr-5" type="checkbox" id="task-2"></input>
                <label className="text-1xl" for="task-2">Make the dish</label>
            </div>

            <div className="mb-1 bg-white mx-5 px-5 py-3 rounded-lg shadow-md">
                <input className="w-4 h-4 mr-5" type="checkbox" id="task-3"></input>
                <label className="text-1xl" for="task-3">Clean the appartement</label>
            </div>
        </div>
    )
}