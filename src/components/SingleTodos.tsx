import React from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

import { Todo } from './model'
// import Todolist from './Todolist'

type props  = {
    todo : Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

const handleClick = (id:number) => {


}

function SingleTodos({todo,setTodos,todos}:props) {
  return (
    <div className='todos__single'>
        <span className='todos__single--text'>{todo.todo}</span>
        <span className='icon'>
            <AiFillEdit/>

        </span>
        <span className='icon'>
            <AiFillDelete/>
            
        </span>
        <span className='icon' onClick={()=>handleClick(todo.id)}>
            <MdDone/>
            
        </span>

    </div> 
  )
}

export default SingleTodos
