import { normalize, rgb } from "polished";
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  height: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.backgroundColor};
  video,
  img {
    display: block;
    max-width: 100%;
  }
`;

interface AppTheme {
  titleColor: "palevioletred";
}
const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
${normalize()};
*{
box-sizing: border-box;
}
html, body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  overflow: hidden;
  margin: 0;
  height: 100%;
}
#__next {
  height: 100%
}
#index_title {
  -webkit-transition: font-size 1s; /* Safari */
  transition: font-size 1s;
  :hover, :active, :focus {
    font-size: 19rem 
  }
  font-size: 18rem;
  font-weight: 900;
  color: ${props => props.theme.titleColor};
  text-align: center;
  z-index: 1;
  padding: 0;
  overflow: hidden;
  @media (max-width: 420px) { 
    font-size: 7rem;
    margin-top: 4rem;
    :hover, :active, :focus {
      font-size: 7rem 
    }
  }
}
`;

const App = props => {
  const theme = {
    titleColor: "palevioletred",
    headerLinkColor: "black",
    backgroundColor: `rgba(4, 4, 4, 0.1)`,
    footerColor: "magenta",
    linkHoverColor: "white",
    linkColor: "black",
    listItemLinkHoverColor: "white",
    listItemColor: "black",
    listItemHoverColor: "white",
    linkContainerColor: "white"
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledApp {...props}>{props.children}</StyledApp>
      </>
    </ThemeProvider>
  );
};

export { App, StyledApp };
