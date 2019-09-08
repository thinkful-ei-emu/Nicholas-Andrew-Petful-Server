/**
 * basic node class for use in linked list
 */
class _Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * a basic queue class that uses a linked list
 */
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  /**
   * returns the front value of the queue
   */
  peek() {
    return this.front.value;
  }

  /**
   * adds the input value to the end of the queue
   * @param {*} value 
   */
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

  /**
   * returns an array of the items of the queue
   */
  toArray() {
    let node = this.front;
    const arr = [];

    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }

  /**
   * removes and returns the front element of the queue
   */
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