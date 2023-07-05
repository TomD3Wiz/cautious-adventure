export interface User {
  id: number
  username: string
  first_name: string
  last_name: string
  csrf?: string
}

export interface Staff {
  id: string
  created: string
  modified: string
  user: number
  user_info: User
  booking_color: string
}
