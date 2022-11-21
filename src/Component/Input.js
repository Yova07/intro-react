import React, { useState } from "react";

export default function Input(props) {

    const [inputValue, setInputValue] = useState('');

    const handleValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        props.setInput(arr => [...arr, {completed: false, id: Math.floor(Math.random() * 1000), text: inputValue}]);
        setInputValue('');
    }

    return (
        <div className="flex justify-between items-center fixed bottom-0 w-full bg-white h-20">
            <button onClick={handleClick} className="w-12 h-12 mx-3 text-5xl text-white bg-light-red rounded-full">+</button>
            <input value={inputValue} onChange={handleValue} className="py-3 px-6 mr-5 rounded-xl w-full h-10/12 text-1xl focus:outline-none bg-neutral-100" type='text' placeholder="Add a new task"></input>
        </div>
    );
}
