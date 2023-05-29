import "./App.css"

import Header from "components/header"
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Box padding="25px">
        <Outlet />
      </Box>
    </div>
  )
}

export default App
