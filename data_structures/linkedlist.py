class Node:
    def __init__(self, data, next_node):
        self.data = data
        self.next_node = next_node

class LinkedList:
    def __init__(self):
        self.first_node = None

    def append(self, data):
        new_node = Node(data, None)

        if self.first_node is None:
            self.first_node = new_node
        else:
            current_node = self.first_node
            while current_node.next_node is not None:
                current_node = current_node.next_node

            current_node.next_node = new_node

    
    def get(self, index):
        count = 0
        current_node = self.first_node
        while current_node.next_node is not None:
            if index == count:
                break
            else:
                count += 1
                current_node = current_node.next_node
        
        return current_node.data

    def delete(self, index):
        pass



if __name__ == "__main__":

    a = LinkedList()
    a.append("osman")
    a.append("kursat")
    a.append("ayse")

    print(a.get(1))
    print(a.get(2))
    print(a.get(0))


    # Append'i loop'suz calistirmanin bir yontemi var mi? (hint: last_node)
    # Implement delete function 
    # Write with JavaScript