import random

a = [0, 3, 5, 2, 3, 5, 7, 8, 1, 0]

def some_sort(a):
    
    if len(a) == 0:
        return []
    
    pivot = a.pop(len(a) // 2)
    # pivot_index = len(a) // 2
    # pivot = a[pivot_index]
    # rest = a[:pivot_index] + a[pivot_index + 1:]
    lower = []
    higher = []

    for x in a:
        
        if x <= pivot:
            lower.append(x)
        else:
            higher.append(x)

    return some_sort(lower) + [pivot] + some_sort(higher)

print(some_sort(a))
