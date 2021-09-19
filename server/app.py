from flask import Flask, request
from helpers import *
import pymongo.mongo_client, os
# from utils.mongo import Document
from dotenv import load_dotenv
from twilio.rest import Client
load_dotenv()

mongo = pymongo.mongo_client.MongoClient(os.environ['CONNECTION_STRING'])

db = mongo.GenNet
users = db["Users"]
trees = db["FamilyTrees"]

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
    first_name = request.args.get("firstname")
    last_name = request.args.get("lastname")
    email = request.args.get("email")
    phone = request.args.get("phone")
    to_insert = {"FirstName": first_name, "LastName": last_name, "email": email, "phone": phone, "FamilyTrees": [], "Journals": []}
    inserted = users.insert_one(to_insert)
    return str(inserted.inserted_id)

@app.route("/admin/createtree", methods=["POST"])
@admin_access
def create_tree():
    family_name = request.args.get("familyname")
    creator_first_name = request.args.get("creatorfirstname")
    creator_first_name = request.args.get("creatorlastname")
    admin = request.args.get("admin")
    description = request.args.get("description")
    to_insert = {"FamilyName": family_name, "Admin": admin, "Creator": {"FirstName": creator_first_name, "LastName": creator_last_name}, "Description": description, "Members": []}
    inserted = trees.insert_one(to_insert)
    return str(inserted.inserted_id)

@app.route("/admin/adduser", methods=["POST"])
@admin_access
def add_user():
    family_name = request.args.get("FamilyName")
    first_name = request.args.get("firstname")
    last_name = request.args.get("lastname")
    current = users.find({"FamilyName": family_name})["Members"]
    users.update_one({"FamilyName": family_name}, {"$set": {"Members": current + {"FirstName": first_name, "LastName": lastname}}})

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