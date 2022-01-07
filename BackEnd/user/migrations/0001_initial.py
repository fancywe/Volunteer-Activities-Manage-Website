# Generated by Django 3.2.9 on 2021-11-28 06:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProflie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=100)),
                ('password', models.CharField(default='', max_length=100)),
                ('first_name', models.CharField(default='', max_length=100)),
                ('last_name', models.CharField(default='', max_length=100)),
                ('role', models.IntegerField(default=2)),
                ('status', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='UserToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('token', models.CharField(max_length=100)),
                ('start', models.TimeField(default=datetime.datetime(2021, 11, 28, 14, 53, 5, 106305))),
                ('end', models.TimeField(default=datetime.datetime(2021, 11, 28, 14, 53, 5, 106305))),
                ('status', models.BooleanField(default=True)),
            ],
        ),
    ]