# Generated by Django 4.2.2 on 2023-08-26 02:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0007_remove_enquiry_is_active'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookingevent',
            options={'ordering': ('-created',)},
        ),
        migrations.AlterModelOptions(
            name='enquiry',
            options={'ordering': ('-created',)},
        ),
    ]