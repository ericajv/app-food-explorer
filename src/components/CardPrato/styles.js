import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    position: relative;
    
    >button{
      color:${({ theme }) => theme.COLORS.LIGHT_300};
      border: none;
      padding: none;
      width: 24px;
      height: 22px;
      font-Size:22px; 
      background: none;
      
      position: absolute;
      top: 16px;
      right:16px;
    }
      display:flex;
      align-Items:center;
      flex-Direction:column;   
      width: 304px;
      height: 462px;
      border-Radius: 8px;
      background-Color: ${({ theme }) => theme.COLORS.DARK_200};
     
      > h2{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-Size: 32px;
        line-Height: 52px;
        font-Weight: 200;
      }
      > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-Size: 14px;
        line-Height: 22px;
        font-Weight: 200;
        margin-Bottom: 15px;
      }
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display:flex;
      align-Items:center;
      flex-Direction:column;   
      width: 210px;
      height: 292px;
      border-Radius: 8px;
      background-Color: ${({ theme }) => theme.COLORS.DARK_200};
     
      > h2{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-Size: 16px;
        font-Weight: 300;
      }
      > p{
        display: none;
      }
    }
     `;
export const ImageFav = styled.div`
    background-Color: transparent;
    > img{
        width: 176px;
        height: 176px;
        margin-Top:24px; 
      } 
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      > img{
        width: 88px;
        height: 88px;
        margin-Top:24px; 
      }  
    }
    `;
export const Title = styled.div`
    display: flex;
    align-Items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-Size: 24px;
        font-Weight: bold; 
        margin-Top: 15px;
        margin-Bottom: 15px;
        lineHeight:34px; 
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-Size: 1.5rem;
        font-Weight: 400; 
        margin-Top: 12px;
        lineHeight:19px; 
      }
    `;
export const Increment = styled.div`
    background-Color: transparent;
    margin-Top:12px; 
    /* display:none; */
      width: 208px;
      display: flex;
      align-Items: center;
      gap:16px;
        font-Size: 20px;
        font-Weight: bold;
     > svg{
        width: 24px;
        height: 24px;
      }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      /* display:none; */
      align-Items: center;
      flex-Direction: column;

      font-Size: 16px;
      font-Weight: 200; 
      margin-Top:12px; 
      margin-Bottom: 24px;
      width: 162px;
             
     > svg{
        width: 18px;
        height: 18px;
      }
    }
    `;
export const Amount = styled.div`
    background-Color: transparent;
    display: flex;
    align-Items: center;
    gap:14px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 32px;
    
    > svg{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    `;