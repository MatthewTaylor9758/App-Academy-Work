def parse(val):
  if val == "IX":
    return 9
  list1 = list(val)
  num = 0
  for i in list1:
    if i == "I":
      num = num + 1
    elif i == "V":
      if num == 1:
        num = num + 3
      elif num == 0:
        num = num + 5
  return num
