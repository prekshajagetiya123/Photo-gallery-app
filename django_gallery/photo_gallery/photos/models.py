from django.db import models


class Photos(models.Model):
    title = models.CharField(max_length = 200)
    width = models.IntegerField(default = 0)
    height = models.IntegerField(default = 0)
    image = models.ImageField(null= False)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
            return self.title

    class Meta:
        ordering = ["-timestamp"]

    def publish(self):
        self.save()

