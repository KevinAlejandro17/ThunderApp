# Generated by Django 4.1.3 on 2023-01-23 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ThunderApp', '0011_alter_bills_userid'),
    ]

    operations = [
        migrations.AddField(
            model_name='bills',
            name='isGenerated',
            field=models.BooleanField(default=False),
        ),
    ]