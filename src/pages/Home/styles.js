import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto 77px;
    grid-template-areas:
    "header"
    "main"
    "footer"
`;

export const Main = styled.main`
grid-area: "main";
width: 100%;

    display: flex;
    flex-direction: column;
     margin: 0 auto;

    .Banner {
        position: relative;
           > img {
            position: absolute;
            top:26px;
            left:54px;
            width: 41rem;
            height: 25.75rem;
            z-index: 2;

         @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            position: absolute;
            top:15px;
            left:6px;
            width: 191px;
            height: 149px;
       }
        }

        .Banner-background {
            position: relative;
            height: 16.25rem;
            margin: 10.25rem 7.75rem 3.875rem;
            background: linear-gradient(180deg, #091E26 0%, #00131C 100%);                  
            border:none;
            border-radius: 8px;
            
            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                position: relative;
                margin:43px 16px 63px 36px;
                height: 120px;
                background: linear-gradient(180deg, #091E26 0%, #00131C 100%);                  
       }

            > div{
                position: absolute;
                top:88px;
                right: 100px;
                white-space: nowrap;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                position: absolute;
                top:37px;
                right: 20px;
                white-space: nowrap;      
                gap:3px;           
       }

                > h2 {
                    font-size: 2.5rem;
                    font-weight: 500;
                    line-height:3.5rem;
                }

                > span{
                    font-size: 1rem;
                    line-height:1rem;
                    font-weight: 200;
                }
            }
        }
    }



`;