from rest_framework.routers import DefaultRouter
from .views import TrackerViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r"trackers", TrackerViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
