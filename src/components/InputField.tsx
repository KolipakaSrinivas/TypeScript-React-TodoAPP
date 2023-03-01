import React from 'react'
import './styles.css'
import { useRef } from 'react';






interface props {
  todo :string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlesubmit:(e: React.SyntheticEvent)=>void

}



function InputField({todo,setTodo,handlesubmit}:props) {

  const inputref = useRef<HTMLInputElement>(null)
  

  
  return (
    <div>
       <form className="input" onSubmit={(e)=>{
        

        inputref.current?.blur()
        handlesubmit}}>
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