import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import {
  addTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
} from "./components/handleApi/HandleApi";

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  // call api
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  // update to do funciotn
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
    return _id;
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add To Dos..."
            value={text}
            onChange={(e) => {
              console.log(e.target.value)
              setText(e.target.value);
            }}
          />
          <button
            className="addBtn"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(toDoId, text, setToDoId, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="classList">
          {toDo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={()=> deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
