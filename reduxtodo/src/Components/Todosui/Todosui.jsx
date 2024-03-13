import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from "react-icons/md";
import { removeTodo, editTodo } from '../../Slice/Todo';

function Todosui() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const [editedText, setEditedText] = useState("");

    const handleEdit = (id, newText) => {
        dispatch(editTodo({ id, newText }));
        setEditedText("");
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
            <ul className="grid grid-cols-1 gap-4">
                {todos.map((todo) => (
                    <li
                        className="bg-white shadow-md rounded-md overflow-hidden"
                        key={todo.id}
                    >
                        <div className="px-6 py-4">
                            {todo.id === editedText.id ? (
                                <input
                                    type="text"
                                    value={editedText.text}
                                    onChange={(e) => setEditedText({ id: todo.id, text: e.target.value })}
                                    className="border-b-2 border-gray-400 py-1 px-2 focus:outline-none"
                                />
                            ) : (
                                <p className="text-gray-800">{todo.text}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
                            {todo.id === editedText.id ? (
                                <button
                                    onClick={() => handleEdit(todo.id, editedText.text)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md mr-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => setEditedText({ id: todo.id, text: todo.text })}
                                    className="text-gray-800 hover:text-gray-600 focus:outline-none"
                                >
                                    <MdEdit />
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todosui;
