import { NavContainer, NavItem } from './style'

export default function NavBar() {
  return (
    <NavContainer>
      <NavItem to="/">Bookings Calendar</NavItem>
      <NavItem to="/search">Search</NavItem>
      <NavItem to="/enquiries">Enquiries</NavItem>
    </NavContainer>
  )
}
