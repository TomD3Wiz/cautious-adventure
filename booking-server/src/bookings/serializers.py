from rest_framework import serializers

from bookings.models import BookingEvent, BookingStatus

class BookingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingStatus
        fields = "__all__"


class BookingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingEvent
        fields = "__all__"
