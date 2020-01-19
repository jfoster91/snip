from flask import Flask, redirect, render_template, request, send_from_directory
import os.path 
from os import path
import csv
import json
import wget
import uuid


app = Flask(__name__)

fileName = "new.csv"

@app.route("/")
def index():
    
    return "Snip running"

@app.route("/start")
def start():

    global fileName 
    fileName = str(uuid.uuid4()) + ".csv"

    with open(fileName, mode='w') as test_file:
            test_writer = csv.writer(test_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            test_writer.writerow(["Company Name", "First Name", "Surname"])

    return redirect("/")

@app.route("/snip", methods=["GET", "POST"])
def snip():
    if request.method == "POST":
        print("Message received cowboy")

        # Convert array string into a python list
        array = request.form['arrayTest']
        lst = json.loads(array)
        
        # Simple check to ensure that the right data is entering the array
        for item in lst:
            print (item)

        with open(fileName, mode='a') as test_file:
            test_writer = csv.writer(test_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            test_writer.writerow([lst[0], lst[1], lst[2]])

        test_file.close()

    return redirect("/")

@app.route('/download', methods=["GET"]) 
def download():
    print("download request")

    return send_from_directory('/Users/jonathanfoster/Google Drive/Life/Learning/Other Code Projects/servers/flask-server', filename=fileName, 
        as_attachment=True, cache_timeout=-1)


# Issue -> the test file keeps getting downloaded even though i am generating new files
# Proposed solution... populate array in front end and then send that array to the backend
