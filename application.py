from flask import Flask, redirect, render_template, request
import os.path 
from os import path
import csv

app = Flask(__name__)

@app.route("/")
def index():
    return "hello, world:!"

@app.route("/snip", methods=["GET", "POST"])
def external():
    if request.method == "POST":
        print("Message received cowboy")
        print(request.data)
        print("now")
        print(request.form['tab'])
        print(request.form['test'])

        if path.exists("testfile.csv"):
            print("It exists")
        else:
            f= open("test.csv","w+")

        return redirect("/")

