import { Node } from './node-class.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  getSize() {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let size = 0;
    let current = this.head;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }

  getHead() {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let current = this.head;
    while (current !== null) {
      if (current.next === null) {
        return current;
      }
      current = current.next;
    }
  }

  atIndex(index) {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let current = this.head;
    let count = 1;

    while (count <= index) {
      count++;
      current = current.next;
    }

    return current;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.pop();
console.log(list.getTail());
