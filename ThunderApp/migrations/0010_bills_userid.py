# Generated by Django 4.1.3 on 2023-01-23 00:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ThunderApp', '0009_remove_users_idbill'),
    ]

    operations = [
        migrations.AddField(
            model_name='bills',
            name='userID',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ThunderApp.users'),
            preserve_default=False,
        ),
    ]