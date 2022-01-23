import styled from "styled-components";

export const Input = styled.div`

  display: flex;
  @media (max-width: 480px){
      width: 100%;
  }

  input{
    outline: none;
    padding: 0.5rem;
    border: none;
    background: ${props => props.theme.colors.background};
    transition: .2s ease-in-out;
    border-radius: 0.3rem 0 0 .3rem;

    &:focus{
      background: ${props => props.theme.colors.tertiary};
    }

    @media (max-width: 480px){
      width: 100%;
    }
  }
  button{
    padding: 0.5rem;
    background: var(--green);
    border: none;
    border-radius: 0 0.3rem 0.3rem 0;
    cursor: pointer;
    transition: .2s ease;


    &:hover{
      filter: brightness(90%);
    }

    &:active{
      filter: brightness(80%);
    }

    &:focus{
      outline: 1px solid #d5d5e9;
      outline-offset: 1px;
    }
    
    svg{
      fill: var(--white);
      margin-left: 0.2rem;
      font-size: 16px;
    }
  }
`;