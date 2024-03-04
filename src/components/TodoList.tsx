import React from 'react';
import { EMPTY_STRING, TodoListProps } from "../types";
  
// // Define a Todo interface
// interface Todo {
//     id: number;
//     text: string;
//     completed: boolean;
//   }
  
//   // Define the props interface for TodoList component
//   interface TodoListProps {
//     todos: Todo[]; // Array of Todo objects
//     toggleTodo: (id: number) => void; // Function to toggle todo completion
//   }
  
  // TodoList component with props typed using TodoListProps interface
  const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
      <div>
        {todos.map(todo => (
          <div
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${todo.completed ? 'line-through' : EMPTY_STRING}`}
          >
            {todo.text}
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoList;
  