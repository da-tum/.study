"""
====================================================
BINARY SEARCH TREE (BST) — Complete Implementation
====================================================

BST PROPERTY:
  For every node:
    LEFT subtree values < node value
    RIGHT subtree values > node value

OPERATIONS:
  Insert    → O(log n) avg, O(n) worst
  Search    → O(log n) avg, O(n) worst
  Delete    → O(log n) avg, O(n) worst
  Traversal → O(n) always

KEY VIVA: Inorder traversal of BST = SORTED output!
"""


# ============================
# NODE CLASS
# ============================
class BSTNode:
    def __init__(self, data):
        self.data = data
        self.left = None    # left child (smaller values)
        self.right = None   # right child (larger values)


# ============================
# BST CLASS
# ============================
class BST:
    def __init__(self):
        self.root = None

    # --------------------------------------------------
    # INSERT — O(log n) average
    # --------------------------------------------------
    def insert(self, data):
        """Insert data maintaining BST property."""
        if self.root is None:
            self.root = BSTNode(data)
        else:
            self._insert_recursive(self.root, data)
        print(f"Inserted: {data}")

    def _insert_recursive(self, node, data):
        if data < node.data:            # go LEFT for smaller values
            if node.left is None:
                node.left = BSTNode(data)
            else:
                self._insert_recursive(node.left, data)
        elif data > node.data:          # go RIGHT for larger values
            if node.right is None:
                node.right = BSTNode(data)
            else:
                self._insert_recursive(node.right, data)
        else:
            print(f"{data} already exists in BST")

    # --------------------------------------------------
    # SEARCH — O(log n) average
    # --------------------------------------------------
    def search(self, data):
        """Search for data in BST."""
        result = self._search_recursive(self.root, data)
        if result:
            print(f"FOUND: {data}")
        else:
            print(f"NOT FOUND: {data}")
        return result

    def _search_recursive(self, node, data):
        if node is None:                # not found
            return False
        if node.data == data:           # found!
            return True
        elif data < node.data:          # search LEFT subtree
            return self._search_recursive(node.left, data)
        else:                           # search RIGHT subtree
            return self._search_recursive(node.right, data)

    # --------------------------------------------------
    # DELETE — O(log n) average
    # 3 Cases:
    #   1. Leaf node → just delete
    #   2. One child → replace with child
    #   3. Two children → replace with inorder successor
    # --------------------------------------------------
    def delete(self, data):
        """Delete node with given data from BST."""
        self.root = self._delete_recursive(self.root, data)
        print(f"Deleted: {data}")

    def _delete_recursive(self, node, data):
        if node is None:
            return node

        if data < node.data:
            node.left = self._delete_recursive(node.left, data)
        elif data > node.data:
            node.right = self._delete_recursive(node.right, data)
        else:
            # CASE 1: Leaf node (no children)
            if node.left is None and node.right is None:
                return None

            # CASE 2: One child
            elif node.left is None:
                return node.right
            elif node.right is None:
                return node.left

            # CASE 3: Two children
            # Find inorder successor (smallest in right subtree)
            successor = self._find_min(node.right)
            node.data = successor.data          # copy successor value
            node.right = self._delete_recursive(node.right, successor.data)  # delete successor

        return node

    def _find_min(self, node):
        """Find minimum node (leftmost node)."""
        while node.left:
            node = node.left
        return node

    def _find_max(self, node):
        """Find maximum node (rightmost node)."""
        while node.right:
            node = node.right
        return node

    # --------------------------------------------------
    # TRAVERSALS — O(n) all
    # --------------------------------------------------
    def inorder(self):
        """Left → Root → Right. Gives SORTED output for BST!"""
        result = []
        self._inorder_recursive(self.root, result)
        print(f"Inorder  (sorted): {result}")
        return result

    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)   # left
            result.append(node.data)                      # root
            self._inorder_recursive(node.right, result)  # right

    def preorder(self):
        """Root → Left → Right. Used for copying tree."""
        result = []
        self._preorder_recursive(self.root, result)
        print(f"Preorder  (copy):  {result}")
        return result

    def _preorder_recursive(self, node, result):
        if node:
            result.append(node.data)                       # root FIRST
            self._preorder_recursive(node.left, result)    # left
            self._preorder_recursive(node.right, result)   # right

    def postorder(self):
        """Left → Right → Root. Used for deletion."""
        result = []
        self._postorder_recursive(self.root, result)
        print(f"Postorder (delete):{result}")
        return result

    def _postorder_recursive(self, node, result):
        if node:
            self._postorder_recursive(node.left, result)   # left
            self._postorder_recursive(node.right, result)  # right
            result.append(node.data)                       # root LAST

    # --------------------------------------------------
    # LEVEL ORDER (BFS) — uses a Queue
    # --------------------------------------------------
    def level_order(self):
        """Level by level traversal using a Queue (BFS)."""
        if not self.root:
            return
        from collections import deque
        queue = deque([self.root])
        result = []
        while queue:
            node = queue.popleft()
            result.append(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        print(f"Level Order (BFS): {result}")
        return result

    # --------------------------------------------------
    # UTILITY: Height of tree
    # --------------------------------------------------
    def height(self):
        return self._height(self.root)

    def _height(self, node):
        if node is None:
            return 0
        return 1 + max(self._height(node.left), self._height(node.right))

    # --------------------------------------------------
    # UTILITY: Print tree visually
    # --------------------------------------------------
    def display(self):
        print("\nBST Structure:")
        self._print_tree(self.root, "", True)
        print()

    def _print_tree(self, node, indent, is_right):
        if node is not None:
            self._print_tree(node.right, indent + ("   " if is_right else "|  "), True)
            print(indent + ("+-- " if is_right else "+-- ") + str(node.data))
            self._print_tree(node.left, indent + ("   " if is_right else "|  "), False)


# =======================
# MAIN — Demo & Test
# =======================
if __name__ == "__main__":
    bst = BST()

    print("=" * 50)
    print("BST DEMO")
    print("=" * 50)

    # Insert elements
    print("\n--- Insertions ---")
    for val in [50, 30, 70, 20, 40, 60, 80, 35, 45]:
        bst.insert(val)

    """
    BST after insertions:
            50
           /  \
          30   70
         / \   / \
        20  40 60  80
           / \
          35  45
    """

    bst.display()
    print(f"Tree Height: {bst.height()}")

    # Traversals
    print("\n--- Traversals ---")
    bst.inorder()      # Should be sorted: 20,30,35,40,45,50,60,70,80
    bst.preorder()
    bst.postorder()
    bst.level_order()

    # Search
    print("\n--- Search ---")
    bst.search(40)     # Found
    bst.search(99)     # Not found

    # Delete
    print("\n--- Deletions ---")
    bst.delete(20)     # Delete leaf
    bst.inorder()

    bst.delete(30)     # Delete node with two children
    bst.inorder()

    bst.display()


"""
VIVA QUICK-FIRE:

Q: What is BST property?
A: Left child < parent < right child, for every node.

Q: Inorder traversal of BST gives?
A: Sorted (ascending) output — this is how BST sort works!

Q: Time complexity of BST operations?
A: Average O(log n), Worst O(n) when unbalanced (like a linked list).

Q: What is the inorder successor?
A: The smallest node in the right subtree — used when deleting a node with 2 children.

Q: Difference between BST and Binary Tree?
A: BST has the ordering property (left < root < right). Binary Tree has no such constraint.

Q: When does BST become O(n)?
A: When all elements inserted in sorted order → tree becomes a linked list.
   Solution: Use balanced trees (AVL, Red-Black).

Q: Three deletion cases in BST?
A: 1) Leaf: just delete. 2) One child: replace with child. 
   3) Two children: replace with inorder successor.

Q: What is the height of a balanced BST with n nodes?
A: O(log n)
"""
