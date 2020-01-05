from flask import Flask, redirect, render_template, request
import os.path 
from os import path

app = Flask(__name__)

@app.route("/")
def index():
    return "hello, world:!"

@app.route("/external", methods=["GET", "POST"])
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
            print("it dont exist")
        

        return redirect("/")

