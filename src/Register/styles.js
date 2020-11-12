import styled from "styled-components";

export const Button = styled.button`
    background: rgb(22, 53, 71);
    border: 2px solid rgb(22, 53, 71);
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    margin: auto;
    padding: 0.5rem 1rem;
    display: flex;
    margin-top: 15px;
`;
export const ContainerButton = styled.div`
    align-self: center;
    justify-content: center;
    position:  relative; 
    display:flex;
`;
export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgb(41, 17, 73);
`;
export const ContainerInput = styled.div`
    align-self: center;
    justify-content: center;
    position:  relative;
    padding-left: 30%;
    padding-right: 30%; 
`;
export const Description = styled.text`
    color: white;
    margin-left: 3%;
    margin-right: auto;
    display: flex;
`;
export const Title = styled.h1`
    color: white;
    margin-left: auto;
    margin-right: auto;
    width: 4em
`;
export const Input = styled.input`
    color: white;
    height: 20px;
    width: 90%;
    border: solid 2px rgb(1, 18, 22);
    padding: 10px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
`;