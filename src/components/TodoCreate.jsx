import { useState } from "react";

const TodoCreate = ({ createtodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    // if(title.trim().length > 0){
    if (!title.trim()) {
      return setTitle("");
    }

    createtodo(title);
    console.log(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
        type="text"
        placeholder="Create a new Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
