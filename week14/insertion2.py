import random

def some_sort(a):
    
    if len(a) == 0:
        return []
    
    pivot = a.pop(len(a) // 2)
    lower = []
    higher = []

    for x in a:
        
        if x <= pivot:
            lower.append(x)
        else:
            higher.append(x)

    return some_sort(lower) + [pivot] + some_sort(higher)


if __name__ == "__main__":

    random.seed(42)

    a = [random.randrange(10) for x in range(10)]

    # print(a)
    some_sort(a)

    # sorted(a)
