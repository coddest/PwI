import json
from flask import Flask, render_template, Response, request

app = Flask(__name__)

@app.route('/',methods = ['GET'])
def index():
    return render_template('index.html')

@app.route('/calculate',methods = ['POST'])
def calculate():
    dane = request.get_json()
    liczba1 = dane['arg1']
    liczba2 = dane['arg2']
    opperator = dane['opperator']

    dzialanie = liczba1+opperator+liczba2

    wynik = eval(dzialanie)
    print(wynik)
    return Response(json.dumps({'wynik': wynik}),mimetype='application/json')

if __name__ == '__main__':
    app.run()