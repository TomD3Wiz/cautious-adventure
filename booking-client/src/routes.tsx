import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from 'react-router-dom'

import CalendarScreen from 'screens/Calendar'
import EnquiriesScreen from 'screens/Enquiries'
import ErrorPage from 'screens/RouteError'

// import SearchScreen from 'screens/Search'
import App from './App'

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<App />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<CalendarScreen />} />
        <Route path="/enquiries" element={<EnquiriesScreen />} />
        <Route path="/search" element={<EnquiriesScreen />} />
      </Route>
    </Route>
  )
)
