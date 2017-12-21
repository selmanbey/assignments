def caller(a):
  def wrap():
    print('Fonksiyon cagriliyor')
    a()
  
  return wrap

@caller
def ahmet():
  print('Benim adim ahmet')

def mehmet():
  print('Huloooo')


if __name__ == '__main__':
  ahmet()

  # Functions are first class objects