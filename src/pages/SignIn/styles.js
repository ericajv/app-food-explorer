import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
height: 100vh;

display: flex;
align-Items: center;
justify-Content:space-around;


@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    flex-Direction: column;
    justify-Content:center;
 
    }


`;

export const Logo = styled.div`
display: flex;
gap:8px;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-Size:1.5rem; 
    margin-Top: 9.87rem;
    white-space: nowrap;
   }


`;

export const Form = styled.form`
background-Color: ${({ theme }) => theme.COLORS.DARK_700};
padding: 64px; 
border-Radius: 16px; 


@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top:0px;
     background-Color: transparent;
     padding: 4rem; 
     width: 100%;
    }


> h2{

    text-align: center;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
   }

}
`;