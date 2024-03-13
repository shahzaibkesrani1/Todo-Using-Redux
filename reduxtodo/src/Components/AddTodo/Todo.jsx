// Todo.js
import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Slice/Todo';

function Todo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <div className="bg-gray-900 h-96 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-semibold mb-4 text-center text-gray-900">Add Todo</h1>
                <form onSubmit={addTodoHandler}>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            className="bg-gray-200 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-2 px-3 leading-transition-colors duration-200 ease-in-out flex-1 mr-2"
                            placeholder="Enter todo..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 focus:outline-none"
                        >
                            <IoIosAdd />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Todo;
