from flask import Flask
from helpers import *
import psycopg2, os
from twilio.rest import Client
from dotenv import load_dotenv   #for python-dotenv method
load_dotenv()

token = os.environ.get("cockroach")

conn = psycopg2.connect(
    database='crazy-walrus-3600.defaultdb',
    user='db_admin',
    password = token,
    sslmode='require',
    sslrootcert='certs/ca.crt',
    sslkey='certs/client.maxroach.key',
    sslcert='certs/client.maxroach.crt',
    port=26257,
    host='free-tier.gcp-us-central1.cockroachlabs.cloud'
)

with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(65535), email VARCHAR(65535), family VARCHAR(65535), password_hash VARCHAR(65535));"
        )
    conn.commit()

# print(conn.closed)

# twilio sms

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)
message = client.messages \
                .create(
                     body="GenNet started, test message.",
                     from_='+16479319450',
                     to=os.environ['SERVER_NOTIFY']
                 )
print(message.sid)

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def warning():
    return "This is the API URL address. Use GenNet at [website]."

@app.route("/login", methods=["POST"])
def login():
    email = request.args.get("email")
    password = request.args.get("password")

@app.route("/register", methods=["POST"])
def register():
    email = request.args.get("email")
    password = request.args.get("password")
    password_conf = request.args.get("password_conf")

@app.route("/admin/adduser", methods=["POST"])
@admin_access
def add_user():
    email = request.args.get("email")
    password = request.args.get("password")

@app.route("/admin/removeuser", methods=["POST"])
@admin_access
def remove_user():
    email = request.args.get("email")
    delete_trees = request.args.get("delete_trees")

@app.route("/admin/editalbum", methods=["POST"])
@admin_access
def edit_album():
    family = request.args.get("family")

@app.route("/user/leavetree", methods=["POST"])
@login_access
def leave_tree():
    family = request.args.get("family")

@app.route("/user/viewperms", methods=["GET", "POST"])
@login_access
def view_perms():
    family = request.args.get("family")

@app.route("/user/viewalbum", methods=["GET", "POST"])
@login_access
def view_album():
    family = request.args.get("family")

@app.route("/user/deleteaccount", methods=["POST"])
@login_access
def delete_account():
    # auth them again here
    pass

@app.route("/user/editaccount", methods=["POST"])
@login_access
def edit_account():
    # for changing settings/data
    # all-purpose function for accounts
    key = request.args.get("key")
    value = request.args.get("value")