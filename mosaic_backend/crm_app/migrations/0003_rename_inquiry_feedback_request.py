# Generated by Django 4.1.6 on 2023-03-09 05:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crm_app', '0002_inquiry_contact_consent_alter_inquiry_comment'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Inquiry',
            new_name='Feedback_request',
        ),
    ]