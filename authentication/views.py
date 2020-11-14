from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.contrib import auth
import jwt

#Create your views here

class RegisterView(GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        print(1)

        if serializer.is_valid():
            serializer.save()
            #print('After serializer save')
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class LoginView(GenericAPIView):
     
    def post(self, request):
        data = request.data
        username = data.get('username', '')
        password = data.get('password', '')
        user = auth.authenticate(username = username, password = password)

        if user: 
            auth_token = jwt.encode({'username': user.username}, settings.SECRET_KEY)
            serializer = UserSerializer(user)

            data={
                'user': serializer.data,
                'token': auth_token,
            }
            
            return Response(data, status = status.HTTP_200_OK)
            #SEND RES
        return Response({'details': 'Invalid credentials'}, status = status.HTTP_401_UNAUTHORIZED)


