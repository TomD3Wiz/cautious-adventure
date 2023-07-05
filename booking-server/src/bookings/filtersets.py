from django_filters import rest_framework as filters

from bookings.models import BookingEvent

class EventFilter(filters.FilterSet):
    class Meta:
        model = BookingEvent
        fields = {
            'start': ['exact', 'month']
        }
