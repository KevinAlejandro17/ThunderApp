# Generated by Django 4.1.3 on 2023-01-22 23:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ThunderApp', '0004_alter_users_isactive'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bills',
            fields=[
                ('billID', models.BigAutoField(primary_key=True, serialize=False)),
                ('billingDate', models.DateField()),
                ('dueDate', models.DateField()),
                ('amount', models.BigIntegerField()),
                ('status', models.CharField(max_length=24)),
                ('payMethod', models.CharField(max_length=24)),
                ('idUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ThunderApp.users')),
            ],
        ),
        migrations.RemoveField(
            model_name='operadores',
            name='id',
        ),
        migrations.DeleteModel(
            name='Admin',
        ),
        migrations.DeleteModel(
            name='Operadores',
        ),
    ]
