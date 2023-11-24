import styled from "styled-components";
export default function DaysOfTheWeek() {
  return (
      <DaysOfTheWeekContainer>
          <span>D</span>
          <span>S</span>
          <span>T</span>
          <span>Q</span>
          <span>Q</span>
          <span>S</span>
          <span>S</span>
      </DaysOfTheWeekContainer>
   );
}

const DaysOfTheWeekContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 62px;
    margin-bottom: 12px;

`