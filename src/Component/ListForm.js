import React from "react";

export default function Checkbox(props) {

    const checkedHandler = (id) => {
        props.setInputValue(props.inputValue.map((item) => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        }));
    }

    const deleteElement = (id) => {
        props.setInputValue(props.inputValue.filter((el) => {
            return el.id !== id;
        }));  
         
        props.setLocalData(id);
    }

    
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mx-10 mt-10 mb-7 text-gray-500 font-bold">My List</h2>
            <ul>
                {props.inputValue.map((todo) => (
                    <li key={todo.id} className={`mb-1 bg-white relative mx-5 px-5 py-3 rounded shadow-md ${todo.completed ? "line-through" : "no-underline"}`}>
                        <input className="w-4 h-4 mr-5 rounded-full" checked={todo.completed} onChange={() => checkedHandler(todo.id)} type="checkbox" />{todo.text}
                        <i onClick={() => deleteElement(todo.id)} className="fa-solid fa-trash absolute right-5 text-gray-300 cursor-pointer hover:text-red-500 transition-all"></i>
                    </li>
                ))}

            </ul>
        </div>
    )
}