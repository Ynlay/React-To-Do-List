import "./App.css";
import TodoElement from "./TodoElement";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <header className="App-header">
        <div className="todo-list">
          <h2>Todo Elements</h2>
          <TodoElement elementContent="Todo Element"/>
          <TodoElement elementContent="Other element"/>
          <button id="new-element-btn">Add Another Task</button>
        </div>
      </header>
    </div>
  );
}

export default App;
