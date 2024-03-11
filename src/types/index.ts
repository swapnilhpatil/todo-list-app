/**
 * Represents a todo item.
 * @typedef {Object} Todo
 * @property {number} id - The unique identifier of the todo.
 * @property {string} text - The text content of the todo.
 * @property {boolean} completed - Indicates whether the todo is completed or not.
 */
export interface Todo {
  id: number;
  text?: string;
  title: string;
  description: string;
  completed: boolean;
}
  
/**
 * Represents the props interface for the TodoItem component.
 * @typedef {Object} TodoItemProps
 * @property {Todo} todo - A single Todo object representing the todo item.
 */
export interface TodoItemProps {
  todo: Todo;
}

/**
 * Represents the props interface for the TodoList component.
 * @typedef {Object} TodoListProps
 * @property {Todo[]} todos - An array of Todo objects representing the list of todos.
 * @property {function} toggleTodo - A function used to toggle the completion status of a todo item.
 * @property {number} toggleTodo.id - The unique identifier of the todo to be toggled.
 */
export interface TodoListProps {
  todos: Todo[]; // Array of Todo objects
  toggleTodo: (id: number) => void; // Function to toggle todo completion
}

/**
 * Represents the props interface for the TodoList component with action functions.
 * @typedef {Object} TodoListActionProps
 * @property {function} onComplete - Function to mark todo as completed.
 * @property {function} onDelete - Function to delete todo.
 */
export interface TodoListActionProps {
  onComplete: (id: number) => void; // Function to mark todo as completed
  onDelete: (id: number) => void; // Function to delete todo
}

/**
 * Represents the props interface for the TodoForm component.
 * @typedef {Object} TodoFormProps
 * @property {function} addTodo - A function used to add a new todo item.
 * @property {string} addTodo.text - The text content of the new todo item to be added.
 */
export interface TodoFormProps {
  addTodo: (text: string) => void;
}

/**
 * Represents an empty string constant.
 * @constant {string} EMPTY_STRING
 * @default
 */
export const EMPTY_STRING = '';
