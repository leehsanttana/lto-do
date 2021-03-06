import styled from "styled-components";

interface TodoProps {
  checked: boolean;
}

interface Col1Props extends TodoProps{
  edit: boolean;
}

export const Todo = styled.div<TodoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;

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
    fill:  ${props => (props.checked ? props.theme.colors.tertiary : 'var(--yellow)')};
    cursor: ${props => (props.checked ? 'not-allowed' : 'pointer')};
  }
`;

export const Col1 = styled.div<Col1Props>`
  display: flex;
  gap: .5rem;
  align-items: center;

  div{
    display: flex;
    align-items: center;
    gap: .5rem;
  }


  input[type=checkbox] {
    cursor: pointer;
    display: ${props => (props.edit ? 'none' : 'block')};
    accent-color: ${props => props.theme.colors.primary};
  }

  input[type=text] {
    width: 140px;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${props => props.theme.colors.tertiary};
    border-radius: 0.3rem;
    transition: .2s ease-in-out;
    flex: 1;

    &:focus{
      background: var(--p-white);
    }

    
  }

  p{
    padding: 0.5rem;
    color:  ${props => (props.checked ? props.theme.colors.tertiary : props.theme.colors.text)};
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')};

    @media (max-width: 480px){
  }
  }
`;

export const Col2 = styled.div<TodoProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
`;