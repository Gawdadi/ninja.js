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
        let new_node = new Node(data);

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

    insertAt(data,pos) {
    
        if(pos > this.size && pos < 0) {
            console.log('Input is invalid : ' + pos);
            return;
        } else 
            {
                let new_node = new Node(data);
                let curr = this.head, prev = null, i = 0;

                // INNSERT NODE AT FIRST POSITION.
                if(pos == 0) {
                    this.head = new_node;
                    new_node.next = curr;
                    curr.next = new_node;
                } else {
                    while(i < pos) {
                        prev = curr;
                        curr = curr.next;
                        i++;
                        }
                    prev.next = new_node;
                    new_node.next = curr;
            }
            this.size++
        };
    }

    removeAt(pos) {

        if(pos > this.size && pos < 0) {
            console.log('Input is invalid : ' + pos);
            return;
        } else 
            {
                let curr = this.head;

                 // When pos is equal to zero.
                if(pos == 0) {
                    // When only one node is present.
                    if(this.head == curr.next) {
                        this.head = null;
                    }
                     // when more than one is present.
                     // CHANGE LAST NODE NEXT TO SECOND NODE.
                     // CHANGE HEAD TO SECOND NODE.
                    else {
                        while(curr.next != this.head) {
                            curr = curr.next;
                        }
                        curr.next = this.head.next;
                        this.head = curr.next;
                    }
                }
                  // When pos is greater than zero.
                else {
                    let i = 0; prev = null;
                    while(i < pos) {
                        prev = curr;
                        curr = curr.next;
                        i++;
                    }
                    prev.next = curr.next;
                }
            this.size--;
        };
    }

    // Print list
    print() {
        let curr = this.head, n = 0;
        if(this.size) {
            do {
                console.log('Node at ' + n + ' is ' + curr.data);
                curr = curr.next;
                n++;
            }
            while(curr !== this.head);
        }
    }

    // Print list size
    getSize() {
       let curr = this.head;
       let n = 0;
       if(curr){
        while(curr && curr.next !== this.head ) {
            curr = curr.next;
            n++;
           }
           n++;
       } else n = 0;
       console.log(n);
    }
}

const _cll = new CircularLinkList();

_cll.add(60);
_cll.add(50);
_cll.add(70);
_cll.add(80);
// _cll.add(90);
// _cll.add(90);
// _cll.add(90);
// _cll.add(100);
// _cll.add(110);
// _cll.add(120);
_cll.insertAt(1290,4);
_cll.removeAt(0);
_cll.print();
_cll.getSize();


