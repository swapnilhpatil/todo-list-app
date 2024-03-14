// components/TodoItem.js
import { TodoItemProps, TodoListActionProps } from '@/types';
import React from 'react';

const TodoItem : React.FC<TodoItemProps & TodoListActionProps> = ({ todo, onComplete, onDelete }) => {
  return (
    // <div className="flex justify-between items-center border-b border-gray-200 py-2">
    //   <div>
    //     <h3 className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.title}</h3>
    //     <p>{todo.description}</p> {/* Render description */}
    //   </div>
    //   <div>
    //     <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">Complete</button>
    //     <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
    //   </div>
    // </div>
    <div className='w-full'>
<div className="flex min-w-0 gap-x-4">
          {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
         <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{todo.title}</p>
           <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo?.description}</p>
         </div>
      </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div>
         <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">Complete</button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
        </div>
        </div>
        </div>
  );
};

export default TodoItem;
