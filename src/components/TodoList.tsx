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
         <ul role="list" className="divide-y divide-gray-100">
        {todos.map(todo => (
          // <div
          //   key={todo.id}
          //   onClick={() => toggleTodo(todo.id)}
          //   className={`cursor-pointer ${todo.completed ? 'line-through' : EMPTY_STRING}`}
          // >
          //   {todo.text}
          // </div>
          <li key={todo.id} className="flex justify-between gap-x-6 py-5">
            <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
          </li>
        ))}
        </ul>
      </div>
    //    <ul role="list" className="divide-y divide-gray-100">
    //    {todos.map((todo) => (
    //      <li key={todo.id} className="flex justify-between gap-x-6 py-5">
    //        <div className="flex min-w-0 gap-x-4">
    //          {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
    //          <div className="min-w-0 flex-auto">
    //            <p className="text-sm font-semibold leading-6 text-gray-900">{todo.title}</p>
    //            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo?.description}</p>
    //          </div>
    //        </div>
    //        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    //          <p className="text-sm leading-6 text-gray-900">{todo.title}</p>
             
    //        </div>
    //      </li>
    //    ))}
    //  </ul>
    );
  };
  
  export default TodoList;
  