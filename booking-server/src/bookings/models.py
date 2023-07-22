import uuid

from django.db import models
from django.contrib.auth import get_user_model

import reversion

from colorfield.fields import ColorField
# Create your models here.

User = get_user_model()


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


@reversion.register()
class BookingStatus(BaseModel):
    code = models.CharField(max_length=255, unique=True)
    display_name = models.TextField(blank=True)
    color = ColorField(default='#FF0000')
    text_color = ColorField(default='#FFFFF')

    class Meta:
        ordering = ('created',)

    def __str__(self) -> str:
        return f'{self.display_name} ({self.code})'


@reversion.register()
class BookingEvent(BaseModel):
    # Full Calendar Core fields
    title = models.TextField(blank=True)
    start = models.DateTimeField(blank=True, default=None)
    end = models.DateTimeField(blank=True, null=True, default=None)
    all_day = models.BooleanField(default=False)

    order_number = models.TextField(blank=True)
    first_name = models.TextField(blank=True)
    last_name = models.TextField(blank=True)
    company_name = models.TextField(blank=True)
    email = models.TextField(blank=True)
    address = models.TextField(blank=True)
    suburb = models.TextField(blank=True)
    postcode = models.TextField(blank=True)
    state = models.TextField(blank=True)
    phone = models.TextField(blank=True)

    # Vehicle Fields
    vehicle_registration = models.TextField(blank=True)
    vehicle_make = models.TextField(blank=True)
    vehicle_model = models.TextField(blank=True)
    vehicle_year = models.TextField(blank=True)
    vehicle_build_description = models.TextField(blank=True)

    fitting_details = models.TextField(blank=True)
    status = models.ForeignKey(BookingStatus, on_delete=models.PROTECT, related_name='bookings')

    booked_by = models.ForeignKey(User, on_delete=models.PROTECT, related_name='bookings')
    installer = models.ForeignKey(User, on_delete=models.PROTECT, related_name='installed_jobs')

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f'{self.first_name} - {self.last_name} - {self.pk}'

@reversion.register()
class StaffPreferences(BaseModel):
    user = models.OneToOneField(User, on_delete=models.PROTECT)
    booking_color = ColorField(default='#FF0000')

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f'{self.user.__str__()} - preferences'
