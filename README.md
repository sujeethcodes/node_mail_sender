# 📧 Node Mail Sender

This project allows sending emails using Node js and viewing email logs

---

## **1️⃣ Setup & Start the Server**

1. Clone the repository:

```bash
git clone https://github.com/sujeethcodes/node_mail_sender.git
cd project folder

npm init
npm start

http://localhost:9090/send
Content-Type: application/json

{
  "to": "test@example.com",
  "subject": "Hello",
  "body": "This is a test"
}

Response
{
    "data": {
        "status": "sent_attempted",
        "delivered": true,
        "error": null
    }
}
GET http://localhost:9090/logs/mongo
{
    "logs": [
        {
            "_id": "68c110adc11c03d5729b6d45",
            "toEmail": "test@example.com",
            "subject": "Hello",
            "body": "This is a test",
            "status": "success",
            "delivered": true,
            "errorText": "",
            "createdAt": "2025-09-10T05:46:21.350Z",
            "updatedAt": "2025-09-10T05:46:21.350Z",
            "__v": 0
        },
        {
            "_id": "68c10a3217f01115d8e3f640",
            "toEmail": "test@example.com",
            "subject": "Hello",
            "body": "This is a test",
            "status": "success",
            "delivered": true,
            "errorText": "",
            "createdAt": "2025-09-10T05:18:42.727Z",
            "updatedAt": "2025-09-10T05:18:42.727Z",
            "__v": 0
        },
]
}
