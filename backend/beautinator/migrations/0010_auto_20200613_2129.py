# Generated by Django 3.0.2 on 2020-06-13 21:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautinator', '0009_remove_appointment_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='start_date_time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='start_date',
            field=models.DateField(default=datetime.date(2020, 6, 13)),
        ),
        migrations.AddField(
            model_name='appointment',
            name='start_time',
            field=models.TimeField(default=datetime.time(0, 0)),
        ),
    ]
