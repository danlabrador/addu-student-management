from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Student
from .serializers import StudentSerializer
from api import serializers

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


@api_view(['POST'])
def create_student(request):
    data = request.data
    student = Student.objects.create(
        name=data['name'],
        course=data['course'],
        gender=data['gender'],
        age=data['age']
    )
    serializer = StudentSerializer(student, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
def update_student(request, pk):
    data = request.data
    student = Student.objects.get(id=pk)
    serializer = StudentSerializer(instance=student, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def delete_student(request, pk):
    Student.objects.get(id=pk).delete()
    return Response('Student deleted successfully!')