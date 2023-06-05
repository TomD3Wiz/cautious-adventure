import { NavContainer, NavItem } from "./style"

export default function NavBar() {
  return (
    <NavContainer>
      <NavItem to="/">Calender</NavItem>
      <NavItem to="/enquiries">Enquiries</NavItem>
      <NavItem to="/sms">SMS</NavItem>
      <NavItem to="/search">Search</NavItem>
    </NavContainer>
  )
}
