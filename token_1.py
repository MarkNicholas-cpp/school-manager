import jwt
import datetime

# Secret Key
SECRET_KEY = "a-string-secret-at-least-256-bits-long secreate"

# Payload
payload = {
    "id": 1,
    "name": "Emily",
    "email": "emily@example.com",
    "role": "admin",
    "exp": datetime.datetime.utcnow() + datetime.timedelta(days=2)  # 2-day expiration
}

# Generate JWT
token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

print(token)
