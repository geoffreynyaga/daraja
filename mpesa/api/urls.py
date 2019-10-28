from django.contrib import admin
from django.urls import path, include

from mpesa.api.views import LNMCallbackUrlAPIView,C2BValidationAPIView,C2BConfirmationAPIView

urlpatterns = [
    path("lnm/", LNMCallbackUrlAPIView.as_view(), name="lnm-callbackurl"),
    path("c2b-validation/", C2BValidationAPIView.as_view(), name="c2b-validation"),
    path("c2b-confirmation/", C2BConfirmationAPIView.as_view(), name="c2b-confirmation"),

    ]

