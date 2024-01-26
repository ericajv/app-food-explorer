import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    text-Align: center;
    line-height: 10px;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color:${({ theme }) => theme.COLORS.LIGHT_100};
    height: 48px;
    padding:12px;
    
    border-radius: 5px;
    border: none;

    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }



`;