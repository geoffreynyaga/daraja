from rest_framework.generics import CreateAPIView

from rest_framework.permissions import AllowAny

from mpesa.models import LNMOnline, C2BPayments
from mpesa.api.serializers import LNMOnlineSerializer,C2BPaymentSerializer


class LNMCallbackUrlAPIView(CreateAPIView):
    queryset = LNMOnline.objects.all()
    serializer_class = LNMOnlineSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        print(request.data, "this is request.data")

        """
        {'Body':
            {'stkCallback':
             {
                'CheckoutRequestID': 'ws_CO_DMZ_401669274_11032019190235305',
                'MerchantRequestID': '19927-3244045-1',
                'ResultCode': 0,
                'ResultDesc': 'The service request is processed successfully.',
                'CallbackMetadata': {
                                        'Item': [
                                                {'Name': 'Amount', 'Value': 1.0},
                                                {'Name': 'MpesaReceiptNumber', 'Value': 'NCB1FW1DFZ'},
                                                {'Name': 'Balance'},
                                                {'Name': 'TransactionDate', 'Value': 20190311190244},
                                                {'Name': 'PhoneNumber', 'Value': 254718821114}
                                                ]
                                    }

                                    }
                }
        }

        """
        merchant_request_id = request.data["Body"]["stkCallback"]["MerchantRequestID"]
        print(merchant_request_id, "this should be MerchantRequestID")
        checkout_request_id = request.data["Body"]["stkCallback"]["CheckoutRequestID"]
        result_code = request.data["Body"]["stkCallback"]["ResultCode"]
        result_description = request.data["Body"]["stkCallback"]["ResultDesc"]
        amount = request.data["Body"]["stkCallback"]["CallbackMetadata"]["Item"][0][
            "Value"
        ]
        print(amount, "this should be an amount")
        mpesa_receipt_number = request.data["Body"]["stkCallback"]["CallbackMetadata"][
            "Item"
        ][1]["Value"]
        print(mpesa_receipt_number, "this should be an mpesa_receipt_number")

        balance = ""
        transaction_date = request.data["Body"]["stkCallback"]["CallbackMetadata"][
            "Item"
        ][3]["Value"]
        print(transaction_date, "this should be an transaction_date")

        phone_number = request.data["Body"]["stkCallback"]["CallbackMetadata"]["Item"][
            4
        ]["Value"]
        print(phone_number, "this should be an phone_number")

        from datetime import datetime

        str_transaction_date = str(transaction_date)
        print(str_transaction_date, "this should be an str_transaction_date")

        transaction_datetime = datetime.strptime(str_transaction_date, "%Y%m%d%H%M%S")
        print(transaction_datetime, "this should be an transaction_datetime")

        import pytz
        aware_transaction_datetime = pytz.utc.localize(transaction_datetime)
        print(aware_transaction_datetime, "this should be an aware_transaction_datetime")


        from mpesa.models import LNMOnline

        our_model = LNMOnline.objects.create(
            CheckoutRequestID=checkout_request_id,
            MerchantRequestID=merchant_request_id,
            Amount=amount,
            ResultCode=result_code,
            ResultDesc=result_description,
            MpesaReceiptNumber=mpesa_receipt_number,
            Balance=balance,
            TransactionDate=aware_transaction_datetime,
            PhoneNumber=phone_number,
        )

        our_model.save()

        from rest_framework.response import Response

        return Response({"OurResultDesc": "YEEY!!! It worked!"})


class C2BValidationAPIView(CreateAPIView):
    queryset = C2BPayments.objects.all()
    serializer_class = C2BPaymentSerializer
    permission_classes = [AllowAny]

    # def create(self, request):
    #     print(request.data, "this is request.data in Validation")

    #     from rest_framework.response import Response
    #     my_headers = self.get_success_headers(request.data)

    #     return Response({
    #         "ResultCode": 1,
    #         "ResponseDesc":"Failed!"
    #     },
    #     headers=my_headers)

class C2BConfirmationAPIView(CreateAPIView):
    queryset = C2BPayments.objects.all()
    serializer_class = C2BPaymentSerializer
    permission_classes = [AllowAny]

    # def create(self, request):
    #     print(request.data, "this is request.data in Confirmation")

    #     """
    #     {'TransactionType': 'Pay Bill', 
    #     'TransID': 'NCQ61H8BK4',
    #      'TransTime': '20190326210441',
    #       'TransAmount': '2.00', 
    #       'BusinessShortCode': '601445',
    #        'BillRefNumber': '12345678', 
    #        'InvoiceNumber': '', 
    #        'OrgAccountBalance': '18.00', 
    #        'ThirdPartyTransID': '', 
    #        'MSISDN': '254708374149', 
    #        'FirstName': 'John', 
    #        'MiddleName': 'J.', 
    #        'LastName': 'Doe'
    #        } 
    #        this is request.data in Confirmation
    #        """


    #     from rest_framework.response import Response

    #     return Response({"ResultDesc": 0})

