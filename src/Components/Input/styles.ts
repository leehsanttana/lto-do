import styled from "styled-components";

export const Input = styled.div`

  display: flex;

  input{
    outline: none;
    padding: 0.5rem;
    border: none;
    background: var(--p-white);
    transition: .1s ease-in-out;
    border-radius: 0.3rem 0 0 .3rem;

    &:focus{
      background: var(--p-grey);
    }
  }
  button{
    padding: 0.5rem;
    background: var(--green);
    border: none;
    border-radius: 0 0.3rem 0.3rem 0;
    cursor: pointer;
    transition: .1s ease;


    &:hover{
      filter: brightness(90%);
    }

    &:active{
      filter: brightness(80%);
    }

    &:focus{
      outline: 1px solid var(--p-grey);
      outline-offset: 1px;
    }
    
    svg{
      fill: var(--white);
      margin-left: 0.2rem;
      font-size: 16px;
    }
  }
`;