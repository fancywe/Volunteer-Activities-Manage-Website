# Generated by Django 3.2.9 on 2021-11-29 12:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_auto_20211128_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usertoken',
            name='end',
            field=models.DateTimeField(default=datetime.datetime(2021, 11, 29, 20, 24, 40, 562416)),
        ),
        migrations.AlterField(
            model_name='usertoken',
            name='start',
            field=models.DateTimeField(default=datetime.datetime(2021, 11, 29, 20, 24, 40, 562416)),
        ),
    ]
