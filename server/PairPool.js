// here i implemet the pool for users from which the users are selected to chat in an random room ,  I implement this by using Queue Data structure 

// Implementing Queue datastructur using Array in javaScript

export class Queue {
    constructor() {
        this.q = [];
    }

    isEmpty() {
        return this.q.length === 0;
    }

    enqueue(x) {
        this.q.push(x);
    }

    dequeue() {
    return this.isEmpty() ? -1 : this.q.shift();
    }


    getFront() {
        return this.isEmpty() ? -1 : this.q[0];
    }

    display() {
        console.log(this.q.join(' '));
    }
    
    getLength() {
    return this.q.length;
    }

}
