from django.urls import path
from posts.views import posts, post_details

urlpatterns = [
    path('', posts),
    path('<str:post_id>', post_details, name="posts")
]
