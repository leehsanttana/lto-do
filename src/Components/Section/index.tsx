import { useState, useEffect } from 'react';
import Input from '../Input';
import * as C from './styles'


export default function Section() {
  const [todosList, setTodosList] = useState<string[]>([]);

  useEffect(() => {
    console.log(todosList);
  }, [todosList])

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
              return <li key={i}>{todo}</li>
            })
          }
        </ul>
      </C.Content>
    </C.Section>
  )
}

