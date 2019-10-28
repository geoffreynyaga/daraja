import requests
from requests.auth import HTTPBasicAuth

from access_token import generate_access_token
import keys


def register_url():

    my_access_token = generate_access_token()

    api_url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"

    headers = {"Authorization": "Bearer %s" % my_access_token}

    request = {
        "ShortCode": keys.shortcode,
        "ResponseType": "Completed",
        "ConfirmationURL": "https://mysterious-oasis-16355.herokuapp.com/api/payments/c2b-confirmation/",
        "ValidationURL":   "https://mysterious-oasis-16355.herokuapp.com/api/payments/c2b-validation/",
    }

    try:
        response = requests.post(api_url, json=request, headers=headers)
    except:
        response = requests.post(api_url, json=request, headers=headers, verify=False)

    print(response.text)


# register_url()


def simulate_c2b_transaction():
    my_access_token = generate_access_token()

    api_url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate"

    headers = {"Authorization": "Bearer %s" % my_access_token}

    request = {
        "ShortCode": keys.shortcode,
        "CommandID": "CustomerPayBillOnline",
        "Amount": "4",
        "Msisdn": keys.test_msisdn,
        "BillRefNumber": "myaccnumber",
    }
    try:
        response = requests.post(api_url, json=request, headers=headers)

    except:
        response = requests.post(api_url, json=request, headers=headers, verify=False)

    print(response.text)


simulate_c2b_transaction()
