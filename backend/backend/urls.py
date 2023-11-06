"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import re_path, include, path
from user.views import *
from chatgpt.views import *

""" 
path, and re_path is explained here https://docs.djangoproject.com/en/4.2/ref/urls/
The differences between path and re_path are explained here https://stackoverflow.com/questions/55285814/when-should-i-use-path-over-re-path
"""

urlpatterns = [
    re_path('admin/', admin.site.urls),
    path("user/", include("user.urls")),
    # re_path('', UserView.as_view(), name="xxx"),
    # re_path('users/(?P<username>\w+)/', UserView.as_view(), name="user_operations"),
    path("chatgpt/", include("chatgpt.urls")),
]
