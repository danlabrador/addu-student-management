from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Student
from .serializers import StudentSerializer

# Create your views here.
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def get_route(request):
    routes = [
        {
            'Endpoint': '/students/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of student objects.',
        },
        {
            'Endpoint': '/students/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single student object.',
        },
        {
            'Endpoint': '/students/',
            'method': 'POST',
            'body': {
                'name': 'string',
            },
            'description': 'Creates a new student object.',
        },
        {
            'Endpoint': '/students/id',
            'method': 'PUT',
            'body': {
                'name': 'string',
            },
            'description': 'Updates a single student object.',
        },
        {
            'Endpoint': '/students/id',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes a single student object.',
        },
    ]
    return Response(routes)

@api_view(['GET'])
def get_student(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)

@api_view(['GET',])
def get_student_by_id(request, pk):
    student = Student.objects.get(id=pk)
    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)