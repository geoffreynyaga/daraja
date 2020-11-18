from rest_framework import serializers

from products.models import Product


class ProductSerializer(serializers.ModelSerializer):

    picture = serializers.SerializerMethodField()

    def get_picture(self, instance):

        request = self.context.get("request")

        return request.build_absolute_uri(instance.get_picture())

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "description",
            "price",
            "stock_amount",
            "package_details",
            "picture",
            "seller",
            "delivery_option",
            "category",
            "date_created",
            "date_modified",
        )


class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "name",
            "description",
            "price",
            "stock_amount",
            "package_details",
            "picture",
            "seller",
            "delivery_option",
            "category",
        )