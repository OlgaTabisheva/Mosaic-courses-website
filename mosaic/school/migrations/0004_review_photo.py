# Generated by Django 4.1.6 on 2023-02-25 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0003_alter_review_pub_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='photo',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]
