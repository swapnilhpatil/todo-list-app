import React from 'react';
import { EMPTY_STRING, TodoListActionProps, TodoListProps } from "../types";
import TodoItem from './TodoItem';
  
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
  const TodoList: React.FC<TodoListProps & TodoListActionProps> = ({ todos, onComplete, onDelete }) => {
    return (
      <div>
        {todos.map(todo => (
          // <div
          //   key={todo.id}
          //   onClick={() => toggleTodo(todo.id)}
          //   className={`cursor-pointer ${todo.completed ? 'line-through' : EMPTY_STRING}`}
          // >
          //   {todo.text}
          // </div>
          <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
        ))}
      </div>
    );
  };
  
  export default TodoList;
  