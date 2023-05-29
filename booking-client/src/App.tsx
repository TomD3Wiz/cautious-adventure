import "./App.css"

import Header from "components/header"
import Calendar from "components/Calendar"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <Header />
      <Box padding="15px">
        <Calendar />
      </Box>
    </div>
  )
}

export default App
