const TodoCreate = () => {
  return (
    <form className="flex items-center gap-4 overflow-hidden rounded bg-white px-4 py-4">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new Todo..."
      />
    </form>
  );
};

export default TodoCreate;
