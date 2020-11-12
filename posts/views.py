from django.shortcuts import render
import requests
from django.contrib.auth.decorators import login_required


# To protect '/' and '/posts' routes uncomment the below line 
#@login_required(login_url = '/auth/login')


# POSTS VIEW ENDPOINT
def posts(request):
    allPosts = requests.get('https://jsonplaceholder.typicode.com/posts').json()
    for post in allPosts:
        post['title'] = post['title'].capitalize()

    return render(request, 'blog-listing.html', {'posts': allPosts})


# To protect '/posts/id' routes uncomment the below line 
#@login_required(login_url = '/auth/login')

# POST DETAILS VIEW ENDPOINT
def post_details(request, post_id):
    url = "https://jsonplaceholder.typicode.com/posts/" + post_id
    post = requests.get(url).json()
    post['title'] = post['title'].capitalize()
    url = "https://jsonplaceholder.typicode.com/posts/" + post_id + "/comments"
    comments = requests.get(url).json()
    # for comment in comments:
    #     comment['name'] = comment['name'].capitalize()
    
    return render(request, 'blog-post.html', {'post': post, 'comments': comments })