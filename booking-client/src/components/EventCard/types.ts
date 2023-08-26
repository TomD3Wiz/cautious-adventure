import type { CalendarEvent } from 'types/calendar'

export interface EventCardProps {
  record: CalendarEvent
  onSelect(enquiry: CalendarEvent): void
}
