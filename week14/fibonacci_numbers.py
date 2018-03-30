cache = {
    0: 0,
    1: 1,
}

def fibonacci(n):
    if n in cache:
        return cache[n]     
    else:
        cache[n] = fibonacci(n-2) + fibonacci(n-1)
        return cache[n]

if __name__ == "__main__":
    print([fibonacci(x) for x in range(100)])