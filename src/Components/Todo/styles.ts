import styled from "styled-components";

interface TodoProps {
  checked: boolean;
}

export const Todo = styled.div<TodoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};

    input[type=checkbox] {
      accent-color: var(--very-peri);
      cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};
    }

    p{
      color:  ${(props) => (props.checked ? 'var(--p-grey)' : 'initial')};
    }
  }

  button{
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};
    filter: ${(props) => (props.checked ? 'grayscale(100%)' : 'grayscale(0)')};

    &:hover{
      filter: brightness(80%);
    }
    
    svg{
      transform: scale(1.2);
    }
  }

  .red{
    fill: var(--red);
  }

  .yellow{
    fill: var(--yellow);
  }
`;