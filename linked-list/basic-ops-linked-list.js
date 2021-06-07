// Create a node;
class Node {
    constructor(_data, _next = null){
        this.data = _data
        this.next = _next
    }
}

// Link list 
class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    // Inserting node at begining.
    add(new_data){

        let curr = this.head;
        let new_node = new Node(new_data);
        if(curr === null) this.head = new_node;
        else 
            {
                while(curr.next){
                    curr = curr.next
                }
                curr.next = new_node
            }
        this.size++;
    }

    // Inserting node at end.
    insertAtEnd(data) {

        let new_node = new Node(data);
        if(head == null){
            head = new_node
        }

        let current = head;

        while(current.next){
            current = current.next;
        }
        current.next = new_node;
    }

    // Inserting node at particular index.
    insertAtIndex(data,index){
        if(index < 0 || this.size <= index) {
            console.log('Invaid input' + index);
            return;
        }

        let new_node = new Node(data);

        if(index == 0) {
            new_node.next = this.head;
            this.head = new_node;
        } else {
            let curr = this.head, prev, i = 0;
            while(i < index){
                i++;
                prev = curr;
                curr  = curr.next;
            }
            new_node.next = curr;
            prev.next = new_node;
        }
        this.size++;
    }

    // Remove a node.
    removeNode(element) {
        let curr = this.head, prev = null;
        while(curr != null) {
            if(element === curr.data) {
                if(prev === null) {
                    this.head = curr.next
                } else {
                    prev.next = curr.next;
                }
            this.size--;
            return; 
            } else {
                prev = curr;
                curr = curr.next;
            }
        }
        console.log("Invalid input " + element)
    }

    // Remove a node from an index.
    removeAtIndex(pos) {
        if(pos < 0 || pos >= this.size ){
            console.log('Invlaid input ' + pos);
            return;
        }

        let curr = this.head;
        if(pos == 0) {
            this.head = curr.next;
        } else {
            let prev, i = 0;
            while(i < pos){
                i++;
                prev = curr;
                curr = curr.next
            }
            prev.next = curr.next;
        }
        this.size--;
    }

    // Get size of a linked list.
    getSize() {
        console.log(this.size);
    }

    // Get index of an element
    indexOf(data){
        let curr = this.head, i = 0;
        while(i < this.size) {
            if(curr.data === data) {
                console.log(i)
                return;
            }
            curr = curr.next;
            i++;
        }
        console.log('Not found')
    }

    print() {
        let curr = this.head,i = 0;
        if(i < this.size) {
            console.log(curr);
            curr = curr.next;
            i++;
        }
    }
}

var _linkedList = new LinkedList();

_linkedList.add(10);
_linkedList.add(20);
_linkedList.add(30);
_linkedList.add(40);
_linkedList.add(50);
_linkedList.add(60);

_linkedList.insertAtIndex(15,1);
_linkedList.removeNode(20);
_linkedList.removeAtIndex(3);

_linkedList.getSize();
_linkedList.indexOf(30);
_linkedList.print();