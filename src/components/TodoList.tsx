import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Best of the Programming", completed: false },
    { id: 2, text: "My Typescript", completed: false },
  ]);
  const [inputVal, setInputVal] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = {id: Date.now(), text: inputVal, completed: false}
    setTodos([...todos, newTodo]);
    setInputVal("");
  }

  return (
    <div className="main-container">
      <h1>Todo List with Typescript</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" placeholder="Add item" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoList;
