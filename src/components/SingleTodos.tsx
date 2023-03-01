import React from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

import { Todo } from './model'

type props  = {
    todo : Todo;
    todos:Todo[];
    setTodo:React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

function SingleTodos({todo,setTodo,todos}:props) {
  return (
    <div className='todos__single'>
        <span className='todos__single--text'>{todo.isdone}</span>
        <span className='icon'>
            <AiFillEdit/>

        </span>
        <span className='icon'>
            <AiFillDelete/>
            
        </span>
        <span className='icon'>
            <MdDone/>
            
        </span>

    </div> 
  )
}

export default SingleTodos
