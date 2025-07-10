import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";
import { toggleTodo } from '../actions/todo-actions';


interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  if (!todos || todos.length === 0) {
    return (
      <div className="bg-white min-h-[50vh] p-3 rounded-lg border-2 border-gray-200">
        <h2 className="text-center text-gray-500">No hay tareas pendientes</h2>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-white min-h-[50vh] p-3 rounded-lg border-2 border-gray-200">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      }
    </div>
  )
}
