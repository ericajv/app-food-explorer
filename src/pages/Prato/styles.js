import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      grid-template-rows: 105px 86px auto 77px;
      height: 100%;
      }
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 100px auto 77px;
    grid-template-areas:
    "header"
    "ButtonBack"
    "details"
    "footer"
    `;
export const ButtonBack = styled.div`
>button{
    width: 106px;
    font-Size: 1.5rem;
    font-Weight: bold;
    display: flex;
    align-Items: center;
    text-Align: center;
    margin-Top: 32px;
    margin-Left: 122px;
    padding: 5px;
    background: none;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-Top: 16px;
      margin-Left: 56px;
    }
}
`;
export const Details = styled.div`
 display: flex;
 gap:47px;
 margin-Left: 7.6rem;
 margin-Right: 7.6rem;
background-Color: none;
> img{
    width:24.375rem;
   height: 24.3125rem; 
   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) { 
    width:10rem;
   height: 10rem; 
   }
}
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {      
display:flex;
align-Items:center;
flex-Direction:column;
gap:16px;
width: 316px;
margin: auto;
}
`;
export const Description = styled.div`
display: flex;
flex-Direction: column;
margin-Top: 45px;
gap:24px;
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {  
  margin-Top: 0px;
  text-Align: center;
 }
> p{
    font-Size: 2.5rem;
    white-space: nowrap;
   }
>span{
    font-Size: 1.5rem;
    font-Weight: 300;
}
`;
export const TagList = styled.div`
display: flex;
  flex-direction: row;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-wrap: wrap;
    gap:24px;
  }
`;
export const Increment = styled.div`
    background-Color: transparent;
      width: 294px;
      display: flex;
      align-Items: center;
      gap:2.06rem;
      font-Size: 20px;
      font-Weight: 400;
      margin-Top: 24px;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {      
      width: 316px;
      margin-Bottom: 55px;
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