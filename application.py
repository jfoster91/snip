from flask import Flask, redirect, render_template, request
import os.path 
from os import path
import csv
import json

app = Flask(__name__)

with open('test.csv', mode='w') as test_file:
            test_writer = csv.writer(test_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            test_writer.writerow(["Company Name", "First Name", "Surname"])

@app.route("/")
def index():
    
    return "hello, world:!"

@app.route("/snip", methods=["GET", "POST"])
def external():
    if request.method == "POST":
        print("Message received cowboy")

        # Convert array string into a python list
        array = request.form['arrayTest']
        lst = json.loads(array)
        
        # Simple check to ensure that the right data is entering the array
        for item in lst:
            print (item)

        with open('test.csv', mode='a') as test_file:
            test_writer = csv.writer(test_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            test_writer.writerow([lst[0], lst[1], lst[2]])

            

    return redirect("/")

# Proposed solution... populate array in front end and then send that array to the backend
