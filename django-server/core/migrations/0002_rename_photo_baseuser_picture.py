# Generated by Django 3.2 on 2021-05-09 07:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='baseuser',
            old_name='photo',
            new_name='picture',
        ),
    ]
