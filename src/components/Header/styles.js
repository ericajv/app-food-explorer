import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-Items: center;
    gap:32px;

    width:100%;
    height: 104px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 24px 123px;
  
`;

export const Logo = styled.div`
display: flex;
align-Items: center;
gap:10px;
color: ${({ theme }) => theme.COLORS.LIGHT_100};

> h1{
    font-Weight: 400;
    font-Size: 28px;
    white-space: nowrap;
}
> span{
    color:${({ theme }) => theme.COLORS.CAKE_200};
}

`;

export const Logout = styled.button`
    border: none;
    background: none;
    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-Size:32px; 
    }
   

`;