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
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="border border-gray-300 rounded-md p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
