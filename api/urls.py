from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_route, name='get_route'),
    path('students/', views.get_student, name='get_student'),
    path('students/create', views.create_student, name='create_student'),
    path('students/<str:pk>/update', views.update_student, name='update_student'),
    path('students/<str:pk>/delete', views.delete_student, name='delete_student'),
    path('students/<str:pk>/', views.get_student_by_id, name='get_student_by_id'),
]