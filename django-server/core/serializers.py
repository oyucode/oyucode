from rest_framework import serializers
from .models import *
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount


class UserMe(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField('get_picture')

    def get_picture(self, user):
        social = SocialAccount.objects.get(user=user)
        return social.extra_data['picture']

    class Meta:
        model = BaseUser
        fields = ['username', 'slug', 'uuid', 'picture']
