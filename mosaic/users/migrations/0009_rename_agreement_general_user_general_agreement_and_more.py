# Generated by Django 4.1.6 on 2023-02-13 04:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_rename_consent_general_user_agreement_general_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='agreement_general',
            new_name='general_agreement',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='agreement_markcomm',
            new_name='markcomm_agreement',
        ),
    ]