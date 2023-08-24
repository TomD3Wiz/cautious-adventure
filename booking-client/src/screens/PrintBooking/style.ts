import styled from '@emotion/styled'

export const Section = styled.div`
  border: solid 1px lightgray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  transition: border 500ms;
  text-align: left;
  &:hover {
    border: solid 1px black;
  }
`
export const PrintContainer = styled.div`
  @media print {
    display: none;
  }
`
