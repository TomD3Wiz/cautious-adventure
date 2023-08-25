import type { Enquiry } from 'types/enquiry'

export interface EnquiryCardProps {
  enquiry: Enquiry
  onSelect(enquiry: Enquiry): void
}
