import React from "react";

export default function DjangoPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Django</h1>
      <p>
        Django is a batteries‑included framework with ORM, auth, templates, and admin.
      </p>

      <h2>Install & Start</h2>
      <pre><code>{`pip install django
django-admin startproject mysite
cd mysite
python manage.py startapp blog
python manage.py runserver`}</code></pre>

      <h2>Model, Migration, Admin</h2>
      <pre><code>{`# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)`}</code></pre>
      <pre><code>{`# mysite/settings.py → INSTALLED_APPS += ['blog']
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser`}</code></pre>

      <h2>View + URL + Template</h2>
      <pre><code>{`# blog/views.py
from django.shortcuts import render
from .models import Post

def index(request):
    posts = Post.objects.order_by('-created_at')
    return render(request, 'blog/index.html', {'posts': posts})`}</code></pre>
      <pre><code>{`# mysite/urls.py
from django.urls import path, include
urlpatterns = [
    path('', include('blog.urls')),
]`}</code></pre>
      <pre><code>{`# blog/urls.py
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
]`}</code></pre>
      <pre><code>{`<!-- blog/templates/blog/index.html -->
{% for p in posts %}<p>{{ p.title }}</p>{% endfor %}`}</code></pre>

      <h2>Notes</h2>
      <ul>
        <li>Use Django admin for quick CRUD.</li>
        <li>For APIs, use Django REST Framework (DRF).</li>
      </ul>
    </div>
  );
}
