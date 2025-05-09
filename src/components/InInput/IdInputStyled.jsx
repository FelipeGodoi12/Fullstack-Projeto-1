import styled from "styled-components"

export const Div = styled.div`
  input {
    padding: 6px 2px;
    border: 2px solid #000;
    border-radius: 4px;
    background-color: rgb(236, 168, 20);
    margin: 10px 42%;
  }
`

export const Titulo = styled.div`
    text-align: center;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    font-size: 10em;
    color: orangered;
    text-shadow: 2px 2px 5px black;
  }

  h3 {
    color: orangered;
    background-color: #e4c953;
    margin: 0 35%;
    border-radius: 2px;
  }

  @media (max-width: 678px) {
    h1 {
      font-size: 6em;
    }
  }
`