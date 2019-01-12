from django.shortcuts import render
from .models import Photos
# Create your views here.


def photo_list(request):
    queryset = Photos.objects.all()
    context = {
        "photos": queryset,
    }
    template_name = 'photos.html'
    return render(request, template_name, context)