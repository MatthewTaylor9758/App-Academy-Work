from flask import  (Flask, Blueprint, render_template)

bp = Blueprint('main', __name__, "/")

@bp.route('/')
def main():
  return render_template('main.html')
