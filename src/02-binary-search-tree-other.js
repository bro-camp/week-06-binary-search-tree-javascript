class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

function insert(root, key) {
  const node = new Node(key);
  if (!root) {
    root = node; // eslint-disable-line
    return;
  }
  let prev = null;
  let temp = root;
  while (temp) {
    if (temp.val > key) {
      prev = temp;
      temp = temp.left;
    } else if (temp.val < key) {
      prev = temp;
      temp = temp.right;
    }
  }
  if (prev.val > key) prev.left = node;
  else prev.right = node;
}

function inorder(root) {
  let temp = root;
  const st = [];
  while (temp != null || st.length !== 0) {
    if (temp != null) {
      st.unshift(temp);
      temp = temp.left;
    } else {
      temp = st[0]; // eslint-disable-line
      st.shift();
      if (temp.val) {
        console.log(temp.val);
      }
      temp = temp.right;
    }
  }
}

const root = new Node(null);
insert(root, 30);
insert(root, 50);
insert(root, 15);
insert(root, 20);
insert(root, 10);
insert(root, 40);
insert(root, 60);

inorder(root);
