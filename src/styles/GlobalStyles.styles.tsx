import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --dark-color: #000;
    --gray-color: #ebebeb;
    --light-color: #fff;
    --border-color: #ccc;
    --accent-color: #00c060;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100vh;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray-color);
  }
`;

export default GlobalStyles;
