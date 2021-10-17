// prints out the data in the node from lowest to highest
function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left);
  };
  console.log(currentNode.data)
  if(currentNode.right) {
    inOrder(currentNode.right);
  };
}

// add the presented node if the data does not already exist
// add new elements on a multilevel tree
function findOrAdd(currentNode, newNode) {
  // return true and not modify the tree if the element exists
  if(currentNode.data == newNode.data) {
    return true;
  };
  if(newNode.data < currentNode.data) {
    if(currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return currentNode.left = newNode;
    };
  };
  if(newNode.data > currentNode.data) {
    if(currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return currentNode.right = newNode;
    };
  };
}

// return the maximum element in a tree
function max(currentNode) {
  if(currentNode.right) {
    return max(currentNode.right);
  } else {
    return currentNode;
  };
}

// return the minimum element in a tree
function min(currentNode) {
  if(currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode;
  };
}
