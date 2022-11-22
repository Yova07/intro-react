import React, { useState } from "react";

export default function Input(props) {

    const [textValue, setTextValue] = useState('');

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            clickHandler();
        }
    }

    const changeHandler = (e) => {
        setTextValue(e.target.value)
    }

    const clickHandler = () => {
        props.setInputValue(arr => [...arr, {completed: false, id: Math.floor(Math.random() *1000), text: textValue}]);
        setTextValue('');
    }


    return (
        <div className="flex justify-between items-center z-10 w-full h-20">
            <button onClick={clickHandler} className="w-12 h-12 ml-5 rounded-l text-3xl bg-neutral-100 text-light-red">+</button>
            <input onChange={changeHandler} onKeyDown={keyHandler} value={textValue} className="py-3 px-2 mr-5 rounded-r w-full h-10/12 text-1xl focus:outline-none placeholder:text-light-red placeholder:opacity-50 bg-neutral-100" type='text' placeholder="Add a new task"></input>
        </div>
    );
}
