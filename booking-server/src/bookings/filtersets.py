from django_filters import rest_framework as filters

from bookings.models import BookingEvent, Enquiry


class EventFilter(filters.FilterSet):
    class Meta:
        model = BookingEvent
        fields = {
            'start': [
                'exact',
                'month',
                'month__gte',
                'month__lte',
            ]
        }

class EnquiriesFilter(filters.FilterSet):
    class Meta:
        model = Enquiry
        fields = {
            'is_complete': ['exact']
        }
