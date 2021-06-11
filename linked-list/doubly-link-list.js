// Create a node.
class Node {
     constructor(_data, _prev = null, _next = null) {
         this.data = _data;
         this.prev = _prev
         this.next = _next
     }
 }

 class DoublyLinkedList {
     constructor () {
         this.head = null;
         this.size = 0;
     }
 }

// Add node to the list. 
DoublyLinkedList.prototype.add = function (data) {
    let curr = this.head
    var new_node = new Node(data);

    if (!curr){
       this.head = new_node;
    } else {
       while(curr.next){
           curr = curr.next;
       }
       curr.next = new_node;
       new_node.prev = curr;
    }
    this.size++;
} 
    
// Insert node at a specific position.
DoublyLinkedList.prototype.insertAt = function (data,pos) {
    if(pos > this.size || pos < 0) {
        console.log('Invalid input ' + pos);
        return;
    }
    var new_node = new Node(data);
    let curr = this.head,prev, i = 0;
    while(i < pos) {
        prev = curr
        curr = curr.next;
        i++;
    }
    new_node.prev = prev;
    new_node.next = curr;
    curr.prev = new_node;
    prev.next = new_node;
    this.size++
};


// Remove a specific node.
DoublyLinkedList.prototype.removeByVal = function (val) {
    let curr = this.head, prev = null, ahead_node, flag;
    while(curr) {
        if(val === curr.data) {
            if(prev) {
                if(curr.next) {
                    ahead_node = curr.next;
                    ahead_node.prev = curr.prev;
                    prev.next = curr.next;
                } else {
                        prev.next = null;
                        }
            } else {
                    ahead_node = curr.next;
                    ahead_node.prev = null;
                    this.head = ahead_node;
                    }
                curr = curr.next;
                this.size--;
            } else {
                prev = curr;
                curr = curr.next;
        }
    }
    if(!flag) {
        console.log('Invalid input ' + val)
            }
};

// Remove node at a specific position. 
DoublyLinkedList.prototype.removeByIndex = function (pos) {
    if(pos > this.size || pos < 0) {
        console.log('Invalid input ' + pos);
        return;
    }

    let curr = this.head, prev, i = 0;
    if(pos === 0) {
        this.head = curr.next;
    } else {
        while(i < pos) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        prev.next = curr.next;
        if(curr.next) {
            curr.next.prev = prev;
        }
    }
    this.size--;
}; 

// Get size of a linked list.
DoublyLinkedList.prototype.getSize = function () {
    console.log(this.size);
};
   

// Print list.
DoublyLinkedList.prototype.print = function () {
    let curr = this.head, n = 0;
    while(curr){
        console.log("Node at " + n + ' is ' + curr.data);
        curr = curr.next;
        n++;
    }
};

var _dll = new DoublyLinkedList();

_dll.add(60);
_dll.add(70);
_dll.add(80);
_dll.add(60);
_dll.add(100);
_dll.add(60);

_dll.insertAt(65,1)
_dll.removeByIndex(3);

_dll.removeByVal(60);
_dll.print();
_dll.getSize();