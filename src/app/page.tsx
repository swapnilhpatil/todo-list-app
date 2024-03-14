'use client'

import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { NavigationItem, Todo } from '../types';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [navigation, setNavigation] = useState<NavigationItem[]>([
    { name: 'Todo', href: '#', current: true },
    { name: 'Completed', href: '#', current: false },
  ]);

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
 

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  };

  const handleSelection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selection: string) => {
    event.preventDefault();
    setNavigation(navigation.map(nav => {
      if(nav.name === selection)
        {
          nav.current = true;
        }else{
          nav.current = false;
        }
        return nav
    }));
  };
  
  const getTodosBasedOnCurrentNav =(): Todo[] => {
    const currentItem = navigation.find(item => item.current);
    if(currentItem && currentItem.name === 'Completed'){
      return todos.filter(todo => todo.completed);
    }
    return todos.filter(todo => !todo.completed)
  }
  return (
    <div className="todo-app-container w-48 md:container md:mx-auto p-8 my-8">
      <h1 className="text-center text-3xl font-bold">Todo App</h1>
    <div className="container w-full mx-auto">
      <div style={{padding: "2%" }}>
      <TodoForm addTodo={addTodo} />
      </div>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}
      <div style={{padding: "2%" }}>
      <div >
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={(e) => handleSelection(e, item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
        <TodoList
          todos={getTodosBasedOnCurrentNav()}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
        {/* <TodoList
          todos={todos.filter(todo => todo.completed)}
          onComplete={handleComplete}
          onDelete={handleDelete}
        /> */}
      </div>
    </div>
    </div>
  );
};

export default Home;
