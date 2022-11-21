import React, { useEffect, useState } from "react";

export default function Checkbox(props) {

    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    } 


    return (
        <div className="flex flex-col">
            <h2 className="text-3xl ml-10 mt-10 mb-7 text-gray-500 font-bold">My List</h2>
            <ul>
                {props.input.map((todo) => (
                    <li key={todo.id} className="mb-1 bg-white mx-5 px-5 py-3 rounded-lg shadow-md" style={{textDecoration: isChecked ? 'line-through':'none' }}>
                        <input className="w-4 h-4 mr-5 rounded-full" onChange={handleChecked} type="checkbox" />{todo.text}
                    </li>
                ))}

            </ul>
        </div>
    )
}