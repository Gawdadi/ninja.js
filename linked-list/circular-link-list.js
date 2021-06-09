// Create a node class

class Node{
    constructor(_data, _next = null){
            this.data = _data;
            this.next = _next;
    }
}

class CircularLinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert an element

    add(data) {
        let new_node = new Node(data)

        // If list is empty.
        if(this.head == null) {
            this.head = new_node;
            new_node.next = new_node;
        } else 
            {
                let curr = this.head;
                while(curr.next != this.head) {
                    curr = curr.next;
                }
                curr.next = new_node;
                new_node.next = this.head;
            }
            this.size++;
    }

    // Print list
    print() {

        let curr = this.head,n = 1;

        do{
            console.log('Node at ' + n + ' is ' + curr.data);
            curr = curr.next;
            n++;
        }
        while(curr !== this.head);
    }

    getSize() {
       let curr = this.head;
       let n = 1;
       while(curr.next !== this.head) {
        curr = curr.next;
        n++;
        }
        console.log('Size is ' + n);
    }
}

const _cll = new CircularLinkList();

_cll.add(60);
_cll.add(50);
_cll.add(70);
_cll.add(80);
_cll.add(90);
_cll.add(100);
_cll.add(110);
_cll.add(120);
_cll.print();
_cll.getSize();


