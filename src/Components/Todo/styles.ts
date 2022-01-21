import styled from "styled-components";

interface TodoProps {
  checked: boolean;
}

export const Todo = styled.div<TodoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
      filter: brightness(90%);
    }

    &:active{
      transform: scale(.9);
    }
    
    svg{
      transform: scale(1.4);
    }
  }

  .btn{
    border-radius: 50%;
    padding: 0.2rem;
    transition: .2s ease-in-out;
  }

  .greenBtn{
    background: var(--green);
    svg {
      fill: var(--white);
    }
  }

  .redBtn{
    background: none;
    border: 1px solid var(--red);
    svg {
      fill: var(--red);
    }
  }

  .red{
    fill: var(--red);
  }

  .yellow{
    fill:  ${(props) => (props.checked ? 'var(--p-grey)' : 'var(--yellow)')};
    cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};
  }
`;

export const Col1 = styled.div<TodoProps>`
  display: flex;
  gap: .5rem;
  align-items: center;


  input[type=checkbox] {
    accent-color: var(--very-peri);
    cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};
  }

  input[type=text] {
    padding: 0.5rem;
    outline: none;
    border: 1px solid var(--p-grey);
    border-radius: 0.3rem;
    transition: .2s ease-in-out;
    flex: 1;

    &:focus{
      background: var(--p-white);
    }
  }

  p{
    padding: 0.5rem;
    color:  ${(props) => (props.checked ? 'var(--p-grey)' : 'initial')};
    cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};

    @media (max-width: 480px){
  }
  }
`;

export const Col2 = styled.div<TodoProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
`;