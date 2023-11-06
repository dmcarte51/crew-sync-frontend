from django.urls import path
from . import views
 
""" 
path, and re_path is explained here https://docs.djangoproject.com/en/4.2/ref/urls/
The differences between path and re_path are explained here https://stackoverflow.com/questions/55285814/when-should-i-use-path-over-re-path
"""
 
urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_user, name='add-user'),
    path('get/', views.get_user, name='get-user'),
    path('get/<str:username>/', views.get_single_user, name='get-single-user'),
    path('update/<str:username>/', views.update_user, name='update-user'),
    path('delete/<str:username>/', views.delete_user, name='delete-user'),
    path('login/', views.login_user, name='login-user'),
    path('logout/', views.logout_user, name='logout'),
]