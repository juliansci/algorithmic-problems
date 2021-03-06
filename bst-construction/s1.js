class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Time complexity: O(log(n)) AVG - Worst: O(n) -> Only left nodes for example.
  // Space complexity: O(log(n)) - Worst: O(n) -> Only left nodes for example.
  insert(value) {
    if (value >= this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    } else {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    }
    return this;
  }

  // Time complexity: O(log(n)) - Worst: O(n) -> Only left nodes for example.
  // Space complexity: O(log(n)) - Worst: O(n) -> Only left nodes for example.
  contains(value) {
    if (this.value === value) return true;
    if (this.right && value >= this.value) {
      return this.right.contains(value);
    }
    if (this.left && value < this.value) {
      return this.left.contains(value);
    }
    return false;
  }

  // Time complexity: O(log(n)) - Worst: O(n) -> Only left nodes for example.
  // Space complexity: O(log(n)) - Worst: O(n) -> Only left nodes for example.
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this);
      }
    } else {
      // If the node we want to remove has both childs.
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (!parent) {
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right;
      }
    }
  }

  getMinValue() {
    if (!this.left) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

/**
 * We could solve it with an average constant space complexity iterating throw the nodes and not
 * using recursion
 */
