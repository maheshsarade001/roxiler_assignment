import React, { useState, useEffect } from "react";

function Left() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setTodos(resp));
  }, []);
  return (
    <>
      <div>
        <input type="text" />
        <table class="table-sm table-bordered caption-top">
          <caption>
            <b>Todos</b>
          </caption>
          <thead>
            <tr>
              <th scope="col">ToDo ID</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Incomplete" : "Complete"}</td>
                <td>
                  <button>view details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Left;
