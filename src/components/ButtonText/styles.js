import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    text-Align: center;
    line-height: 10px;
    margin-Top: 20px;
    
    background-color: transparent;
    color:${({ theme }) => theme.COLORS.LIGHT_100};
    height: 32px;
    padding:12px;
    
    border-radius: 5px;
    border: none;

    font-weight: 500;

    &:hover{
        color:${({ theme }) => theme.COLORS.TOMATO_400};
        background-color: transparent;
    }

    &:disabled{
        opacity: 0.5;
    }



`;