import React from "react";
import { emitter } from "../notification";

const Todo = ({ todo, removeTodo, handleChange }) => {
  const hanldeCheckboxChange = () => {
    if (!todo.done) {
      emitter.emit("NOTIFICATION", `"${todo.title}" task is a completed`);
    } else {
      emitter.emit(
        "NOTIFICATION",
        `"${todo.title}" task is become an incompleted`
      );
    }
    handleChange(todo.id);
  };

  // const markAsComplete = ({ completed, incompleted }) => {
  //   if (completed) {
  //     return (
  //       <span
  //         style={{
  //           color: "green",
  //           fontWeight: "bold",
  //           fontSize: 12,
  //           marginLeft: 10,
  //         }}
  //       >
  //         <span role="img" aria-label="check">
  //           {" "}
  //           ✔️ completed
  //         </span>
  //       </span>
  //     );
  //   }
  //   if (incompleted) {
  //     return (
  //       <span
  //         style={{
  //           color: "red",

  //           fontWeight: "bold",

  //           fontSize: 12,
  //           marginLeft: 10,
  //         }}
  //       >
  //         <span role="img" aria-label="check">
  //           {" "}
  //           ❌ incompleted
  //         </span>
  //       </span>
  //     );
  //   }
  // };

  return (
    <div>
      <input
        type="checkbox"
        style={{ margin: "0 10px" }}
        checked={todo.done}
        // onChange={todo.done ? null : hanldeCheckboxChange}
        onChange={() => hanldeCheckboxChange(todo.id || null)}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",

          color: todo.done ? "green" : "black",
        }}
      >
        {todo.title}
      </span>
      <button
        style={{
          float: "right",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "inline-block",
          textAlign: "center",
          fontWeight: "bold",
          marginLeft: "10px",
          transition: "all 0.3s ease-in-out",
          outline: "none",
        }}
        onClick={() => removeTodo && removeTodo(todo.id)}
      >
        X
      </button>

      {/* {markAsComplete({
        completed: todo.done === true,
        incompleted: !todo.done,
      })} */}
    </div>
  );
};
export default Todo;
