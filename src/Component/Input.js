import React from "react";

export default function Input () {
    return (
        <div className="flex justify-between items-center fixed bottom-0 w-full bg-white h-20">
            <button className="w-12 h-12 mx-3 text-5xl text-white bg-light-red rounded-full">+</button>
            <input className="py-3 px-6 mr-5 rounded-xl w-full h-10/12 text-1xl focus:outline-none bg-neutral-100" type='text' placeholder="Add a new task"></input>   
        </div>
    );
}
