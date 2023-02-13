from .models import *
from rest_framework.serializers import ModelSerializer


class TodoSerializer(ModelSerializer):

    class Meta:
        model = Todo
        exclude = ('created', 'modified')

