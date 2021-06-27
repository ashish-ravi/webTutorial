class Queue
{
    constructor()
    {
        this.items = [];
    }
    enqueue(x)
    {   
        this.items.push(x);
    }

    dequeue()
    {
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    dispQueue()
    {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    chkLen()
    {
        return this.items.length;
    }
}

var queue = new Queue();

console.log(queue.dequeue());
  
queue.enqueue(60);
queue.enqueue(3);
queue.enqueue(45);
queue.enqueue(10);
queue.enqueue(23);
queue.enqueue(40);

console.log(`Inserted 6 elements!`)
console.log(`Length of queue is ${queue.chkLen()}`)

console.log(queue.dispQueue());

console.log(`Dequeued element: ${queue.dequeue()} `);
  
console.log(queue.dispQueue())
