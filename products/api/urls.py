from django.contrib import admin
from django.urls import path, include

from products.api.views import ProductListAPIView, ProductCreateAPIView

urlpatterns = [
    path("list/", ProductListAPIView.as_view(), name="product-list"),
    path("create/", ProductCreateAPIView.as_view(), name="product-create"),
]
