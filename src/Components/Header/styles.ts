import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--very-peri);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Brand = styled.span`

  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--p-white);

  & span:first-child{
    display: inline-block;
    font-size: 1.6rem;
    transform: rotate(20deg);
    margin-right: .2rem;
  }

  & span:last-child{
    font-weight: 900;
  }
`;