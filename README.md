# `TODO List app build using React HOOKS`


## Description
#### Sample todo app built with the React/React `Built-in HOOKS` framework (has todo's incomplete and todo's complete section) 

## Deployment 
Deployed Website : https://renishsalakhana09.github.io/todo-react/

## Deployed using
### Github pages 

`Note:This feature is available with react-scripts@0.2.0 and higher`

#### `Step 1:` Add `homepage` to `package.json`
#### `Step 2:` Install `gh-pages` and add `deploy` to `scripts` in `package.json`
#### `Step 3:` Deploy the site by running `npm run deploy`
#### `Step 4:` For a project page, ensure your project’s settings use `gh-pages`
#### `Step 5:` Optionally, configure the domain

#### to know more : [click Here](https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson)

### `containers/todoContainer`
### &rarr; index.js 

```JSX

  return (
    <div style={{ margin: 20 }}>
      
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
