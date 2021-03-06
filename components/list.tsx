import styled from "styled-components";

export const ol = styled.ol`
  overflow-y: scroll;
  margin-left: 0.5rem;
  list-style-position: inside;
  height: 100%;
  @media (max-width: 420px) {
    padding: 0.5rem;
  }
`;
export const ul = styled.ul`
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
  li {
    font-size: 2rem;
    @media (max-width: 420px) {
      font-size: 1.1rem;
    }
  }
`;
export const li = styled.li`
  margin-bottom: 0.4rem;
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.listItemColor};
    :hover {
      color: ${props => props.theme.listItemLinkHoverColor};
    }
  }

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
  :hover,
  :active,
  :focus {
    color: ${props => props.theme.listItemHoverColor};
    cursor: pointer;
  }
`;
export default { ol, ul, li };
