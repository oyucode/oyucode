from django.urls import path
from .views import *

urlpatterns = [
    path('', SubmitCode.as_view())
]
