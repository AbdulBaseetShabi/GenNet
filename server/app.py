from flask import Flask
from helpers import *

app = Flask(__name__)

@app.route("/")
def warning():
    return "This is the API URL address. Use GenNet at [website]."

@app.route("/login", methods=["POST"])
def login():
    pass

@app.route("/register", methods=["POST"])
def register():
    pass

@app.route("/admin/adduser", methods=["POST"])
@admin_access
def add_user():
    pass

@app.route("/admin/removeuser", methods=["POST"])
@admin_access
def remove_user():
    pass

@app.route("/admin/editalbum", methods=["POST"])
@admin_access
def edit_album():
    pass

@app.route("/user/leavetree", methods=["POST"])
@login_access
def leave_tree():
    pass

@app.route("/user/viewperms", methods=["GET"])
@login_access
def view_perms():
    pass

@app.route("/user/viewalbum", methods=["GET"])
@login_access
def view_album():
    pass

@app.route("/user/deleteaccount", methods=["POST"])
@login_access
def delete_account():
    # auth them again here
    pass

@app.route("/user/editaccount", methods=["POST"])
@login_access
def edit_account():
    # for changing settings/data
    pass