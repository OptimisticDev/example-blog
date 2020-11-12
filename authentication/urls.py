from django.urls import path
from authentication.views import logIn, register, Logout

urlpatterns = [
    path('login/', logIn),
    path('register/', register, name="register"),
    path('logout/', Logout, name="logout"),
]
