// components/TodoItem.js
import { TodoItemProps, TodoListActionProps } from '@/types';
import React from 'react';

const TodoItem : React.FC<TodoItemProps & TodoListActionProps> = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2">
      <div>
        <h3 className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.text}</h3>
        <p>{todo.description}</p> {/* Render description */}
      </div>
      <div>
        <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">Complete</button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
