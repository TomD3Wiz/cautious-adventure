# Generated by Django 4.2.2 on 2023-07-04 10:52

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookingevent',
            options={'ordering': ('created',)},
        ),
        migrations.AlterModelOptions(
            name='bookingstatus',
            options={'ordering': ('created',)},
        ),
        migrations.AlterModelOptions(
            name='staffpreferences',
            options={'ordering': ('created',)},
        ),
        migrations.AddField(
            model_name='bookingstatus',
            name='text_color',
            field=colorfield.fields.ColorField(default='#FFFFF', image_field=None, max_length=18, samples=None),
        ),
    ]
