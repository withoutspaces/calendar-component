import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 64px);
  gap: 8px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 24pt;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
