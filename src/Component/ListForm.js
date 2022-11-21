import React from "react";

export default function Checkbox(props) {

    const handleChecked = (id) => {
        const newArr = props.inputValue.map((item) => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        props.setInputValue(newArr);
    }

    
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl ml-10 mt-10 mb-7 text-gray-500 font-bold">My List</h2>
            <ul>
                {props.inputValue.map((todo) => (
                    <li key={todo.id} className={`mb-1 bg-white mx-5 px-5 py-3 rounded-lg shadow-md ${todo.completed ? "line-through" : "no-underline"}`}>
                        <input id={todo.id} className="w-4 h-4 mr-5 rounded-full" checked={todo.completed} onChange={() => handleChecked(todo.id)} type="checkbox" />{todo.text}
                    </li>
                ))}

            </ul>
        </div>
    )
}