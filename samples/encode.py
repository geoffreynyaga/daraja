import base64

import keys


def generate_password(formatted_time):

    data_to_encode = (
        keys.business_shortCode + keys.lipa_na_mpesa_passkey + formatted_time
    )

    encoded_string = base64.b64encode(data_to_encode.encode())
    # print(encoded_string) b'MjAxOTAyMjQxOTUwNTc='

    decoded_password = encoded_string.decode("utf-8")

    return decoded_password
