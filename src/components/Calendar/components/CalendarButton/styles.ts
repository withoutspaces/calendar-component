import styled from "styled-components";

export const DayButton = styled.button<{ $event?: boolean }>`
  background-color: ${(props) => (props.$event ? "#443c68" : "gray")};
  
  border: none;
  width: 64px;
  height: 64px;
  &:hover {
    opacity: .8;
  }
  &:active {
    background-color: ${(props) => (props.$event ? "#352f52" : "#3e3d40")};
  }
  &:focus {
    border: ${(props) => (props.$event ? "1px solid white" : "")};
    
  }
`;
