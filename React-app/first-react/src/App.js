import './App.css';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="top-header">
        <h3>Todo List</h3>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
