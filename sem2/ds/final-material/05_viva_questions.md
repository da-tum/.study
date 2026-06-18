# Master Viva Q&A — 61 Questions

This section contains rapid-fire questions covering all 4 units, specifically tailored for what an examiner will ask during your practical/viva.

## General & Unit 1

**Q1: What is a Data Structure?**
A: A specialized format for organizing, processing, retrieving and storing data in memory.

**Q2: What is an Algorithm?**
A: A step-by-step procedure or set of rules to solve a specific problem.

**Q3: What is Time Complexity?**
A: The amount of time an algorithm takes to run, expressed as a function of the input size (n).

**Q4: What is Space Complexity?**
A: The amount of extra memory an algorithm requires to run, expressed as a function of input size (n).

**Q5: What is Big O Notation?**
A: It represents the UPPER BOUND or WORST-CASE scenario of an algorithm's time or space complexity.

**Q6: What is Big Omega (Ω) and Big Theta (Θ)?**
A: Omega is the lower bound (best case). Theta is the exact bound (average case).

**Q7: Rank time complexities from fastest to slowest.**
A: O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2^n) > O(n!)

**Q8: What is an ADT (Abstract Data Type)?**
A: A theoretical model that specifies WHAT operations can be performed on a data structure, but not HOW they are implemented (e.g., List, Stack, Queue).

**Q9: What is Recursion?**
A: When a function calls itself to solve a smaller instance of the same problem.

**Q10: What is a Base Case in recursion?**
A: The condition that stops the recursive calls, preventing an infinite loop and stack overflow.

---

## Unit 2 — Linear Data Structures

**Q11: Difference between Array and Linked List?**
A: Arrays use contiguous memory, sizes are fixed, access is O(1). Linked lists use non-contiguous memory connected by pointers, size is dynamic, access is O(n).

**Q12: What is a Stack?**
A: A linear data structure following LIFO (Last In First Out). Insertion (push) and deletion (pop) happen at the same end (top).

**Q13: Name an application of Stack.**
A: Undo mechanism in text editors, browser history, recursive function call stack, evaluating postfix expressions.

**Q14: What is a Queue?**
A: A linear data structure following FIFO (First In First Out). Insertion (enqueue) at the rear, deletion (dequeue) at the front.

**Q15: Name an application of Queue.**
A: Print queue, CPU task scheduling, breadth-first search in graphs.

**Q16: Why use `deque` from `collections` for Queues in Python instead of lists?**
A: In a normal Python list, `pop(0)` takes O(n) time because it shifts all elements. `deque.popleft()` takes O(1) time.

**Q17: What is a Circular Queue?**
A: A queue where the last position is connected back to the first position. It solves the problem of wasted space in standard array-based queues.

**Q18: What is a Priority Queue?**
A: A queue where each element has a priority. Elements with higher priority are dequeued before elements with lower priority, regardless of insertion order.

**Q19: What is a Doubly Linked List?**
A: A linked list where each node contains two pointers: one pointing to the next node and one pointing to the previous node.

**Q20: Advantage of Doubly Linked List?**
A: You can traverse the list in both forward and backward directions. Deletion is easier if you have a pointer to the node to be deleted.

**Q21: What is a Circular Linked List?**
A: A linked list where the last node points back to the head node instead of None.

**Q22: How do you convert Infix to Postfix?**
A: Use a stack for operators. Operands go directly to output. Operators are pushed to the stack based on precedence rules. Brackets control the flow.

**Q23: Why do computers prefer Postfix notation?**
A: Postfix eliminates the need for parentheses and precedence rules (BODMAS). It can be easily evaluated using a single stack.

**Q24: What is the time complexity of inserting at the head of a Linked List?**
A: O(1).

**Q25: What is the time complexity of accessing the nth element in a Linked List?**
A: O(n), because you must traverse from the head.

---

## Unit 3 — Sorting

**Q26: What is a stable sort?**
A: A sorting algorithm that preserves the original relative order of equal elements.

**Q27: Name some stable sorts.**
A: Bubble Sort, Insertion Sort, Merge Sort.

**Q28: What is an in-place sort?**
A: An algorithm that requires a small, constant amount of extra memory space O(1) to sort the data.

**Q29: Name an out-of-place sort.**
A: Merge Sort. It requires O(n) auxiliary space to merge the arrays.

**Q30: How does Bubble Sort work?**
A: It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest elements "bubble" to the end.

**Q31: Time complexity of Bubble Sort?**
A: Worst and Average: O(n²). Best (if already sorted and optimized with a flag): O(n).

**Q32: How does Merge Sort work?**
A: Divide the array in half recursively until sub-arrays are size 1. Then repeatedly merge the sub-arrays to produce new sorted sub-arrays until one sorted array remains.

**Q33: Time complexity of Merge Sort?**
A: O(n log n) in Best, Average, and Worst cases.

**Q34: How does Quick Sort work?**
A: Pick a pivot element. Partition the array so elements smaller than the pivot are on the left, and larger elements are on the right. Recursively apply this to the left and right sub-arrays.

**Q35: Time complexity of Quick Sort?**
A: Average/Best: O(n log n). Worst: O(n²) (happens when the array is already sorted and the pivot is chosen poorly).

**Q36: Which is faster in practice: Merge Sort or Quick Sort?**
A: Quick Sort is generally faster in practice due to better cache locality and smaller constant factors, even though its worst-case is O(n²).

**Q37: Best sorting algorithm for linked lists?**
A: Merge Sort, because it does not require random access to elements.

**Q38: What is Insertion Sort best used for?**
A: Small datasets or arrays that are already mostly sorted.

**Q39: How does Selection Sort work?**
A: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.

**Q40: Is Quick Sort stable?**
A: No, Quick Sort is typically unstable.

---

## Unit 4 — Non-Linear Data Structures

**Q41: What is a Tree?**
A: A hierarchical non-linear data structure consisting of nodes connected by edges, with a single root.

**Q42: What is a Binary Tree?**
A: A tree where every node has at most two children (left and right).

**Q43: What is a Binary Search Tree (BST)?**
A: A binary tree where for every node, all elements in the left subtree are smaller, and all elements in the right subtree are larger.

**Q44: Time complexity of searching in a BST?**
A: Average: O(log n). Worst: O(n) (if the tree becomes skewed like a linked list).

**Q45: Name the three depth-first tree traversals.**
A: In-order (Left, Root, Right), Pre-order (Root, Left, Right), Post-order (Left, Right, Root).

**Q46: Which traversal gives elements in sorted order for a BST?**
A: In-order traversal.

**Q47: What is the height of a tree?**
A: The length of the longest path from the root to a leaf node.

**Q48: What is a Graph?**
A: A non-linear data structure consisting of a set of vertices (nodes) and a set of edges connecting them.

**Q49: Difference between Directed and Undirected Graph?**
A: In a directed graph, edges have a direction (one-way). In an undirected graph, edges have no direction (two-way).

**Q50: How do you represent a Graph in memory?**
A: Adjacency Matrix (2D array) or Adjacency List (array of linked lists).

**Q51: When to use Adjacency Matrix vs Adjacency List?**
A: Use Matrix for dense graphs (many edges). Use List for sparse graphs (few edges) to save memory.

**Q52: What is Breadth-First Search (BFS)?**
A: A graph traversal algorithm that explores the neighbor nodes first, level by level. It uses a Queue.

**Q53: What is Depth-First Search (DFS)?**
A: A graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a Stack (or recursion).

**Q54: What is Hashing?**
A: A technique to convert a range of key values into a range of indexes of an array using a hash function.

**Q55: What is the main benefit of a Hash Table?**
A: Average O(1) time complexity for search, insertion, and deletion.

**Q56: What is a Hash Collision?**
A: When a hash function generates the same index for more than one key.

**Q57: How do you resolve Hash Collisions?**
A: Chaining (using linked lists at each index) or Open Addressing (finding the next empty slot using linear or quadratic probing).

**Q58: What is a Trie?**
A: A tree data structure used for efficient retrieval of a key in a large dataset of strings (Prefix tree).

**Q59: Application of a Trie?**
A: Autocomplete, spell checking, IP routing.

**Q60: What is a Heap?**
A: A specialized tree-based data structure that satisfies the heap property (e.g., in a Max Heap, parent is always >= children).

**Q61: What data structure is used to implement a Priority Queue?**
A: A Heap.
