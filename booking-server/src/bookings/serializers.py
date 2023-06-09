from django.contrib.auth import get_user_model

from rest_framework import serializers

from bookings.models import BookingEvent, BookingStatus, StaffPreferences


User = get_user_model()


class BookingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingStatus
        fields = "__all__"


class BookingEventSerializer(serializers.ModelSerializer):
    allDay = serializers.BooleanField(source='all_day', required=False)
    status_info = BookingStatusSerializer(read_only=True, source='status')
    backgroundColor = serializers.SerializerMethodField()
    textColor = serializers.SerializerMethodField()
    class Meta:
        model = BookingEvent
        exclude = ('all_day',)

    def get_backgroundColor(self, obj):
        if hasattr(obj, 'status'):
            return obj.status.color
        return None

    def get_textColor(self, obj):
        if hasattr(obj, 'status'):
            return obj.status.text_color
        return None

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password',)
class StaffPreferencesSerializer(serializers.ModelSerializer):
    user_info = UserSerializer(read_only=True, source='user')
    class Meta:
        model = StaffPreferences
        fields = "__all__"
