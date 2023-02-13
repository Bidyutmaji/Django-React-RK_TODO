from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *
from .serialiers import *

{'email': 'bidyutmaji5@gmail.com', 'password': 'JPS@bidyut108', 'first_name': 'Radha', 'last_name': 'Madhava'}
@api_view(['POST'])
def user_registration(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    phone = data.get('phone')
    
    try:
        user = TodoUser.objects.first()
        
        # create_user(email=email, password=password, first_name=first_name,
        #                             last_name=last_name, phone=phone)
        
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        serialiser = UserSerializer(user)
        data = serialiser.data
        data['access'] = str(access)
        data['refresh'] = str(refresh)

        return Response(data=data)
    except Exception as e:
        print(str(e))
        return Response({'error':str(e)})

@api_view(['POST'])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = authenticate(request, email=email, password=password)
        login(request, user)
        
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        data = UserSerializer(user).data

        data['access'] = str(access)
        data['refresh'] = str(refresh)

        return Response(data=data)
    except Exception as e:
        print(str(e))
        return Response({'error':str(e)})

@api_view(['GET'])
def user_logout(request):
    try:
        logout(request)
        return Response({'data':'success'})
    except Exception as e:
        print(str(e))
        return Response({'error':str(e)})
