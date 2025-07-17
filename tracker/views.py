from rest_framework import viewsets
from .models import Tracker
from .serializers import TrackerSerializer

class TrackerViewSet(viewsets.ModelViewSet):
    queryset = Tracker.objects.all()
    serializer_class = TrackerSerializer
    lookup_field = "device_id"
