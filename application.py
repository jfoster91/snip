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
        print("now")
        print(request.form['tab'])
        compObject = json.loads(request.form['test'])

        companyName = compObject['companyName']
        print(companyName)

        if path.exists("testfile.csv"):
            print("It exists")
        else:
            f= open("test.csv","w+")

    return redirect("/")

