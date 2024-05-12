from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_route, name='get_route'),
    path('students/', views.get_student, name='get_student'),
    path('students/<str:pk>/', views.get_student_by_id, name='get_student_id'),
]