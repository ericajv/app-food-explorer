import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    position: relative;
    display:flex;
    align-Items:center;
    flex-Direction:column;   
    width: 304px;
    height: 462px;
    border-Radius: 8px;
    background-Color: ${({ theme }) => theme.COLORS.DARK_200};
    gap:15px;
        
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
      >span{
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1rem;
      font-weight: 300;
      }
      > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 0.875rem;
        font-weight: 200;
        margin: 0;     
      }
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display:flex;
      align-Items:center;
      flex-Direction:column;   
      width: 210px;
      height: 292px;
      border-Radius: 8px;
      background-Color: ${({ theme }) => theme.COLORS.DARK_200};  
      gap:12px;      
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
      }  
    }
    `;
export const Title = styled.div`
    display: flex;
    align-Items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-Size:  1.5rem;
        font-Weight: bold; 
        white-space: nowrap;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-Weight: 400; 
      }
    `;
export const Increment = styled.div`
    background-Color: transparent;
      width: 208px;
      display: flex;
      align-Items: center;
      gap:1rem;
      font-Size: 20px;
      font-Weight: bold;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {      
      display: flex;
      align-Items: center;
      flex-Direction: column;
      font-Size: 16px;
      font-Weight: 200; 
       width: 162px;             
     > svg{
        width: 18px;
        height: 18px;
      }
      > button{
        height: 32px;
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