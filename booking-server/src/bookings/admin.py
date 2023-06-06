from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin
from bookings.models import BookingEvent, BookingStatus, StaffPreferences

User = get_user_model()


class StaffPreferencesInline(admin.StackedInline):
    model = StaffPreferences
    max_num = 1
    can_delete = False


class UserAdmin(AuthUserAdmin):
    inlines = [StaffPreferencesInline]


# Register your models here.
admin.site.register(BookingStatus, admin.ModelAdmin)
admin.site.register(BookingEvent, admin.ModelAdmin)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
