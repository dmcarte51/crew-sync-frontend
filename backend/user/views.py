from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib import messages
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.core import serializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# THIS METHOD BASICALLY DOES NOTHING
# It's just an info method that shows the available API endpoints
@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_items': '/',
        'single_item': '/user/pk',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/user/pk/delete'
    }
    return Response(api_urls)
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



@api_view(['POST'])
def add_user(request):
    # Parse the incoming JSON data
    data = JSONParser().parse(request)

    # Validate the keys in the JSON data
    if 'username' not in data or 'password' not in data or 'email' not in data:
        return JsonResponse({'error': 'Missing username, password, or email'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if the user already exists
    if User.objects.filter(username=data['username']).exists():
        return JsonResponse({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Create the user
    try:
        user = User.objects.create_user(
            username=data['username'],
            password=data['password'],
            email=data['email']
        )
        return JsonResponse({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_user(request):
    # checking for the parameters from the URL
    if request.query_params:
        items = User.objects.filter(**request.query_params.dict())
    else:
        items = User.objects.all()
    # if there is something in items else raise error
    if items:
        serializer = UserSerializer(items, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def get_single_user(request, username):
    try:
        user = User.objects.get(username=username)
        return Response({'username': user.username, 'email': user.email})
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_user(request, username):
    try:
        user = User.objects.get(username=username)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['PUT'])
def update_user(request, pk):
    try:
        item = User.objects.get(pk=pk)
        serializer = UserSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def login_user(request):
    data = JSONParser().parse(request)
    
    # Validate the keys in the JSON data
    if 'username' not in data or 'password' not in data:
        return JsonResponse({'error': 'Missing username or password'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Authenticate the user
    user = authenticate(username=data['username'], password=data['password'])
    
    if user is not None:
        # The credentials are valid, log the user in
        login(request, user)
        return JsonResponse({'message': 'Logged in successfully'}, status=status.HTTP_200_OK)
    else:
        # The credentials are invalid
        return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
def logout_user(request):
    def post(self, request, *args, **kwargs):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)
