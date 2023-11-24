import styled from "styled-components";


export const DayButton = styled.button<{ $event?: boolean}>`
    background-color: ${props => props.$event ? "#443c68" : "gray"};
    
    border: none;
    width: 64px;
    height: 64px;
`