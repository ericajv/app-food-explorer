import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.button`
    display: flex;
    align-Items: center;
    gap:8px;
  
    width: 216px;
    height: 56px;
    padding: 12px 32px;

    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-Size: 1rem;
    white-space: nowrap;

    &:disabled{
        opacity: 0.5;
    }
   
    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 1.62rem;
        height: 1.37rem;
    }
 @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 130px;
    height: 38px;
    text-Align: center;
   }

`;