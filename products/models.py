from django.conf import settings
from django.db import models

# Create your models here.


class Product(models.Model):
    """Model definition for Product."""

    # TODO: Define fields here
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=140, blank=True, null=True)
    price = models.FloatField()
    stock_amount = models.IntegerField()
    package_details = models.CharField(max_length=20)
    picture = models.ImageField(upload_to="images/product")
    seller = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    delivery_option = models.BooleanField(default=False)

    CATEGORY_TYPE = (
        ("GROC", "GROCERIES"),
        ("ELEC", "ELECTRONICS"),
        ("CLTH", "CLOTHES"),
        ("HOME", "HOME AND LIVING"),
    )
    category = models.CharField(max_length=5, choices=CATEGORY_TYPE, null=False)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Product."""

        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        """Unicode representation of Product."""
        return self.name

    def get_picture(self):
        return self.picture.url
