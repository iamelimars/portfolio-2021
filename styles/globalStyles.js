import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-4px);
    }
  }

  input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  outline: none; // this one

}
a:focus,
div:focus {
  -webkit-tap-highlight-color: rgba(0,0,0,0);

}

  * {
    transition: background-color 0.3s ease-in-out 
    background: transparent;
  }
    *:focus {
      outline: none;
    }
`;

export default GlobalStyle;
