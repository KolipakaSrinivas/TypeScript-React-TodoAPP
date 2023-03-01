import React from 'react'
import { Todo } from './model';
import SingleTodos from './SingleTodos';



interface props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

function Todolist({todos,setTodos}:props) {
  return (
    <div className='todos'>

        {todos && todos.map(todo => <SingleTodos todo={todo} todos={todos} setTodo={setTodos} key={todo.id} />)}


    </div>
  )
}

export default Todolist