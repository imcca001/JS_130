class CircularBuffer {
  constructor(bufferSize) {
    this.size = bufferSize;
    this.elements = new Array(this.size).fill(null);
    this.emptySlot = 0;
    this.oldestSlot = 0;
  }

  isEmpty() {
    return this.elements.every(elem => elem === null);
  }

  isFull() {
    return this.elements.every(elem => elem !== null);
  }

  incrementEmptySlot() {
    if (this.emptySlot === this.size - 1) {
      this.emptySlot = 0;
    }
    else {
      this.emptySlot += 1;
    }
  }

  incrementOldestSlot() {
    if (this.oldestSlot === this.size - 1) {
      this.oldestSlot = 0;
    }
    else {
      this.oldestSlot += 1;
    }
  }

  clear() {
    this.elements.fill(null);
  }

  forceWrite(elem) {
    if (this.isFull()) {
      this.elements[this.oldestSlot] = elem;
      this.incrementOldestSlot();
    } 
    else {
      this.write(elem);
    }
  }

  write(elem) {
    if (this.isFull()) {
      throw new Error('Buffer is full');
    }
    if (elem === undefined || elem === null) {
      return;
    }
    this.elements[this.emptySlot] = elem;
    this.incrementEmptySlot();
  }

  read() {
    if (this.isEmpty()) {
      throw new Error("Buffer is empty");
    }
    let oldestValue = this.elements[this.oldestSlot];
    this.elements[this.oldestSlot] = null;
    this.incrementOldestSlot();
    return oldestValue;
  }
}

module.exports = CircularBuffer;