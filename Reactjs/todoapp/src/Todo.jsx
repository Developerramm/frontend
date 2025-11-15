import React, { useState } from "react";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="row">
      <div className="col">
        <form action="" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo "
          />
          <br />
          <button className="btn btn-outline-primary" type="submit">
            Add Todo
          </button>
        </form>
        <br />
        <br />

        <ul className="list-group">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="list-group-item">
                {" "}
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {todo.text}{" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(index)}
                  >
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
