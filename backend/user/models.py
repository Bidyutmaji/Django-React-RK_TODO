from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager, BaseUserManager, PermissionsMixin

class TodoUserManager(BaseUserManager):
    def create_user(self, email, password, first_name, last_name, phone=None, is_staff=False, is_active=True, is_superuser=False, **extra_fields):
        if not email:
            raise ValueError('Users must have an valid email address')
        if self.model.objects.filter(email=email).exists():
            raise ValueError(f'Email: {email} Already exists.')
        if not password:
            raise ValueError('Users must have an valid password')
        if not first_name:
            raise ValueError('Users must have an valid first_name')
        if not last_name:
            raise ValueError('Users must have an valid last_name')
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            phone=phone,

            is_staff=is_staff,
            is_active=is_active,
            is_superuser=is_superuser,
            **extra_fields
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, first_name, last_name, **extra_fields):
        if not email:
            raise ValueError('Users must have an valid email address')
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            **extra_fields
        )
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class TodoUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    phone = models.CharField(max_length=15, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = TodoUserManager()

    def __str__(self):
        return self.email