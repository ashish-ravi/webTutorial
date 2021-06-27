class Node {
	
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	
	add(element) {
		
		var node = new Node(element);

		
		var current;

		
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}

	
	insertPos(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	
	delPos(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			if (index === 0) {
				this.head = curr.next;
			} else {
				
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				prev.next = curr.next;
			}
			this.size--;

			return curr.element;
		}
	}

	


	isEmpty() {
		return this.size == 0;
	}

	
	sizeOfList() {
		return this.size;
	}


	
	disp() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}


var ll = new LinkedList();


console.log(`Check if the list is empty --> ${ll.isEmpty()}`);





console.log("Adding 5 elements")
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

console.log(`Size of list is --> ${ll.sizeOfList()} `);



console.log(`List is --> `);
ll.disp()





console.log("Inserting 80 at index 3")
ll.insertPos(80, 3);

console.log(`List is --> `);
ll.disp()

console.log("Removing element at index 2")

console.log(ll.delPos(2));


console.log(`List is --> `);
ll.disp()


