# Generated by Django 3.0.2 on 2020-06-15 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautinator', '0013_auto_20200614_2102'),
    ]

    operations = [
        migrations.AddField(
            model_name='salon',
            name='logo',
            field=models.URLField(default='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'),
        ),
    ]
