import styled from '@emotion/styled';

export const Section = styled.div`
  border: solid 1px lightgray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  transition: border 500ms;

  &:hover {
    border: solid 1px black;
  }
`;

export const DateContainer = styled.div`
  input {
    width: 100%;
    padding: 5px;

    border: solid 1px lightgray;
    border-radius: 4px;
  }
`;
