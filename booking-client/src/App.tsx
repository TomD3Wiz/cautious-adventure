import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, Spinner } from '@chakra-ui/react'
import NavBar from 'components/NavBar'
import Header from 'components/header'
import { useWhoAmIQuery } from 'rtk-app/store-features/api/whoami'
import SETTINGS from 'settings/dev'

import './App.css'

function App() {
  const { data: currentUser, error, isLoading } = useWhoAmIQuery('')
  useEffect(() => {
    if (error) {
      const next = `?next=${encodeURIComponent(window.location.href)}`
      window.location.href = `${SETTINGS.login}${next}`
    }
  }, [error])
  if (isLoading || error) {
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <NavBar />
        <Box padding="25px">
          <Spinner />
        </Box>
      </div>
    )
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
