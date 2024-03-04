// pages/index.js
'use client'
import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
