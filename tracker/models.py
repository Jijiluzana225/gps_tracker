from django.db import models

class Tracker(models.Model):
    device_id = models.CharField(max_length=100, unique=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.device_id}: {self.latitude}, {self.longitude}"
