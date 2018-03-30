class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    append(value) {
      let newNode = new Node (value, null)

      if(this.firstNode == null) {
        this.firstNode = newNode;
        this.lastNode = newNode;
      } else {
        this.lastNode.nextNode = newNode
        this.lastNode = this.lastNode.nextNode;
      }
    }

    //
    // appendOld(value) {
    //     let newNode = new Node(value, null)
    //
    //     if (this.firstNode == null) {
    //         this.firstNode = new Node(value, null);
    //     } else {
    //         let currentNode = this.firstNode;
    //         while(currentNode.nextNode !== null){
    //             currentNode = currentNode.nextNode;
    //         }
    //         currentNode.nextNode = newNode
    //     }
    // }

    get(index) {
        let count = 0;
        if (index == count) {
            return this.firstNode.value;
        } else {
            let currentNode = this.firstNode;
            while(index !== count) {
                currentNode = currentNode.nextNode;
                count += 1;
            }
            return currentNode.value
        }
    }

    remove(index) {
        let count = 0;

        if (index == count) {
            this.firstNode = this.firstNode.nextNode;
        } else {
            let currentNode = this.firstNode;
            let theNodeBefore;
            while(index !== count) {
                count += 1;
                theNodeBefore = currentNode
                currentNode = currentNode.nextNode;
            }
            theNodeBefore.nextNode = currentNode.nextNode;
        }
    }

    print() {
      console.log("NODES OF THIS LINKEDLIST:")
      let nodeToPrint = this.firstNode;
      while (nodeToPrint.nextNode != null) {
        console.log(nodeToPrint);
        nodeToPrint = nodeToPrint.nextNode;
      }
      console.log(nodeToPrint)
      console.log("------------------------------------------")
    }

    getTheIndex(value) {
      let index = 0;
      let currentNode = this.firstNode;
      if (value == currentNode.value) {
        return index
      } else {
        while (value !== currentNode.value) {
          currentNode = currentNode.nextNode;
          index += 1
        }
        return index
      }
    }
}


a = new LinkedList()
console.log("a = new LinkedList()")

let element;
for(let i = 0; i < 11; i++) {
  a.append(`${i}th element`);
}

a.print()

console.log(`METHODS OF THIS LINKEDLIST:

append()
remove()
get()
getTheIndex()
print()

------------------------------------------`)
