import styled from "styled-components";

export const Input = styled.input`
    color: white;
    height: 20px;
    width: 90%;
    border: solid 2px rgb(1, 18, 22);
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`;
export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgb(41, 17, 73);
`;
export const Title = styled.h1`
    color: white;
    margin-left: auto;
    margin-right: auto;
    width: 7em
`;
export const Description = styled.text`
    color: white;
    margin-left: 3%;
    margin-right: auto;
    display: flex;
`;
export const ContainerItems = styled.div` 
    position:  fixed;
    width: inherit;
    padding-left: 30%;
    padding-right: 30%; 
`;
export const Button = styled.button`
    background: rgb(22, 53, 71);
    border: 2px solid rgb(22, 53, 71);
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    margin: auto;
    padding: 0.5rem 1rem;
    display: flex;
    margin-top: 25px;
`;
export const ContainerInput = styled.div`
    align-self: center;
    justify-content: center;
    position:  relative;
`;
export const ContainerButton = styled.div`
    position:  relative; 
    display: flex;
    width: inherit;
    margin-top: 30px;
`;
export const Header = styled.div`
    color: black
    display: flex;
    margin-top: 30px;
    width: 100%;
    height: 100%
`;