from django.urls import path, include
from .views import *

urlpatterns = [
    path('', SubmitCode.as_view()),
    path('auth/', include('dj_rest_auth.urls')),
    path('google/', GoogleLogin.as_view(), name='google_login'),
]
