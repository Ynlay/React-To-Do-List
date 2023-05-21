import "./App.css";
import List from "./List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-list">
          <h2>Todo List</h2>
          <List />
        </div>
      </header>
    </div>
  );
}

export default App;
