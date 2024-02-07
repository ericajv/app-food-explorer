import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    display: flex;
    align-Items: center;
    gap: 2rem;

    width:100%;
    height:7rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 1.5rem 7.7rem;
   
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 1rem 5rem;
        display: flex;
        justify-Content: space-between;
       align-Items: center;
        
    };
`;


export const Logo = styled.div`
display: flex;
align-Items: center;
gap:10px;
color: ${({ theme }) => theme.COLORS.LIGHT_100};

> h1{
    font-Weight: 500;
    font-Size: 28px;
    white-space: nowrap;
}

`;

export const Logout = styled.button`
    border: none;
    background: none;
    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-Size:32px; 
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: none;

}
   

`;
export const List = styled.button`

display: none;
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
    font-Size: 3.5rem;
    background-Color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
   align-Items: center;
   border:none;
  };


`;