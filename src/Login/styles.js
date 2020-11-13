import styled from "styled-components";

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
    margin-bottom: 3px;
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
export const ContainerButton = styled.div`
    position: relative; 
    display: flex;
    margin-top: 30px;
`;