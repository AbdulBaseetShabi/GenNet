from flask import Flask, request, jsonify
from flask_cors import CORS
from helpers import *
import pymongo.mongo_client, os
from pymongo.errors import ConnectionFailure
# from utils.mongo import Document
from dotenv import load_dotenv
from twilio.rest import Client
load_dotenv()

mongo = pymongo.mongo_client.MongoClient(os.environ['CONNECTION_STRING'])

db = mongo['GenNet']
users = db["Users"] 
trees = db["FamilyTrees"]
journals = db["Journal"]

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
cors = CORS(app, resources={r"*": {"origins": "*"}})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

# @app.route("/", methods=["GET", "POST"])
# def warning():
#     return "This is the API URL address. Use GenNet at [website]."

@app.route("/login", methods=["POST"])
def login():
    res = []
    try:
        user_auth = request.get_json()
        email = user_auth["email"]
        for x in users.find({"email": email}, {"_id": 0}):
            res.append(x)
        print(res)
    except Exception as e:
        return jsonify({'status': 400, 'response': str(e)})
    return jsonify({'status': 200, 'response': res[0]})          

@app.route("/register", methods=["POST"])
def register(): 
    try:
        print("Registering...")
        user_auth = request.get_json()
        first_name = user_auth["first_name"]
        last_name = user_auth["last_name"]
        email = user_auth["email"]
        to_insert = {"firstName": first_name, "lastName": last_name, "email": email, "phone": "", "FamilyTrees": [], "Journals": []}
        print(to_insert)
        inserted = users.insert_one(to_insert)
    except Exception as e:
        return jsonify({'status': 400, 'response': str(e)})
    return jsonify({'status': 200, 'response': 'Registered Successfully'})

@app.route("/create/familytree", methods=["POST"])
def createfamilytree():
    try:
        user_auth = request.get_json()
        user_trees = user_auth["FamilyTrees"]
        user_trees.append(journals.insert(user_auth))
        users.update({"email": user_auth["email"]}, {"FamilyTrees": user_trees})
    except Exception as e:
        return jsonify({'status': 400, 'response': str(e)})
    return jsonify({'status': 200, 'response': 'Registered Successfully'})


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

if __name__ == '__main__':
    app.run(debug=True)
    # app.run()