import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <div>Todos</div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-4 py-2 rounded"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todos;
