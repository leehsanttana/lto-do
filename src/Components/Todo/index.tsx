import { useState, Dispatch, SetStateAction } from 'react';
import * as C from './styles'
import { BiTrash, BiHighlight } from 'react-icons/bi';

interface TodoProps {
  todo: string;
  todosList: string[];
  setTodosList: Dispatch<SetStateAction<string[]>>;
}

const Todo = ({todo, todosList, setTodosList}: TodoProps) => {

  const [checked, setChecked] = useState(false);
  const position = todosList.indexOf(todo);
  
  
  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    setChecked(target.checked);
  }

  function deleteTodo() {
    console.log(position);
    setTodosList(todosList.filter((el, i) => {
      if (i !== position) return el;
      return null;
    }));
  }

  return (
    <C.Todo checked={checked}>
      <div>
        <input type="checkbox" checked={checked} onChange={handleChange} disabled={checked} />
        <p>{todo}</p>
      </div>
      <div>
        <button> <BiHighlight className='yellow'/> </button>
        <button onClick={deleteTodo}> <BiTrash className='red' /> </button>
      </div>
    </C.Todo>
  )
}

export default Todo;
