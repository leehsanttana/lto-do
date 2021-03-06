import { useState } from 'react';
import Input from '../Input';
import Todo from '../Todo';
import * as C from './styles';


 const Section: React.FC = () => {
  const [todosList, setTodosList] = useState<string[]>([]);

  return (
    <C.Section>
      <C.TopContent>
        <h1>Minhas Tasks</h1>
        <Input todosList={todosList} setTodosList={setTodosList} />
      </C.TopContent>
      <C.Content>
        <ul>
          {
            todosList.map((todo, i) => {
              return <li key={i}> <Todo todo={todo} position={i} todosList={todosList} setTodosList={setTodosList}  /> </li>
            })
          }
        </ul>
      </C.Content>
    </C.Section>
  )
}

export default Section