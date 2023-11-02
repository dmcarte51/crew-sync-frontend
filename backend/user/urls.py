from django.urls import path
from . import views
 
urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_user, name='add-user'),
    path('get/', views.get_user, name='get-user'),
    path('get/<str:username>/', views.get_single_user, name='get-single-user'),
    path('update/<str:username>/', views.update_user, name='update-user'),
    path('delete/<str:username>/', views.delete_user, name='delete-user'),
]