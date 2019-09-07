class _Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  peek() {
    return this.front.value;
  }

  enqueue(value) {
    if (!this.front) {
      this.front = new _Node(value);
      this.back = this.front;
    }
    else {
      this.back.next = new _Node(value, this.back);
      this.back = this.back.next;
    }
  }

  toArray() {
    let node = this.front;
    const arr = [];

    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }

  dequeue() {
    if (!this.front) return null;
    else {
      const dq = this.front;
      this.front = this.front.next;
      this.front.prev = null;

      return dq.value;
    }
  }
}

module.exports = Queue;