from django.urls import include, path
from rest_framework import routers

from bookings import views

router = routers.DefaultRouter()
router.register(r'booking_status', views.BookingStatusViewSet)
router.register(r'booking_event', views.BookingEventViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
]
