import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex justify-center mt-12">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 rounded-md px-4 py-2 w-96"
      />
      <button type="submit" className="bg-blue-500 w-24 rounded-md ml-1">
        Add
      </button>
    </form>
  );
};
export default AddTodo;
