import { createGlobalStyle } from 'styled-components';
import {DEVICE_BREAKPOINTS} from "./deviceBreakpoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-Size: 16px;

        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            font-Size: 12px;      
        }
    }
    button {
        cursor: pointer;
        transition: filter 0.2s;
    
    }
    button:hover{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, textarea{
        font-family:'Poppins', sans-serif;
        outline: none;
        font-Size: 1rem;
    }


`;