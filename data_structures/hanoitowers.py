if __name__ == "__main__":
    class Node:
        def __init__(self, data, next_node, previous_node):
            self.data = data
            self.next_node = None
            self.previous_node = None

    class Pole:
        def __init__(self):
            self.head = None
            self.tail = None
            self.length = 0

        def push(self, data):
            node = Node(data, None, None)
            if self.head is None:
                self.head = node
                self.tail = node
            else:
                current_node = self.head
                while current_node.next_node is not None:
                    current_node = current_node.next_node

                # Hanoi Towers rule:
                if data > current_node.data:
                    print(current_node.data)
                    raise ValueError("Against the rule")
                current_node.next_node = node
                current_node.next_node.previous_node = current_node
                self.tail = node
            self.length += 1

            # print("push report:")
            # print("self head:", self.head.data)
            # print("self tail:", self.tail.data)

        def pop(self):
            if self.head is None:
                raise ValueError("This Pole is empty")
            self.length -= 1

            data = self.tail.data
            if self.tail.previous_node is not None:
                self.tail = self.tail.previous_node
                # print("pop report:")
                # print("self head:", self.head.data)
                # print("self tail:", self.tail.data)
                return data
            else:
                self.head = None
                self.tail = None
                return data

# HANOI TOWERS SETTINGS

    pole1 = Pole()
    pole2 = Pole()
    pole3 = Pole()

    for x in reversed(range(1, 65)):
        pole1.push(x)

# HANOI TOWERS SOLUTION







# EXERCISES JUST TO FIND A PATTERN
# first move
popped_node = pole1.pop()
print(popped_node)
pole2.push(popped_node)

# second move
popped_node = pole1.pop()
print(popped_node)
pole3.push(popped_node)

# third move
popped_node = pole2.pop()
print(popped_node)
pole3.push(popped_node)

# fourth move == first move
popped_node = pole1.pop()
print(popped_node)
pole2.push(popped_node)

# fifth move
popped_node = pole3.pop()
print(popped_node)
pole1.push(popped_node)

popped_node = pole3.pop()
print(popped_node)
pole2.push(popped_node)

popped_node = pole1.pop()
print(popped_node)
pole2.push(popped_node)

# sixth move == first move
popped_node = pole1.pop()
print(popped_node)
pole2.push(popped_node)



### TEST RESULTS
print("POLE 1")
if pole1.length > 0:
    print("self head:", pole1.head.data)
    print("self tail:", pole1.tail.data)
    print("self length", pole1.length)
else:
    print("this pole is empty")

print("POLE 2")
if pole2.length > 0:
    print("self head:", pole2.head.data)
    print("self tail:", pole2.tail.data)
    print("self length", pole2.length)
else:
    print("this pole is empty")

### TEST RESULTS
print("POLE 3")
if pole3.length > 0:
    print("self head:", pole3.head.data)
    print("self tail:", pole3.tail.data)
    print("self length", pole3.length)
else:
    print("this pole is empty")
