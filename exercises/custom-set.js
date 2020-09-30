class CustomSet {
  constructor(initial){
    this.set = initial || [];
  }
  toBe() {

  }

  empty() {
    return this.set.length === 0;
  }

  contains(num) {
    return this.set.includes(num);
  }

  subset(arr) {
    return this.set.every(num => arr.set.includes(num));
  }

  disjoint(arr) {
    return !this.set.some(item => arr.set.includes(item));
  }

  eql(arr) {
    if (this.set.length === arr.set.length) {
      return this.set.every(item => arr.set.includes(item));
    }

    return false;
  }

  add(num) {
    if (!this.contains(num)) {
      this.set.push(num);
    }
    return this;  // Why do I have to return this 
  }               // instead of just pushing num?

  intersection(arr) {
    let matches = this.set.filter(item => arr.set.includes(item));
    return new CustomSet(matches);
  }

  difference(arr) {
    let uniques = this.set.filter(item => !arr.set.includes(item));
    return new CustomSet(uniques);
  }

  union(arr) {
    let unionSet = new CustomSet(this.set);
    arr.set.forEach(elem => unionSet.add(elem));
    return unionSet;
  }
}

module.exports = CustomSet;