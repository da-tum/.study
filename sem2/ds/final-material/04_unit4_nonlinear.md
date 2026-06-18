# Unit 4 — Non-Linear Data Structures

## Trees

**What is a Tree?** A hierarchical data structure consisting of nodes connected by edges. It represents a parent-child relationship.

**Terminology:**
- **Root:** The topmost node.
- **Child / Parent:** Standard hierarchy.
- **Leaf Node:** A node with NO children.
- **Internal Node:** A node with at least one child.
- **Height of Tree:** Longest path from root to a leaf.
- **Depth of Node:** Path from root to that node.

### Binary Tree
A tree where each node has AT MOST 2 children (Left and Right).

### Binary Search Tree (BST) ⭐ EXAM PRIORITY
A Binary Tree with a strict rule:
1. All nodes in LEFT subtree are **<** (smaller than) the root.
2. All nodes in RIGHT subtree are **>** (greater than) the root.

**Why use BST?** It allows for extremely fast searching. Each comparison cuts the search space in half.
- Average Search Time: `O(log n)`
- Worst Case (Unbalanced like a linked list): `O(n)`

#### Tree Traversals (Printing the tree)
Traversing means visiting every node exactly once.

1. **Pre-order (Root, Left, Right):**
   - Used to create a copy of the tree.
   - Example: 5, 3, 2, 4, 7, 6, 8

2. **In-order (Left, Root, Right):** ⭐
   - **CRITICAL:** Inorder traversal of a BST always prints elements in **SORTED (ascending)** order!
   - Example: 2, 3, 4, 5, 6, 7, 8

3. **Post-order (Left, Right, Root):**
   - Used to delete the tree (delete children before parent).
   - Example: 2, 4, 3, 6, 8, 7, 5

---

## Graphs

**What is a Graph?** A collection of Vertices (Nodes) and Edges (connections between them). Trees are a special type of graph (a graph with no cycles).

**Types:**
- **Directed (Digraph):** Edges have direction (A → B). Example: Twitter followers.
- **Undirected:** Edges have no direction (A — B). Example: Facebook friends.
- **Weighted:** Edges have weights/costs. Example: Distance between cities.
- **Cyclic / Acyclic:** Contains cycles (loops) or not.

**Representations:**
1. **Adjacency Matrix:** 2D array. `matrix[i][j] = 1` if edge exists.
   - Space: `O(V²)`
   - Best for: Dense graphs (many edges).
2. **Adjacency List:** Array of lists. `list[i]` contains all neighbors of vertex `i`.
   - Space: `O(V + E)`
   - Best for: Sparse graphs (few edges). Most commonly used!

### Graph Traversals

#### 1. Breadth-First Search (BFS)
- Explores level by level (neighbors first).
- Uses a **Queue** data structure.
- Used for finding the shortest path in unweighted graphs.

#### 2. Depth-First Search (DFS)
- Explores as deep as possible before backtracking.
- Uses a **Stack** (or recursion).
- Used for finding cycles, topological sorting, solving mazes.

---

## Hashing

**What is Hashing?** A technique to map a large range of key values to a smaller range of array indices using a **Hash Function**.

**Why?** It allows for **O(1)** average time complexity for Search, Insert, and Delete!

### Hash Table
An array that stores the values based on the index calculated by the Hash Function.

### Hash Collision
What happens when the hash function maps two different keys to the SAME index? This is a collision.

**Collision Resolution Techniques:**

1. **Chaining (Open Hashing):**
   - Each slot in the array is a Linked List.
   - If collision occurs, just append the new element to the linked list at that index.

2. **Open Addressing (Closed Hashing):**
   - All elements are stored in the array itself. If a collision happens, find the next empty slot.
   - **Linear Probing:** Check next slot (index + 1), then next, until empty found. (Leads to clustering).
   - **Quadratic Probing:** Check index + 1², index + 2², index + 3², etc.
   - **Double Hashing:** Use a second hash function to determine the step size.

---

## Tries (Prefix Tree)

**What is a Trie?** A tree-like structure used for storing strings.
- Each node represents a single character.
- Excellent for autocomplete, spell checkers, and searching prefixes.
- Search time depends on the length of the string, NOT the number of strings stored. `O(L)` where L is word length.

---

## Viva Quick-Fire

**Q: Difference between Tree and Graph?**
A: A Tree is a hierarchical structure with a root and no cycles. A Graph is a network structure that can have cycles and disconnected components.

**Q: Why use a Binary Search Tree (BST)?**
A: Because it provides fast search, insertion, and deletion operations (O(log n) on average) by maintaining elements in a sorted structure.

**Q: What is the worst-case time complexity of a BST?**
A: O(n). This happens if the tree becomes skewed (e.g., inserting elements that are already sorted), turning it essentially into a linked list.

**Q: Which traversal of a BST gives a sorted sequence?**
A: In-order traversal (Left, Root, Right).

**Q: What data structure does BFS use?**
A: Queue.

**Q: What data structure does DFS use?**
A: Stack (or recursion, which uses the call stack).

**Q: What is a Hash Collision?**
A: When two distinct keys are mapped to the exact same index in a hash table by the hash function.

**Q: Name two ways to handle Hash Collisions.**
A: Chaining (using linked lists at each index) and Open Addressing (like Linear Probing, finding the next available slot).

**Q: What is the main advantage of a Trie?**
A: It provides extremely fast string searching based on prefixes, making it ideal for autocomplete features. Time complexity is proportional to word length, not dictionary size.
