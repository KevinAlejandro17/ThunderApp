# Generated by Django 4.1.3 on 2023-01-23 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ThunderApp', '0007_remove_bills_paymethod'),
    ]

    operations = [
        migrations.AddField(
            model_name='bills',
            name='payMethod',
            field=models.CharField(default='visa', max_length=24),
            preserve_default=False,
        ),
    ]
