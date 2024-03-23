import React from 'react';
import { EMPTY_STRING, TodoListActionProps, TodoListProps } from "../types";
import TodoItem from './TodoItem';
  
// TodoList component with props typed using TodoListProps interface
const TodoList: React.FC<TodoListProps & TodoListActionProps> = ({ todos, onComplete, onDelete }) => {
    return (
      <div>
         <ul role="list" className="divide-y divide-gray-100">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between gap-x-6 py-5">
            <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
          </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
