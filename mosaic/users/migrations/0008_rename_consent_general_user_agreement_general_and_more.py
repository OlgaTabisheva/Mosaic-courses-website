# Generated by Django 4.1.6 on 2023-02-13 04:19

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_rename_consent_comm_user_consent_markcomm_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='consent_general',
            new_name='agreement_general',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='consent_markcomm',
            new_name='agreement_markcomm',
        ),
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None, unique=True),
        ),
    ]