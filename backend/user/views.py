from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.


class UserView(APIView):

    serializer_class = UserSerializer

    def get(self, request):
        output = [{"username": output.username, "email": output.email, "password": output.password, "availability": output.availability}
                  for output in User.objects.all()]
        return Response(output)

    def post(self, request):

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
def delete(self, request, username):
    try:
        user = User.objects.get(username=username)
        user.delete()
        return Response(status=204)  # HTTP 204 No Content
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)