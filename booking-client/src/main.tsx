import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./rtk-app/store"

import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
