from django.contrib import admin

from products.models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = (
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

    list_filter = ("category", "delivery_option")

    search_fields = ("name",)

    autocomplete_fields = ("seller",)

    # readonly_fields = ("seller",)


admin.site.register(Product, ProductAdmin)
