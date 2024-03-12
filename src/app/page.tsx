'use client'

import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Todo } from '../types';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, description?: string): void => {
    setTodos([...todos, { id: todos.length + 1, title, description, completed: false }]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div className="todo-app-container">
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">Todo App</h1>
    <div className="container w-auto mx-auto mt-10">
      <div>
      <TodoForm addTodo={addTodo} />
      </div>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}
      <div>
        <h2>Not Completed</h2>
        <TodoList
          todos={todos.filter(todo => !todo.completed)}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
        <h2>Completed</h2>
        <TodoList
          todos={todos.filter(todo => todo.completed)}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
