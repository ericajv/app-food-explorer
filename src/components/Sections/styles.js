import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.43rem;
    margin: 0 7.68rem 0 3rem;
   
    h2 {
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-weight: 400;
        font-size:2rem;  
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        gap:1.5rem;
        margin-Left:1.5rem; 
        h2 {
            font-size: 1.125rem;
        }
    }
`;

export const Slider = styled.div`

    height: 462px;
    /* position: relative; */
    display: flex;
    gap:1.68rem;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         height: 292px;
         gap:1rem; 
       
    }
     .ArrowBack,
    .ArrowForward{
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        border: none;
        width: 278px;
        position: relative;
        z-index: 2;

    }

    .ArrowBack{
        background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 10%, #000A0F 100%);
    }

    .ArrowForward{
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
        /* background-Color: yellow; */
        gap:1rem;
        /* > div {
            display: flex;
            gap: 1rem;
        } */
    }
`;
