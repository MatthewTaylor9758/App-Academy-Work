from flask_wtf import FlaskForm
from ..map.map import map
from wtforms import (
  BooleanField, DateField, StringField, SubmitField, SelectField
)

validator = [DataRequired()]


class ShippingForm(FlaskForm):
  sender_name = StringField('Name', validator)
  recipient_name = StringField('Recipient Name', validator)
  origin = SelectField('Origin', list(map), validator)
  destination = SelectField('Destination', list(map), validator)
  express_shipping = BooleanField('')
