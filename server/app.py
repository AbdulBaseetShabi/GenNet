from flask import Flask
from helpers import *

app = Flask(__name__)

@app.route("/")
@admin_access
def warning():
    return "This is the API URL address. Use GenNet at [website]."

@app.route("/login", methods=["POST"])
def login():
    pass

@app.route("/register", methods=["POST"])
def register():
    pass