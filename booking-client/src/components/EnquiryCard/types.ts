import type { Enquiry } from 'types/enquiry'

export interface EnquiryCardProps {
  record: Enquiry
  onSelect(enquiry: Enquiry): void
}
