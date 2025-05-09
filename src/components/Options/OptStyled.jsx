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
    margin: 0% 47.1%;
    background-color: rgb(194, 2, 18);
    border: 3px solid #000;
    border-radius: 5px;
    color: rgb(241, 166, 27);
    padding: 10px 20px;
    cursor: pointer;
`
export const Label = styled.label`
    font-weight: bold;
    margin-left: 30px;
    margin: 0 10%;
`

export const OpInput = styled.input`
  margin-bottom: 0.50%;
`;

export const Erro = styled.p`
    color: red;
    margin: 60px 10px;
    text-align: center;
    margin: 10px 35%;
    background-color: #f8d0d0;
`;

export const OptionsDiv = styled.div`
    background-image: url('pergaminho.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 60px 5px;
    margin: 10px 42%;
`

export const ListItem = styled.li`
  list-style-type: none;
`;
