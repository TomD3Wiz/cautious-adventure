
from rest_framework import filters

from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


from bookings.serializers import BookingEventSerializer, BookingStatusSerializer, StaffPreferencesSerializer, UserSerializer, NotesSerializer, EnquirySerializer
from bookings.models import BookingStatus, BookingEvent, StaffPreferences, Notes, Enquiry
from bookings.filtersets import EventFilter, EnquiriesFilter

class ResultsCapableViewSet(viewsets.ModelViewSet):
    def filter_queryset(self, queryset):
        qs = super().filter_queryset(queryset)
        results = self.request.GET.get('results', None)
        if results:
            try:
                return qs[:int(results)]
            except Exception:
                return qs
        return qs

class BookingStatusViewSet(ResultsCapableViewSet):
    queryset = BookingStatus.objects.all()
    serializer_class = BookingStatusSerializer
    permission_classes = [permissions.IsAuthenticated]


class BookingEventViewSet(viewsets.ModelViewSet):
    queryset = BookingEvent.objects.select_related('status', 'booked_by', 'installer')
    serializer_class = BookingEventSerializer
    permission_classes = [permissions.IsAuthenticated]
    filterset_class = EventFilter
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'company_name',
        'first_name',
        'last_name',
        'email',
        'phone'
    ]

    def filter_queryset(self, queryset):
        qs = super().filter_queryset(queryset)
        results = self.request.GET.get('results', None)
        if results:
            try:
                return qs[:int(results)]
            except Exception:
                return qs
        return qs


class StaffPreferencesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StaffPreferences.objects.select_related('user').filter(user__is_active=True)
    serializer_class = StaffPreferencesSerializer
    permission_classes = [permissions.IsAuthenticated]


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
@ensure_csrf_cookie
def whoami(request):
    serializer = UserSerializer(instance=request.user)
    data = serializer.data
    data.update({
        'csrf': get_token(request)
    })
    return Response(data)


class NotesViewSet(viewsets.ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
    permission_classes = [permissions.IsAuthenticated]


class EnquiryViewSet(ResultsCapableViewSet):
    queryset = Enquiry.objects.prefetch_related('notes').all()
    serializer_class = EnquirySerializer
    permission_classes = [permissions.IsAuthenticated]
    filterset_class = EnquiriesFilter
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'company_name',
        'name',
        'email',
        'phone'
    ]
