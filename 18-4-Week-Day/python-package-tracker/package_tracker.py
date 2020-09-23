from flask import Flask, render_template, redirect
# from config import Config
from app.shipping_form import ShippingForm
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.models import db
from app.models import Package, db
import os


app = Flask(__name__)


class Config(object):
    GREETING = 'Salutations, superior students!'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")


app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)


@app.route('/')
def root_endpoint():
    packages = Package.query.all()
    Package.advance_all_locations()
    return render_template('package_status.html', packages=packages)


@app.route('/new_package', methods=['GET', 'POST'])
def new_package():
    form = ShippingForm()
    if form.validate_on_submit():
        data = form.data
        new_package = Package(sender=data["sender_name"],
                              recipient=data["recipient_name"],
                              origin=data["origin"],
                              destination=data["destination"],
                              location=data["origin"])
        db.session.add(new_package)
        db.session.commit()
        return redirect('/')
    return render_template('shipping_request.html', form=form)
