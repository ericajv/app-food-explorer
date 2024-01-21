import styled from "styled-components";

export const Container = styled.footer`
display: flex;
justify-Content:space-between;
align-Items:center;
padding: 24px 123px;
height: 77px;


background-color: ${({ theme }) => theme.COLORS.DARK_600};

font-Size: 15px;
font-Weight: 200;
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

