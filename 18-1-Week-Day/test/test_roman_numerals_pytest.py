from pytest import mark
from app.roman_numerals import parse
@mark.parametrize("s,expected", [("IX", 9), ("X", 10)])
def test_roman_numeral_parser(s, expected):
  result = parse(s)
  assert result == expected

# from pytest import mark

# @mark.parametrize("s,expected", [("ABCD", "DBCA"), ("ABC", "CBA"), ("", "")])
# def test_reverso(s, expected):
#     result = reverso(s)

#     assert result == expected
