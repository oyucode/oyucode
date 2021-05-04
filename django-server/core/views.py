from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
import json
import time
from requests import post, get


class BaseView(APIView):
    renderer_classes = [JSONRenderer]


class SubmitCode(BaseView):
    async def get(self, request):
        accessToken = '21526762778822d9e1c6fb709250bc83'
        files = {'source': open('sub.cpp', 'r')}

        data = await post(f'https://0a6b4a08.compilers.sphere-engine.com/api/v4/submissions?access_token={accessToken}', files=files, data={
            'problemId': '48813',
            'compilerId': '1',
        })
        print(data)
        print(data.text)
        # print(json.load(data.text))
        # _id = json.load(data.text)['id']
        # print(_id)
        # time.sleep(2)
        # data = get(
        #     f'https://0a6b4a08.compilers.sphere-engine.com/api/v4/submissions/{_id}?access_token={accessToken}')
        # print(data.text)
        return Response({
            'success': True
        })

    def post(self, request):
        accessToken = '21526762778822d9e1c6fb709250bc83'
        # Creating file
        with open('sub.cpp', 'w') as f:
            f.write(request.data['source'])
        # files = {'source': open('sub.cpp', 'rb')}

        # data = post(f'https://0a6b4a08.compilers.sphere-engine.com/api/v4/submissions?access_token={accessToken}', files=files, data={
        #     'problemId': '48813',
        #     'compilerId': '1',
        # })
        # _id = json.load(data.text)
        # print(_id)
        # print(_id)
        # time.sleep(2)
        # data = get(
        #     f'https://0a6b4a08.compilers.sphere-engine.com/api/v4/submissions/{_id}?access_token={accessToken}')
        # print(data.text)
        return Response({
            'success': True
        })
