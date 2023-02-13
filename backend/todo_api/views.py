from rest_framework.views import APIView
from rest_framework.response import  Response
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *

# Create your views here.
class CreateTodo(APIView):

    def post(self, request):
        data = request.data
        print(request.data)
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(serializer.errors)

class ListTodo(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        user = request.user

        todos = Todo.objects.filter(user=user).order_by('-id')
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

class UpdateTodo(APIView):

    def get(self, request, id):
        todo  = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
            
    def put(self, request, id):

        data = request.data
        todo  = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(serializer.errors)

class DeleteTodo(APIView):

    def delete(self, request, id):
        todo  = Todo.objects.filter(id=id).update(is_deleted=True)
        print(todo)
        return Response({'message': 'Todo Deleted'})


class TrashTodo(APIView):
    def get(self, request):
        todos = Todo.objects.filter(is_deleted=True)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

class RestoreTodo(APIView):

    def get(self, request, id):

        todo  = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
            
    def put(self, request, id):

        todo  = Todo.objects.filter(id=id).first()
        todo.is_deleted = False
        todo.save()

        serializer = TodoSerializer(todo)
        return Response(data=serializer.data)