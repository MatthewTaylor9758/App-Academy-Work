from flask import Flask, render_template
# from config import Config
import os

app = Flask(__name__)


class Config(object):
    GREETING = 'Salutations, superior students!'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'


app.config.from_object(Config)


@app.route('/')
def package():
  return '<h1>Package Tracker</h1>'


@app.route('/new_package', methods=['GET', 'POST'])
  def new_package():
    return render_template('shipping_request.html')
