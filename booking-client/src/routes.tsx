import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from "react-router-dom"

import App from "./App"
import ErrorPage from "screens/RouteError"
import CalendarScreen from "screens/Calendar"
import EnquiriesScreen from "screens/Enquiries"
import SearchScreen from "screens/Search"

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<App />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<CalendarScreen />} />
        <Route path="/enquiries" element={<EnquiriesScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Route>
    </Route>,
  ),
)
