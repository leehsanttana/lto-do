import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme.colors.primary};
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s linear;
  box-shadow: 0 1px 10px 1px rgba(0,0,0, .3);


  .toggle {
    position: absolute !important;
    right: 1rem;
    top: 2rem;
  }
`;

export const Brand = styled.span`

  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--white);

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