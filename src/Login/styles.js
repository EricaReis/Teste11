import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgb(41, 17, 73);
    padding: 10px;
`;
export const ContainerInput = styled.div`
    align-self: center;
    justify-content: center;
    position:  relative;
    max-width: 600px;
    margin: auto;
`;
export const Description = styled.text`
    color: white;
    margin-left: 3%;
    margin-right: auto;
    display: flex;
    margin-bottom: 3px;
`;
export const Title = styled.h1`
    color: white;
    margin: auto;
    text-align: center;
`;
export const Input = styled.input`
    color: white;
    height: 20px;
    width: 90%;
    border: solid 2px rgb(1, 18, 22);
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`;
export const ContainerButton = styled.div`
    margin-top: 30px;
    justify-content: space-between;
    position: relative; 
    display: flex;
`;
export const Button = styled(Link)`
    background: rgb(22, 53, 71);
    border: 2px solid rgb(22, 53, 71);
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    margin-top: 25px;
`;