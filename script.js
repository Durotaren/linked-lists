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

  contains(value) {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.next;
    }

    return 'The value is not present in the Linked List.';
  }

  toString() {
    if (this.head === null) {
      return 'Linked List is empty.';
    }

    let current = this.head;
    let total = '';

    while (current !== null) {
      if (current.next === null) {
        total += `(${current.value})`;
        return total;
      }
      total += `(${current.value}) -> `;
      current = current.next;
    }
    return total;
  }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
