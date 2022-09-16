import React, { useState } from "react";
import { emitter } from "../notification";
import "./index.css";
const AddTodo = ({ addTodo }) => {
  const addTodoStyle = {
    position: "fixed",
    top: 0,
    display: "block",
    width: "100%",
  };
  const [title, setTitle] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), title: title, done: false };
    addTodo(newTodo);
    emitter.emit("NOTIFICATION", `"${title}" task is added successfully`);
    setTitle("");
  };
  return (
    <div style={addTodoStyle} className="container">
      <div id="newtask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's the plan for today?"
            style={{
              width: "90%",
              marginTop: "10px",
              marginBottom: "10px",
              margin: "10px 10px",
              padding: "10px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              height: 40,
              borderRadius: 5,
              fontSize: 16,
              outline: "none",
              color: "#333",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
            }}
            required
          />
          <input
            type="submit"
            value={"Add Todo"}
            style={{
              width: 90,
              top: 0,

              height: 40,
              boxShadow: "0 9px #999",
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: 5,
              padding: 10,
              fontSize: 16,
              outline: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
