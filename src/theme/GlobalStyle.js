import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Nunito Sans", sans-serif;
  };

  html, body, #root  {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  textarea {
    resize: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.25s;
  }


  h1, h2, h3, h4, h5, h6, p, ul, ol, li {
    margin: 0;
    padding: 0;
    font-weight: 500;
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    position: fixed;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .MuiModal-root {
    overflow: auto;
  }

  .MuiAutocomplete-listbox {
    overflow-x: hidden;
  }
 
`;

export default GlobalStyle;
