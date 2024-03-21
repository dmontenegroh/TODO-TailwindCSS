const TodoComputed = ({ computedItemsLeft, clearCompleted, todos }) => {
  console.log(todos.length);
  // "flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800 transition-all duration-1000
  return (
    <section
      className={`flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800 ${todos.length === 0 ? "rounded-t-md" : ""}`}
    >
      <span className="text-gray-400">{computedItemsLeft} Items Left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
