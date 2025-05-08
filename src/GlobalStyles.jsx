import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    :root {
        background-image: url("background1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;                  
        min-height: 100vh;                 
        overflow-x: hidden;
    }
`

export default GlobalStyle;
