from django.contrib.auth.hashers import make_password
from rest_framework.serializers import ModelSerializer, CharField
from .models import *

class UserSerializer(ModelSerializer):
    # refresh = CharField()
    # access = CharField()

    class Meta:
        model = TodoUser
        exclude = ( 'password', 'groups', 'user_permissions')
