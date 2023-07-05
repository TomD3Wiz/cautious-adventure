import "./App.css"

import Header from "components/header"
import NavBar from "components/NavBar"
import { Outlet } from "react-router-dom"
import { Box, Spinner } from "@chakra-ui/react"

import { useWhoAmIQuery } from "rtk-app/store-features/api/whoami"

function App() {
  const { data: currentUser, error, isLoading } = useWhoAmIQuery("")
  if (isLoading || error) {
    return <Spinner />
  }
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <NavBar />
      <Box padding="25px">
        <Outlet />
      </Box>
    </div>
  )
}

export default App
