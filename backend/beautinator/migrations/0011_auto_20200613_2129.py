# Generated by Django 3.0.2 on 2020-06-13 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautinator', '0010_auto_20200613_2129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='start_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='start_time',
            field=models.TimeField(),
        ),
    ]