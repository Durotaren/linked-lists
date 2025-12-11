# JavaScript Linked List

A simple implementation of a singly linked list in JavaScript using ES6 classes.  
This project includes node creation, list traversal, insertion, removal, searching, and string representation.

---

## Features

### Node Structure

Each node stores a value and a reference to the next node.

### Core Operations

- **append(value)** — adds a new node to the end of the list
- **prepend(value)** — inserts a new node at the beginning
- **pop()** — removes the last node
- **atIndex(index)** — returns the node at a given index
- **getSize()**, **getHead()**, **getTail()**

### Searching

- **contains(value)** — checks if a value exists in the list
- **find(value)** — returns the index of the value if found

### Insert & Remove by Index

- **insertAt(value, index)** — inserts a node at a specific index
- **removeAt(index)** — removes a node from a specific index

### String Representation

- **toString()** returns the list in the form:  
  `(value) -> (value) -> ... -> null`

---

## Notes

- Indexing is zero-based
- Methods include basic handling for empty lists and invalid indexes
