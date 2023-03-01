import React from 'react'
import './styles.css'
import { useRef } from 'react';

import './styles.css'






interface props {
  todo :string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlesubmit:(e: React.SyntheticEvent)=>void

}



function InputField({todo,setTodo,handlesubmit}:props) {

  const inputref = useRef<HTMLInputElement>(null)
  

  
  return (
    <div>
       <form className="input" onSubmit={(e)=> { 
        handlesubmit(e) 
        inputref.current?.blur()
        
        }}>
      <input
        ref={inputref}
        type="text"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={e=>setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
    </div>
  )
}

export default InputField