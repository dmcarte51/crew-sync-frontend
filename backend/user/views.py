from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework import status

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
    user = UserSerializer(data=request.data)

    # Validating for already existing data
    if User.objects.filter(**request.data).exists():
        return Response({'error': 'This data already exists'}, status=status.HTTP_400_BAD_REQUEST)

    if user.is_valid():
        user.save()
        return Response(user.data, status=status.HTTP_201_CREATED)
    else:
        return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)
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
