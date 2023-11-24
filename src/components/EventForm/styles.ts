import styled from "styled-components";

export const Form = styled.form`
  width: 35%;
  background-color: #443c68;
  padding: 30px;
  border-radius: 8px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  textarea {
    border: none;
    width: 100%;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 12pt;
    border: none;
    padding-left: 8px;

  }

  input[type=date] {
    width: 40%;
  }

`;
