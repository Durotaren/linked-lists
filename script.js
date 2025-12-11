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
    let size = 0;
    let current = this.head;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    while (current !== null) {
      if (current.next === null) {
        return current;
      }
      current = current.next;
    }
  }

  atIndex(index) {
    let current = this.head;
    let count = 1;
    while (count <= index) {
      count++;
      current = current.next;
    }
    return current;
  }
}
