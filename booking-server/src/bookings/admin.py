from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin

from reversion.admin import VersionAdmin

from bookings.models import BookingEvent, BookingStatus, StaffPreferences, Notes, Enquiry


User = get_user_model()


class StaffPreferencesInline(admin.StackedInline):
    model = StaffPreferences
    max_num = 1
    can_delete = False


class NotesInline(admin.StackedInline):
    model = Notes
    max_num = 1
    can_delete = False

class UserAdmin(AuthUserAdmin):
    inlines = [StaffPreferencesInline]

class BookingEventAdmin(VersionAdmin):
    date_hierarchy = 'start'
    search_fields = [
        'first_name',
        'last_name',
        'company_name',
        'phone',
        'email'
    ]
    list_filter = ['status']

class EnquiryAdmin(VersionAdmin):
    date_hierarchy = 'created'
    search_fields = [
        'name',
        'company_name',
        'phone',
        'email'
    ]
    inlines = [NotesInline]

# Register your models here.
admin.site.register(BookingStatus, VersionAdmin)
admin.site.register(BookingEvent, BookingEventAdmin)
admin.site.register(Enquiry, EnquiryAdmin)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
