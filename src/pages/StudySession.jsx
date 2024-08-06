import {useState} from "react";
import {BiTrash, BiCalendar} from 'react-icons/bi'

function StudySession() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function todoFormHandler(event) {
    event.preventDefault();

    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  }

  function todoInputHandler(event) {
    setTodoInput(event.target.value);
  }

  function deleteTodoHandler(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function setDateHandler(event) {
    event.preventDefault();
    console.log('set date here')
  }

  return (
      <div className={"container h-full flex flex-col justify-center items-center"}>
        <h1 className={"text-4xl font-bold mb-10"}>study session</h1>
        <div className={"grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-y-12 md:gap-x-6 lg:gap-x-12"}>
          <section className={"study-card"}>
            <h3>focus mode</h3>
            <ul className={"text-center flex flex-col gap-y-2"}>
              <li className={"focus-mode-minutes"}>5 minutes</li>
              <li className={"focus-mode-minutes"}>10 minutes</li>
              <li className={"focus-mode-minutes"}>30 minutes</li>
              <li className={"focus-mode-minutes"}>60 minutes</li>
            </ul>
            <label className={"w-24 mx-auto flex"}>
              <input type="number" className={"w-full bg-transparent"} max={99} placeholder={"1"}/>
              <span className={"opacity-50"}>hours</span>
            </label>
            <label>
              <span className={"opacity-50"}>reason</span>
              <input type="text" className={"ml-4"} placeholder={"study for exam"}/>
            </label>
            <button className={"btn-green"}>start timer!</button>
          </section>
          <section className={"study-card study-todo-container"}>
            <h3>to-do list</h3>
            <form onSubmit={todoFormHandler} className={"flex flex-col gap-y-2"}>
              <div className={"relative"}>
                <label className={"flex justify-between items-center"}>
                  <input value={todoInput} onChange={todoInputHandler} type="text" placeholder={"enter todo here"}/>
                  <button onClick={setDateHandler} type="button">
                    <BiCalendar className={"text-xl"}/>
                  </button>
                </label>
              {/* TODO add input to set date here */}
              </div>
              <button className={"btn-green"} type={"submit"}>Add</button>
            </form>
            <ul className={"study-todo-list"}>
              {todos.map((todo, index) => (
                  <li key={index}>
                    <span>{todo}</span>
                    <button onClick={() => deleteTodoHandler(index)}>
                      <BiTrash className={"text-xl"}/>
                    </button>
                  </li>
              ))}
            </ul>
          </section>
          <section className={"study-card"}>
            <h3>exam reviewer</h3>
            <p className={"text-center text-lg"}>paste notes</p>
            <textarea className={"review-textfield"} name="review-notes" id="review-notes"></textarea>
            <button className={"btn-yellow"}>generate quiz</button>
          </section>
        </div>
      </div>
  )
}

export default StudySession;