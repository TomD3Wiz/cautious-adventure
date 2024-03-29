import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { lighten, darken } from 'polished'

export const NavContainer = styled.div`
  display: flex;
  border-top: 2px solid ${darken(0.2, '#00aeef')};
  border-bottom: 2px solid ${lighten(0.2, '#00aeef')};
  justify-content: space-evenly;
  background-color: #00aeef;
  @media print {
    height: 20px;
  }
`
export const NavItem = styled(Link)`
  display: inline-flex;
  flex: auto;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: white;
  font-weight: bolder;
  transition: background-color 500ms;
  border-radius: 5px;
  @media print {
    display: none;
  }

  &:hover {
    background-color: ${lighten(0.1, '#00aeef')};
  }
`
