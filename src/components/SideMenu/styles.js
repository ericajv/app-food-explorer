import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto 77px;
    grid-template-areas:
    "header"
    "content"
    "footer"
   
`;
export const HeaderMenu = styled.div`
background-color: ${({ theme }) => theme.COLORS.DARK_700};

display: flex;
align-Items: center;
font-Weight: 100;
font-Size: 1.32rem;
gap:16px;
padding: 56px  28px 24px;
> svg{
    width: 1,125rem;
    height: 1,125rem;
}
`;
export const Frame = styled.div`

padding: 2.25rem 1.75rem;
display: flex;
flex-Direction: column;


`;