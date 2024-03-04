// Define a Todo interface
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
  
// Define the props interface for TodoList
export interface TodoListProps {
  todos: Todo[]; // Array of Todo objects
  toggleTodo: (id: number) => void; // Function to toggle todo completion
}

// Define the props interface for TodoForm
export interface TodoFormProps {
  addTodo: (text: string) => void;
}
  
export const EMPTY_STRING = '';