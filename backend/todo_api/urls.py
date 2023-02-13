from django.urls import path
from .views import *

app_name = 'todo_api'
urlpatterns = [
    path('create/', CreateTodo.as_view()),
    path('', ListTodo.as_view()),
    path('update/<int:id>/', UpdateTodo.as_view()),
    path('delete/<int:id>/', DeleteTodo.as_view()),

    path('trash/', TrashTodo.as_view()),
    path('restore/<int:id>/', RestoreTodo.as_view()),
]