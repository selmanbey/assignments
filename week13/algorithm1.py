from random import (
    randrange, 
    seed,
)

def insertionsort(unsorted):

    if len(unsorted) == 0:
        return []
    
    pivot = unsorted[0]
    rest = unsorted[1:]

    left = list()
    right = list()

    for x in rest:
        if x <= pivot:
            left.append(x)
        else:
            right.append(x)

    return insertionsort(left) + [pivot] + insertionsort(right)


if __name__ == "__main__":
    seed(42)
    a = [randrange(10) for x in range(10)]

    print(a)
    print(insertionsort(a))