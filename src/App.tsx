import './app.css'
import React, { useRef, useState } from 'react'

import InputField from './components/InputField';
import Todolist from './components/Todolist';
import { Todo } from './components/model';


const  App : React.FC  =() => {


  const [todo,setTodo] = React.useState <string>('')
  const [todos,setTodos] = React.useState<Todo[]>([])

 

  console.log(todo)



  const handlesubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setTodos([...todos,{id:Date.now(),todo:todo,isdone:false}])
    setTodo('')
  }

  return (
    <React.Fragment>

    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo}  setTodo={setTodo} handlesubmit={handlesubmit}/>
      <Todolist todos={todos} setTodos={setTodos}/>
      
    </div>
      </React.Fragment>
  )
}

export default App
