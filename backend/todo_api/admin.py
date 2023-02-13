from django.contrib import admin
from .models import Todo

# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display = ['item', 'created', 'modified'] 

admin.site.register(Todo, TodoAdmin)