from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'profilebase/index.html')

def about(request):
    return render(request, 'profilebase/about.html')

def projects(request):
    return render(request, 'profilebase/projects.html')

def contact(request):
    return render(request, 'profilebase/contact.html')