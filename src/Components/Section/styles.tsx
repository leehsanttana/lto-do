import styled from 'styled-components';

export const Section = styled.main`
  background: var(--white);
  padding: 2rem;
  margin: -2rem 14rem 0;
  border-radius: .7rem;

`;

export const TopContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
        border-top: 1px solid var(--p-grey);
        margin-top: 1.5rem;
        padding-top: 1.5rem;
      }
    }
  }
`;