class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(val);
        } else {
            this.head = new Node(val);
        }
    }

    prepend(val) {
        if (this.head) {
            let current = this.head;
            this.head = new Node(val);
            this.head.next = current;
        } else {
            this.head = new Node(val);
        }
    }

    size() {
        let size = 0;
        if (!this.head) return 0;
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
            size++;
        }
        return size;
    }

    returnHead() {
        return this.head;
    }

    returnTail() {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        return curr;
    }
    
    atIndex(index) {
        if (!this.head) return -1;
        let curr = this.head;
        while (index > 0 && curr.next != null) {
            curr = curr.next;
            index--;
        }
        if (index > 0) return console.log('Error')
        return curr.val;
    }

    pop() {
        if (!this.head) return console.log(-1);
        let curr = this.head;

        while (curr.next && curr.next.next) {
            curr = curr.next;
        }
        curr.next = null;
    }

    contains(value) {
        if (!this.head) return false;
        let curr = this.head;
        while (curr) {
            if (curr.val == value) {
                return true
            }
            curr = curr.next;
        }
        return false;
    }

    find(value) {
        if (!this.head) return false;
        let count = 0;
        let curr = this.head;
        while (curr) {
            if (curr.val == value) {
                return count;
            }
            curr = curr.next;
            count++;
        }
        return null;
    }

    toString() {
        if (!this.head) return -1;
        let curr = this.head;
        let str = '';
        while (curr) {
            str += `( ${curr.val}' ) -> `
            curr = curr.next;
        }
        str += 'null'
        return str;
    }

    insertAt(value, index) {
        if (!this.head) return -1;
        let curr = this.head;
        while (index > 1 && curr.next != null) {
            curr = curr.next;
            index--;
        }
        if (index > 1) {
            return console.log('Error: Wrong index.')
        } else {
            let curr2 = curr.next
            curr.next = new Node(value);
            curr.next.next = curr2;
        }
        return this.head;
    }

    removeAt(index) {
        if (!this.head) return -1;
        let curr = this.head;
        while (index > 1 && curr.next != null) {
            curr = curr.next;
            index--;
        }
        if (index > 1) {
            return console.log('Error: Wrong index.')
        } else {
            curr.next = curr.next.next
        }
        return this.head;
    } 
}

// Test cases :
// let linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.prepend(0);
// console.log("Linked List:", linkedList.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// console.log("Size of Linked List:", linkedList.size()); // Output: 4

// console.log("Index of 2:", linkedList.find(2)); // Output: 2

// console.log("Does the list contain 3?", linkedList.contains(3)); // Output: true

// linkedList.pop();
// console.log("Linked List after pop operation:", linkedList.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null

// console.log(linkedList.atIndex(3))
// linkedList.insertAt(3, 1)
// console.log(linkedList.toString());
// linkedList.removeAt(2)
// console.log(linkedList.toString());