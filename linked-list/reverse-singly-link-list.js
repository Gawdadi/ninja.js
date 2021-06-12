const arr = [1,2,3,4,5,6,7];

class Node { 
    constructor(_val, _next) {
        this.val = _val;
        this.next = _next;
    }
}

class SinglyLinkList{
    constructor() {
        this.head = null;
    }
}

// Add Nodes.
SinglyLinkList.prototype.add = function(data) {
    const new_node = new Node(data)
    if(!this.head) this.head = new_node
    else 
        {
            let curr = this.head
            while(curr.next) curr = curr.next;
            curr.next = new_node;
        }
}

// Print nodes.
SinglyLinkList.prototype.print = function() {
            let curr = this.head, n = 0;
            while(curr) {
                console.log('Node at ' + n + ' is ' + curr.val);
                n++;
                curr = curr.next
            }
}

// Reverse the link list
SinglyLinkList.prototype.reverse = function() {
    let curr = this.head; temp_node = null;
    if(!curr || !curr.next) {
        this.head = [ ];
    }
    while(curr) {
        const store_node = new Node(curr.data, curr.next);
        curr.next = temp_node;
        temp_node = curr;
        curr = store_node.next;
    }

    this.head = temp_node;
}


const _sll = new SinglyLinkList();

_sll.add(1);
_sll.add(2);
_sll.add(3);
_sll.add(4);
_sll.add(5);
_sll.add(6);
_sll.add(1);
_sll.print();
_sll.reverse();

console.log('--------------Reversed Node-------------');

_sll.print();