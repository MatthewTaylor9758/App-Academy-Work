import pytest
from app.roman_numerals import parse

def test_roman_numeral_parser():
  result = parse('IX')
  assert result == 9
