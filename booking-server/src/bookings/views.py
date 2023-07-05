
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


from bookings.serializers import BookingEventSerializer, BookingStatusSerializer, StaffPreferencesSerializer, UserSerializer
from bookings.models import BookingStatus, BookingEvent, StaffPreferences

class BookingStatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BookingStatus.objects.all()
    serializer_class = BookingStatusSerializer
    permission_classes = [permissions.IsAuthenticated]


class BookingEventViewSet(viewsets.ModelViewSet):
    queryset = BookingEvent.objects.select_related('status', 'booked_by', 'installer')
    serializer_class = BookingEventSerializer
    permission_classes = [permissions.IsAuthenticated]
    filterset_fields = ['start']

class StaffPreferencesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StaffPreferences.objects.select_related('user').filter(user__is_active=True)
    serializer_class = StaffPreferencesSerializer
    permission_classes = [permissions.IsAuthenticated]

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def whoami(request):
    serializer = UserSerializer(instance=request.user)
    return Response(serializer.data)
