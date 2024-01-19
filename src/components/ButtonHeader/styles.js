import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-Items: center;
    gap:8px;
  
    width: 216px;
    height: 56px;
    padding: 12px 32px;

    
    border-radius: 5px;
    border: none;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-Size: 16px;
    white-space: nowrap;

    &:disabled{
        opacity: 0.5;
    }
   
    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 26px;
        height: 22px;
    }


`;