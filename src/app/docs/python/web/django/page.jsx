import React from "react";

export default function DjangoPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Django</h1>

      <p className="text-slate-700 leading-relaxed">
        Django is a high-level, batteries-included Python web framework that
        helps you build secure and scalable web applications rapidly. It comes
        with an ORM, authentication system, template engine, admin panel, forms,
        and many more built-in features.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why Django */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Why Django?</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Fast development</strong> with built-in tools.
            </li>
            <li>
              <strong>Secure by default</strong> (CSRF, XSS, SQL injection
              protections).
            </li>
            <li>
              <strong>Scalable</strong> and used in production by large
              companies.
            </li>
            <li>
              <strong>ORM</strong> to work with databases using Python classes.
            </li>
            <li>
              <strong>Admin panel</strong> auto-generated from your models.
            </li>
          </ul>
        </section>

        {/* Install & Start */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Install & Start a Project
          </h2>
          <p className="mt-2">
            Use <code>django-admin</code> to create a new project and{" "}
            <code>manage.py</code> to run commands inside it.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Project and App Setup
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`pip install django
django-admin startproject mysite
cd mysite
python manage.py startapp blog
python manage.py runserver`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <p className="font-semibold text-[#4a0080]">
          Folder structure (simplified):
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono leading-6">
          {`mysite/
  manage.py
  mysite/
    settings.py
    urls.py
    wsgi.py
  blog/
    models.py
    views.py
    urls.py
    templates/blog/`}
        </pre>

        {/* Model, Migration, Admin */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Model, Migration & Admin
          </h2>
          <p className="mt-2">
            Django’s ORM lets you define models as Python classes and
            automatically create database tables via migrations. The same models
            power the admin panel.
          </p>
        </section>

        {/* Model Code */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Defining a Model
            </h3>
          </div>
          <div className="px-6 pb-4">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# mysite/settings.py → add app
INSTALLED_APPS += ['blog']

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <p className="font-semibold text-[#4a0080]">What this does:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>Post</code> model creates a <code>blog_post</code> table in
            the database.
          </li>
          <li>
            <code>auto_now_add=True</code> stores timestamp when the post is
            created.
          </li>
          <li>
            <code>makemigrations</code> generates migration files.
          </li>
          <li>
            <code>migrate</code> applies them to the database.
          </li>
          <li>
            <code>createsuperuser</code> sets up a user for Django admin.
          </li>
        </ul>

        {/* View + URL + Template */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            View, URL & Template
          </h2>
          <p className="mt-2">
            Django follows the MVT pattern (Model–View–Template). A request goes
            through the URL, then hits a view function, which uses models and
            returns a rendered template.
          </p>
        </section>

        {/* View Code */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              View Function
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# blog/views.py
from django.shortcuts import render
from .models import Post

def index(request):
    posts = Post.objects.order_by('-created_at')
    return render(request, 'blog/index.html', {'posts': posts})`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# mysite/urls.py
from django.urls import path, include

urlpatterns = [
    path('', include('blog.urls')),
]`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`<!-- blog/templates/blog/index.html -->
{% for p in posts %}
  <p>{{ p.title }}</p>
{% endfor %}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <p className="font-semibold text-[#4a0080]">Flow:</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono leading-6">
          {`Request  →  URL ('')  →  blog.urls  →  views.index  →  template (index.html)`}
        </pre>

        {/* Notes / Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Notes & Best Practices
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use Django admin for quick CRUD on your models.</li>
            <li>
              For APIs, integrate <strong>Django REST Framework (DRF)</strong>.
            </li>
            <li>Split apps logically (users, blog, payments, etc.).</li>
            <li>Use environment variables for secrets and database URLs.</li>
            <li>
              Enable debug = False and proper allowed hosts in production.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
