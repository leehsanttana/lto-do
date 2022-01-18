import { useState, Dispatch, SetStateAction } from 'react';
import * as C from './styles';
import { BiCheckDouble } from 'react-icons/bi';

interface InputProps {
  todosList: string[];
  setTodosList: Dispatch<SetStateAction<string[]>>;
}

export default function Input({todosList, setTodosList}: InputProps) {

  const [input, setInput] = useState<string>('');

  function handleClick(){
    setTodosList([...todosList, input]);
    setInput('');    
  }

  return (
    <C.Input>
      <input type='text' value={input} placeholder='Adicionar novo Todo' onChange={(event) => setInput(event.target.value)} />
      <button onClick={handleClick} >
        <BiCheckDouble /> 
      </button>
    </C.Input>

  )
};