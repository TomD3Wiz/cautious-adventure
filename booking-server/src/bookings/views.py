
from rest_framework import viewsets
from rest_framework import permissions

from bookings.serializers import BookingEventSerializer, BookingStatusSerializer
from bookings.models import BookingStatus, BookingEvent

class BookingStatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BookingStatus.objects.all()
    serializer_class = BookingStatusSerializer
    permission_classes = [permissions.IsAuthenticated]


class BookingEventViewSet(viewsets.ModelViewSet):
    queryset = BookingEvent.objects.all()
    serializer_class = BookingEventSerializer
    permission_classes = [permissions.IsAuthenticated]
