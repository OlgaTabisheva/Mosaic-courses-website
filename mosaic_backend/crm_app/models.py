from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Feedback_request(models.Model):
    """Class for customer requests for feedback in the 'contact me' forms."""

    name = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    phone_num = PhoneNumberField()
    comment = models.TextField(max_length=150, blank=True)
    contact_consent = models.BooleanField(default=False)

    def __str__(self) -> str:
        """Returns contact + "оставил сообщение" as class str repr."""
        return f'{self.phone_num} оставил обращение'