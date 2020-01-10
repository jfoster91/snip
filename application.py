from flask import Flask, redirect, render_template, request
import os.path 
from os import path
import csv
import json

app = Flask(__name__)

@app.route("/")
def index():
    return "hello, world:!"

@app.route("/snip", methods=["GET", "POST"])
def external():
    if request.method == "POST":
        print("Message received cowboy")

        array = request.form['arrayTest']
        lst = json.loads(array)
        
        #  Simple check to ensure that the right data is entering the array
        # for item in lst:
        #     print (item)

        # open file if one exists
        if path.exists("testfile.csv"):
            print("It exists")
        else:
            f= open("test.csv","w+")
        
        # Set up fields to write to the csv... using static data initially
        # writer = csv.DictWriter(f, fieldnames=["companyName", "firstName" "surname"])

    return redirect("/")

# Proposed solution... populate array in front end and then send that array to the backend
