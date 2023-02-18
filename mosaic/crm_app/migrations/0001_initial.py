# Generated by Django 4.1.6 on 2023-02-18 03:58

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Inquiry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('contact', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('comment', models.TextField(max_length=500)),
            ],
        ),
    ]
