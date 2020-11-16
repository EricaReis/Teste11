import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #1c1c1c;
  justify-content: space-between;
  align-items: center;
  padding-right: 5%
`;

export const Button = styled(Link)`
  background: rgb(22, 53, 71);
  border: 2px solid rgb(22, 53, 71);
  border-radius: 3px;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  max-height: 40px;
`;
export const Logo = styled.img`
  width: 200px;
  height: auto;
`;
