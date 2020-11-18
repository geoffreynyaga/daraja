from rest_framework.generics import CreateAPIView, ListAPIView

from rest_framework.permissions import AllowAny

from products.models import Product
from products.api.serializers import ProductSerializer, ProductCreateSerializer


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class ProductCreateAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductCreateSerializer
    permission_classes = [AllowAny]