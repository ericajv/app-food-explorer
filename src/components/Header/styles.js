import styled from "styled-components";
import px2vw from '../../utils/px2vw';

export const Container = styled.header`
    display: flex;
    align-Items: center;
    gap: ${px2vw(32)};

    width:100%;
    height:  ${px2vw(105)};

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 24px 123px;
   
    @media (min-width: 768px) {
        height: ${px2vw(220)};
        display: flex;
        justify-content: center;
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
   

`;