import styled from "styled-components";

export const Container = styled.div`

width: 100%;
display: flex;
align-Items: center;
padding: 0 14px;
gap: 8px;

background-Color: ${({ theme }) => theme.COLORS.DARK_900};
border-Radius: 5px;
margin-Bottom: 32px;

> input {
    height: 48px;
    width: 100%;
    border: none;
     background-Color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    
    &:placeholder{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        
    }

}


`;