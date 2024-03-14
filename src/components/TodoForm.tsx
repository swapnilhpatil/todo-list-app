import React, { useState } from 'react';
import { EMPTY_STRING, TodoFormProps } from '../types';

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState(EMPTY_STRING);
  const [description, setDescription] = useState(EMPTY_STRING);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, description ?? undefined);
    setTitle(EMPTY_STRING);
    setDescription(EMPTY_STRING);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>title</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="border border-gray-300 rounded-md p-2 mr-2"
      /> */}
      <div className='flex gap-8 columns-3'>
        <div className='flex-1 '>
          <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
            Title
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Add new todo..."
            />
          </div>
        </div>

        <div className='flex-1 '>
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
            Description
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Add new todo..."
            />
          </div>
        </div>

        {/* <label>description</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="border border-gray-300 rounded-md p-2 mr-2"
      /> */}
      <div className='flex-none flex' style={{display: "flex", alignItems: "end"}}>
        <button type="submit" className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md">
          Add
        </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
