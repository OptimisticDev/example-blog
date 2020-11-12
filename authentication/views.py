from django.http import Http404
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


from .forms import CreateUserForm


# LOGIN VIEW ENDPOINT

def logIn(request):
    
    # Loggedin user can't access this route 

    if request.user.is_authenticated:
        return redirect('/')
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Check user is authenticated or not
        user = authenticate(request, username = username, password = password)
        
        # Authenticated user login successfully and redirect to home page
        if user is not None:
            login(request,user)
            print("login successfully")
            return redirect('/')

    return render(request, 'login.html')

    

# REGISTER USER VIEW ENDPOINT

def register(request):
    form = CreateUserForm()

    # Loggedin user can't access this route 
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
      
        # After validate form save user in db and redirect to login page
        if form.is_valid():
            form.save()
            return redirect('/auth/login')

    return render(request, 'register.html', {'form': form})


# Protect '/auth/logout' route. Only loggedin user access this route
@login_required(login_url = '/auth/login')

def Logout(request):
    logout(request)
    return redirect('/auth/login')