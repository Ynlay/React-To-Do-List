import './TodoElement.css'

function TodoElement({elementContent}) {
    return (
        <div className="todo-element">
        <input type="checkbox" className="todo-checkbox"/>{elementContent} 
        </div>
    );  
}

export default TodoElement;