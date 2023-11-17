import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const DayButton = styled.button`
    width: 32px;
    height: 32px;
`
export const Space =styled.div`
    width: 32px;
    height: 32px;
    visibility: hidden;
    /* background-color: red; */
    /* opacity: 0; */
`


export const CalendarContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 32px);
    gap: 8px;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 24pt;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 16px;
`

export const GeneralButton = styled.button`
    width: 96px;
    height: 40px;
    background-color: #484bdb;
    color: #fff;
    border: none;
    border-radius: 8px;
    &:hover {
        opacity: .9;
    }
    &:active {
        background-color: #292b7d
    }
`
export const DaysOfTheWeekContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 30px;
    margin-bottom: 12px;

`