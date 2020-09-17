from flask_wtf import FlaskForm
from map.map import map as map_data
from wtforms import (
  BooleanField, DateField, StringField, SubmitField, SelectField
)
from wtforms.validators import DataRequired, ValidationError


validator = [DataRequired()]

cities = [(key, key) for key in list(map_data)]


class ShippingForm(FlaskForm):
    sender_name = StringField('Name', validators=validator)
    recipient_name = StringField('Recipient Name', validators=validator)
    origin = SelectField('Origin', choices=cities, validators=validator)
    destination = SelectField('Destination', choices=cities, validators=validator)
    express_shipping = BooleanField('Express Shipping?')
    submit = SubmitField('Submit')
