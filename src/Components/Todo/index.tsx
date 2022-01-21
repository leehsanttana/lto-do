import { useState, Dispatch, SetStateAction } from 'react';
import * as C from './styles'
import { BiTrash, BiHighlight, BiCheck, BiX } from 'react-icons/bi';

interface TodoProps {
  todo: string;
  position: number;
  todosList: string[];
  setTodosList: Dispatch<SetStateAction<string[]>>;
}

const Todo = ({todo, todosList, setTodosList, position}: TodoProps) => {

  const [checked, setChecked] = useState(false);
  const [todoEdit, setTodoEdit] = useState(false);
  const [input, setInput] = useState<string>(todo);
  
  
  function handleChange(){
    setChecked(!checked);
  }

  function openEditTodo(){
    setTodoEdit(!todoEdit);
  }

  function editTodo(){
    const todosListEdit = todosList.map((item, i) => {
      if (i === position) item = input;
      return item;
    }) 
    setTodosList(todosListEdit);
    setTodoEdit(!todoEdit);
  }

  function deleteTodo() {
    setTodosList(todosList.filter((el, i) => {
      if (i !== position) return el;
      return null;
    }));
    setChecked(false);
  }

  return (
    <C.Todo checked={checked}>
      <C.Col1 checked={checked}>
        <input type="checkbox" checked={checked} onChange={handleChange} disabled={checked} />
        {
        todoEdit ? 
        <div>
          <input type='text' value={input} onChange={({target}) => setInput(target.value)} />
          <button className='btn greenBtn' onClick={editTodo}><BiCheck /></button>
          <button className='btn redBtn' onClick={() => setTodoEdit(false)} ><BiX /></button>
        </div> 
        : <p>{todo}</p> 
        } 
        
      </C.Col1>
      <C.Col2 checked={checked}>
        <button onClick={openEditTodo}> <BiHighlight className='yellow'/> </button>
        <button onClick={deleteTodo}> <BiTrash className='red'/> </button>
      </C.Col2>
    </C.Todo>
  )
}

export default Todo;
