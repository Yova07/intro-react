import React, { useRef} from "react";

export default function Input(props) {

    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current;
        props.setInputValue(arr => [...arr, {completed: false, id: Math.floor(Math.random() *1000), text: inputElement.value}]);
    }

    
    return (
        <div className="flex justify-between items-center fixed bottom-0 w-full bg-white h-20">
            <button onClick={clickHandler} className="w-12 h-12 mx-3 text-5xl text-white bg-light-red rounded-full">+</button>
            <input ref={inputRef} className="py-3 px-6 mr-5 rounded-xl w-full h-10/12 text-1xl focus:outline-none bg-neutral-100" type='text' placeholder="Add a new task"></input>
        </div>
    );
}
