import dis

def add():
    a = 1
    b = 2
    return a + b

def add2():
    return 1 + 2

if __name__ == '__main__':
    dis.dis(add2)