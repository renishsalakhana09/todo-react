# `TODO List app build using React HOOKS`

### Sample todo app built with the React/React `Built-in HOOKS` framework (has todo's incomplete and todo's complete section) 

## `containers/todoContainer`
## &rarr; index.js 

```JSX

  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">hello</h4>
      <Notification />
      <hr></hr>
      <h4
        align="center"
        style={{
          color: "blue",
          textDecorationColor: "blue",
          fontSize: 20,
          width: "15%",
          height: "auto",
          margin: "auto",
          fontWeight: "bold",
          borderRadius: "2px solid black",
          border: "2px solid black",
          backgroundColor: "lightblue",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Todo's Incompleted
      </h4>
      {todos.length > 0 ? (
        todos
          .filter((t) => t.done === false)
          .map((todo) => (
            <Todo
              todo={
                todo || { title: "loading..." } || { done: false } || { id: 0 }
              }
              key={
                todo.id + todo.title + todo.done + todo.id + Math.random() * 100
              } // key={todo.id}}
              removeTodo={handleRemoveTodo || null} // if removeTodo is null, then it will not be passed to the child component
              handleChange={hanldeCheckboxChange || null} // if handleChange is null, then it will not be passed to the child component
            />
          ))
      ) : (
        <p align="center" style={{ color: "red", fontSize: "18px" }}>
          No todo left. may add one?
        </p>
      )}
      <hr />

      <h4
        align="center"
        style={{
          color: "blue",
          textDecorationColor: "blue",
          fontSize: 20,
          width: "15%",
          height: "auto",
          margin: "auto",
          fontWeight: "bold",
          borderRadius: "2px solid black",
          border: "2px solid black",
          backgroundColor: "lightblue",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Todo's completed
      </h4>
      {todos.filter((t) => t.done === true).length > 0 ? (
        todos

          .filter((t) => t.done === true)
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={handleRemoveTodo}
              handleChange={hanldeCheckboxChange}
            />
          ))
      ) : (
        <p
          align="center"
          style={{
            color: "red",
            fontSize: "18px",
            width: "15%",
            height: "auto",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          No completed todos yet{" "}
        </p>
      )}
      <AddTodo addTodo={handleAddTodo} />

      <hr />
    </div>
  );
};


```
