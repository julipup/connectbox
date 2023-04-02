from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('generated/index.html', test_variable="Test name", navigation=[{ "caption": "Test caption" }, { "caption": "Test caption #2" }])