import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    text-Align: left;
    line-height: 140%;
    font-Size: 24px;
    margin-Top: 20px;
    
    background-color: transparent;
    color:${({ theme }) => theme.COLORS.LIGHT_300};
    height: 54px;
    padding:12px;
    border: none;
    font-weight: 300;
    border-Bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    &:hover{
        color:${({ theme }) => theme.COLORS.TOMATO_400};
        background-color: transparent;
    }

    &:disabled{
        opacity: 0.5;
    }



`;