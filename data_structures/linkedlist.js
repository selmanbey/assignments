class IndexError extends Error {
    constructor (msg, fileName, lineNumber) {
        super(msg, fileName, lineNumber);
    }
}

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

    _getNode(index) {
        try {
            let count = 0;
            if (index == count) {
                return this.firstNode;
            } else {
                let currentNode = this.firstNode;
                while(index !== count) {
                    currentNode = currentNode.nextNode;
                    count += 1;
                }
                return currentNode
            }
        } catch (err) {
            throw new IndexError("index exceeds length.");
        }
    }

    get(index) {
        return this._getNode(index).value;
    }

    remove(index) {
        if (index === 0) {
            let r = this.firstNode.value;
            this.firstNode = this.firstNode.nextNode;

            return r;
        }

        let theNodeBefore = this._getNode(index - 1);
        let currentNode = theNodeBefore.nextNode;
        theNodeBefore.nextNode = currentNode.nextNode;

        return currentNode.value;
    }

    toString() {
        var r = "NODES OF THIS LINKEDLIST: \n";

        let nodeToPrint = this.firstNode;
        while (nodeToPrint.nextNode != null) {
            r += nodeToPrint.value;
            nodeToPrint = nodeToPrint.nextNode;
        }
        r += "------------------------------------------";

        return r;
    }

    indexOf(value) {
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


// a = new LinkedList()
// console.log("a = new LinkedList()")

// let element;
// for(let i = 0; i < 11; i++) {
//   a.append(`${i}th element`);
// }

// a.print()

// console.log(`METHODS OF THIS LINKEDLIST:

// append()
// remove()
// get()
// getTheIndex()
// print()

// ------------------------------------------`)


module.exports = {
    LinkedList,
    IndexError
}