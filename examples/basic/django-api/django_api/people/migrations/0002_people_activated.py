# Generated by Django 2.1.5 on 2019-01-23 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='people',
            name='activated',
            field=models.BooleanField(default=True),
        ),
    ]
