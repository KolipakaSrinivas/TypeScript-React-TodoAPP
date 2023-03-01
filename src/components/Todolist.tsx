import React from 'react'
import { Todos } from './model';

interface props {
    todos:Todos[];
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>;
}

function Todolist({todos,setTodos}:props) {
  return (
    <div className='todos'>

        {todos && todos.map(t=><li>{t.isdone}</li>)}


    </div>
  )
}

export default Todolist