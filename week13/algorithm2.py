from random import (
    randrange, 
    seed,
)

class Animal:

    def __init__(self, legs):
        self.legs = legs

    def __repr__(self):
        return f"{self.legs} legged animal"
    
    def __le__(self, other):
        return self.legs <= other.legs
    def __ge__(self, other):
        return self.legs >= other.legs
    def __lt__(self, other):
        return self.legs < other.legs
    def __gt__(self, other):
        return self.legs > other.legs
    def __eq__(self, other):
        return self.legs == other.legs
    def __ne__(self, other):
        return self.legs != other.legs



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
    a = [Animal(randrange(10)) for x in range(10)]

    print(a)
    print(insertionsort(a))