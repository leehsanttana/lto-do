import * as C from './styles'

interface TodoProps {
  todo: string;
}

const Todo = ({todo}: TodoProps) => {
  return (
    <C.Todo>
      {todo}
    </C.Todo>
  )
}

export default Todo;
