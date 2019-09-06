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

  dequeue() {
    if (!this.front) return null;
    else {
      const dq = this.front;
      this.front = this.front.next;
      this.front.prev = null;

      return dq;
    }
  }
}

module.exports = Queue;