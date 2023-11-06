from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Create your models here.
# class User(models.Model):
#   username = models.CharField(max_length=30)
#   email = models.EmailField(max_length=30)
#   password = models.CharField(max_length=30)
#   first_name = models.CharField(max_length=30)
#   last_name = models.CharField(max_length=30)
#   phone = models.CharField(max_length=10)

class employee(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  phone = models.CharField(max_length=10)

class Availability(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateField()
  start_time = ArrayField(models.TimeField(), size=7)
  end_time = ArrayField(models.TimeField(), size=7)
    
class Schedule(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateField()
  start_time = ArrayField(models.TimeField(), size=7)
  end_time = ArrayField(models.TimeField(), size=7)