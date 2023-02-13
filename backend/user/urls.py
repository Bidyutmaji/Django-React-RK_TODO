from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView,
                                            TokenVerifyView, TokenBlacklistView)
from .views import *

urlpatterns = [
    path('api/signup/', user_registration, name='user_registration'),
    path('api/login/', user_login, name='user_login'),
    path('api/token-refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token-verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/logout/', user_logout, name='user_logout'),
]