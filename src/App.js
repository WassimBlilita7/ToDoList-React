import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos , setTodos] = useState([])
  const inputRef = useRef()
  const handleAddTodo = ()=>{
    const text = inputRef.current.value
    const newItem = {completed : false , text}
    setTodos([...todos , newItem])
    inputRef.current.value = ""
  }
  const handleItemDone = (index)=>{
      const newTodos = [...todos] // copie mn liste
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos)
  }

  const handleDeleteItem = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index , 1)
    setTodos(newTodos)
    
  }

  return (
    <div className='App'>
        <h2 className='title'>To Do List 📃🩷</h2>
        <div className='to-do-container'>
        <ul>
          {todos.map(({text , completed} , index)=> {
            return <div className='item'>
              <li className={completed ? "done" : ""} key={index} onClick={()=>handleItemDone(index)}>{text}</li>
              <span className='trash' onClick={()=>handleDeleteItem(index)}>❌</span>
              </div>
          })}
        </ul>
        <input className='input' ref={inputRef} placeholder='Enter The Item . .'/>
        <button className='btn' onClick={handleAddTodo}>Add</button>
        </div>
        
    </div>
  )};

export default App;
