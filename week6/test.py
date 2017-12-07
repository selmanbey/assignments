def a(x=1, y=2, z=3):
  return 1, 3, 5, 6

def c(*args, **kwargs):
  print(*args)
  print(kwargs)

def b(*y):
  pass
  pass
  c(*y, a=1, b=3)

if __name__ == '__main__':
  x, *y = a()

  b(x, 2, 3)