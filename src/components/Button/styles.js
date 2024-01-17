import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    height: 32px;
    padding: 0 12px;
    border-radius: 5px;
    border: none;


    font-weight: 500;

    &:disabled{
        opacity: 0,5;
    }



`;