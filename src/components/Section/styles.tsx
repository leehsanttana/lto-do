import styled from 'styled-components';

export const Section = styled.main`
  background: ${props => props.theme.colors.secundary};
  padding: 2rem;
  margin: -2rem 14rem 0;
  border-radius: .7rem;
  box-shadow: 0 1px 10px 1px rgba(0,0,0, .0925);
  z-index: 1000;

  @media (max-width: 1000px){
    margin: -2rem 12rem 0;
  }

  @media (max-width: 992px){
    margin: -2rem 8rem 0;
  }

  @media (max-width: 768px){
    margin: -2rem 4rem 0;
  }

  @media (max-width: 600px){
    margin: -2rem 2rem 0;
  }

  @media (max-width: 480px){
    margin: -2rem 1rem 0;
    padding: 1.5rem;
  }

`;

export const TopContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px){
    flex-direction: column;
    row-gap: 2rem
  }
  
`;

export const Content = styled.section`
  margin-top: 2rem;

  ul {
    list-style-type: none;

    li {
      animation: showTodo .5s ease forwards;
      @keyframes showTodo {
          from {
            opacity: 0;
          }

          to{
            opacity: 1;
          }
        }
      & + li {
        border-top: 1px solid ${props => props.theme.colors.tertiary};
        margin-top: 1.5rem;
        padding-top: 1.5rem;
      }
    }
  }
`;