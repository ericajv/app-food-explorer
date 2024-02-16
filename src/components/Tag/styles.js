import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.span`
    font-Size: 0.875;
    padding: 4px 8px;
    border-Radius: 5px;
    margin-Right: 12px;
    white-space: nowrap;
   color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_1000};

    flex-grow: 1;
    flex-basis: 0;

    `;