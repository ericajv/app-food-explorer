import styled from "styled-components";


export const Container = styled.footer`
display: flex;
justify-Content:space-between;
align-Items:center;
padding: 1.5rem 3rem;
height: 77px;
position: fixed;
bottom: 0;
width: 100%;

background-color: ${({ theme }) => theme.COLORS.DARK_600};

font-Size: 1rem;
font-Weight: 200;
white-space: nowrap;
z-index: 2;
`;

export const LogoDark = styled.div`
display: flex;
gap:10px;


> h1{
    font-Weight: bold;
    font-Size: 24px;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
}
> svg{
    fill=${({ theme }) => theme.COLORS.LIGHT_700};
}
`;

