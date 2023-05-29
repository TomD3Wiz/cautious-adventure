import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from "react-router-dom"

import App from "./App"
import ErrorPage from "screens/RouteError"
import CalendarScreen from "screens/Calendar"

export const router = createHashRouter(
  createRoutesFromElements(
  <Route path="/" errorElement={<ErrorPage />} element={<App />}>
    <Route errorElement={<ErrorPage />}>
        <Route index element={<CalendarScreen />} />
    </Route>
  </Route>
  ),
)
