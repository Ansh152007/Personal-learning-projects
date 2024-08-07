import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    let todo_string = localStorage.getItem("todos")
    console.log(todo_string)
    if (todo_string) {
      let todos = JSON.parse(localStorage("todos"))
      console.log(todos)
      setTodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem = ("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let e_todo = todos.filter(i => i.id === id)
    setTodo(e_todo[0].todo)
    let new_todos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(new_todos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let new_todos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(new_todos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let new_todos = [...todos];
    new_todos[index].isCompleted = !new_todos[index].isCompleted;
    setTodos(new_todos)
    saveToLS()
  }
  return (
    <>
      <Navbar />
      <div className="container bg-purple-100 text-black m-auto mt-5 w-1/2 min-h-[90vh] rounded-xl ">
        <div className="addtodo my-5 space-y-4">
          <h2 className='text-xl ml-10 font-bold pt-5 '>Add-Todos :</h2>
          <div className="flex justify-center">
            <input onChange={handleChange} value={todo} className="ml-5 rounded-full bg bg-white w-[70%] text-black pl-3 outline-none" type="text" />
            <button onClick={handleAdd} className='ml-2 bg-purple-700 text-white px-4 py-1 rounded-full font-sans font-semibold hover:bg-purple-800 '>Save</button>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="h-[1px] w-[90%] bg-black opacity-20 "></div>
        </div>
        <h2 className='text-xl ml-10 font-bold mt-5'>Your Todos :</h2>
        {todos.length === 0 && <div className='ml-10 mt-5'>No List of Todos to display</div>}
        {todos.map((item) => {
          return <div key={item.id} className="todos flex justify-between w-1/2 ml-10 space-y-5 items-end">
            <div className="flex gap-5 items-center">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div></div>
            <div className="content flex justify-around">
              <div className="buttons">
                <button onClick={(e) => handleEdit(e, item.id)} className='ml-2 bg-purple-700 text-white px-2 py-1 rounded-md font-sans font-semibold hover:bg-purple-800 '>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='ml-2 bg-purple-700 text-white px-2 py-1 rounded-md font-sans font-semibold hover:bg-purple-800 '>Delete</button>
              </div>
            </div>

          </div>
        })}
      </div>
    </>
  )
}
export default App
