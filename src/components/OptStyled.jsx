import styled from "styled-components"

export const Resultado = styled.div`
    text-align: center;
    margin: 60px 30%; 
    border: 2px solid #000;
    border-radius: 5px;
    background-image: url('fundo-dado.jpg');
    background-size: cover;
    background-repeat: no-repeat;
`

export const Button = styled.button`
    font-weight: bold;
    margin: 0% 50%;
    background-color: rgb(194, 2, 18);
    border: 3px solid #000;
    border-radius: 2px;
    color: rgb(241, 166, 27);
    padding: 5px;
    cursor: pointer;

    :hover {
        background-color: rgb(238, 56, 56);
    }

`
export const Label = styled.label`
    margin: 25%;
    font-weight: bold;
`

export const OpInput = styled.input`
  margin-bottom: 0.44%;
`;

export const Erro = styled.p`
    color: red;
    margin: 60px 10px;
    text-align: center;
    border: solid red 2px;
    padding: 10px;
    margin: 5px 35%;
    background-color: #f8d0d0;
`