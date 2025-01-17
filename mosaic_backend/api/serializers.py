import base64
import logging
from django.shortcuts import get_object_or_404
from django.core.files.base import ContentFile
from booking.models import Booking
from blog.models import Post
from school.models import School, Approach, Question, Advatage, Review
from crm_app.models import FeedbackRequest, EmailMainForm
from masterclass.models import Masterclass, MasterclassType
from carousel.models import MainCarouselItem
from rest_framework import serializers

logger = logging.getLogger(__name__)


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super().to_internal_value(data)


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackRequest
        fields = ['name', 'phone_num', 'comment', 'contact_consent']
        extra_kwargs = {
            'contact_consent': {'required': True}
        }

    

class EmailMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMainForm
        fields = ['email']


class MasterclassSerializer(serializers.ModelSerializer):
    num_of_guests = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Masterclass
        fields = ['id', 'title', 'price', 'currency',
                #   'time_begin', 'time_end',
                  'num_of_guests',
                  ]
        read_only_fields = ['title', 'price', 'time_begin',
                            'time_end',
                            'num_of_guests',
                            ]


class MasterclassTypeSerializer(serializers.ModelSerializer):
    """ тут что-то рассказано про конкретно этот сериализтор
    от"""
    masterclasses = MasterclassSerializer(many=True, read_only=True)
    # full_description =

    class Meta:
        model = MasterclassType
        fields = ['id', 'type', 'slug', 'max_guests', 'duration',
                  'short_description', 'full_description', 'masterclasses']
        read_only_fields = ['id', 'type', 'slug', 'max_guests', 'duration',
                            'short_description', 'full_description',
                            'masterclasses']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['guest', 'attending']


class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    image = Base64ImageField(required=False, allow_null=True)
    # pub_date = serializers.DateTimeField(format='%d %B %Y')
    
    # def perform_create(self, serializer):
        # title = get_object_or_404(Post, id=self.kwargs.get("post_id"))
        # serializer.save(author_id=self.request.user.id)

    class Meta:
        model = Post
        fields = ['id', 'title', 'text', 'pub_date', 'author', 'image']
        read_only_fields = ['id', 'pub_date', 'author']
        extra_kwargs = {
            'text': {'required': True}
        }

class AdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advatage
        fields = ['id', 'title', 'description']


class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question', 'answer'] 


class ApproachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approach
        fields = ['id', 'title', 'description'] 


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'student_name', 'photo', 'review', 'pub_date']


class SchoolSerializer(serializers.ModelSerializer):
    advantages = AdvantagesSerializer(many=True)
    questions = QuestionsSerializer(many=True)
    approach = ApproachSerializer(many=True)
    reviews = ReviewsSerializer(many=True)

    class Meta:
        model = School
        fields = ['name', 'logo', 'full_description', 'short_description',
                  'address_text', 'address_link', 'working_hours',
                  'phone', 'email', 'facebook_link', 'tg_link',
                  'instagram_link',
                  'advantages',
                  'questions',
                  'approach',
                  'reviews',
                  ]


class MainCarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCarouselItem
        fields = ['link', 'text', 'button', 'order', 'image']
