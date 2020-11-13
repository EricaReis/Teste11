import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
position: relative;
height: 50px;
width: 100%;
background-color: #1C1C1C;
`;
export const Button = styled(Link)`
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