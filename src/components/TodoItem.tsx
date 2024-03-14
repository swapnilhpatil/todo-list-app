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

//     <div className='w-full'>
// <div className="flex min-w-0 gap-x-4">
//           {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
//          <div className="min-w-0 flex-auto">
//           <p className="text-sm font-semibold leading-6 text-gray-900">{todo.title}</p>
//            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo?.description}</p>
//          </div>
//       </div>
//         <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//         <div>
//          <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">Complete</button>
//         <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
//         </div>
//         </div>
//         </div>

<div className='w-full'>
  <div className="border rounded-md p-4 flex flex-col sm:flex-row gap-x-4">
    <div className="min-w-0 flex-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold leading-6 text-white">{todo.title}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-300">{todo?.description ? todo?.description : 'No description'}</p>
        </div>
        <div className="hidden sm:block">
          <div>
            <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">
              {/* Icon for Complete action */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L8 13.586l8.293-8.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button onClick={() => onDelete(todo.id)} className="text-red-500">
              {/* Icon for Delete action */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.293 5.293a1 1 0 0 0-1.414 0L10 8.586 7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Display icons below the title on smaller screens */}
    <div className="sm:hidden flex justify-end mt-2">
      <div>
        <button onClick={() => onComplete(todo.id)} className="text-green-500 mr-2">
          {/* Icon for Complete action */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L8 13.586l8.293-8.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">
          {/* Icon for Delete action */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.293 5.293a1 1 0 0 0-1.414 0L10 8.586 7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


  );
};

export default TodoItem;
