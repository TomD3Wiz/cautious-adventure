export interface StatusInfo {
  display_name: string
}
export interface CalendarEvent {
  id?: number
  title: string
  start: string
  end: string
  allDay: boolean
  booked_by: string
  order_number: string
  company_name: string
  first_name: string
  last_name: string
  email: string
  phone: string
  vehicle_registration: string
  status: string
  status_info: StatusInfo
  vehicle_make: string
  vehicle_model: string
  vehicle_year: string
  fitting_details: string
  installer_display: string
  booked_by_display: string
  created: string
  modified: string
  textColor: string
  backgroundColor: string
}
