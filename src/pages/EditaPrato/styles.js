import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      grid-template-rows: 105px 137px auto 77px;
      height: 100%;
      }
    width: 100%;
    height: 100%;
    /* overflowY: scroll; */
    margin-Bottom: 50px;
        
    display: grid;
    grid-template-rows: 105px 175px auto 77px;
    grid-template-areas:
    "header"
    "ButtonBack"
    "details"
    "footer"
    `;
export const ButtonBack = styled.div`
    margin: 0 123px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin: 0 32px;

    }
    >h2{
      font-Size:2rem;
      font-Weight: 400; 
     @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-Size:2.81rem;
      font-Weight: 400; }
    }
   
>button{
    width: 106px;
    font-Size: 1.5rem;
    font-Weight: bold;
    display: flex;
    align-Items: center;
    text-Align: center;
    margin-Top: 32px;
    padding: 5px;
    background: none;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-Top: 16px;     
    }
}
`;
export const Form = styled.form`
padding: 0 7.68rem;
gap:1rem;
.firstline{
    display: grid;
    grid-template-columns: 14.31rem 28.93rem 22.75rem;
  gap:32px;
} 
.secondline{
  display: grid;
    grid-template-columns: 52.31rem 15.68rem;
  gap:32px;
}

.button{
  margin-Top: 32px;
  margin-Left:948px;
  width: 172px;
}

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
padding: 10px 32px;
display: flex;
flex-Direction:column; 
gap:0;
.firstline, .secondline{
  display: flex;
flex-Direction:column;
gap:10px; 

.button{
 margin: 0;
  width: 100%;
 }
}
.image, .name, .category, .ingredients, .price, .description{
  > span{
      font-Size:1.5rem;
      font-Weight: 300;
       color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
}}
.buttons{
display: flex;
justify-Content: flex-end;
gap:35px;
.buttonDelet{
  background: ${({ theme }) => theme.COLORS.DARK_800};
  white-space: nowrap;
  width: 135px; 
  font-Size:0.875rem; 
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%; 
  } 
}
.buttonSave{
  background: ${({ theme }) => theme.COLORS.TOMATO_400};
  white-space: nowrap;
  width: 172px; 
  font-Size:0.875rem; 
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%; 
  } 
}

}
`;
export const IngredientList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap:16px;
background-color: ${({ theme }) => theme.COLORS.DARK_900};
border-Radius: 8px;
margin-Bottom: 24px;


`;
