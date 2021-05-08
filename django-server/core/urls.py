from django.urls import path, include
from .views import *

urlpatterns = [
    path('', SubmitCode.as_view()),
]
