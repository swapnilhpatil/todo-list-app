import React, { useState } from 'react';
import { EMPTY_STRING, TodoFormProps } from '../types';

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState(EMPTY_STRING);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText(EMPTY_STRING);
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
      <div className='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8'>
        <div className='col-start-1'>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
            title
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
            <input
              type="text"
              name="title"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="title"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Add new todo..."
            />
          </div>
        </div>

        <div className='col-start-2'>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
            description
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
            <input
              type="text"
              name="description"
              value={text}
              onChange={(e) => setText(e.target.value)}
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
      <div className='col-start-3 flex align-bottom'>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
