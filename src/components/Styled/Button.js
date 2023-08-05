import styled from "styled-components";

const Button = styled.button`
    padding: 10px 18px;
    min-width: 220px;
    height: 44px;
    background-color: #000000;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: #fff;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    border: 1px solid transparent;
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
        background-color: black;

        color: white;
        transition: 0.3s background ease-in;
    }
`;

export default Button;
