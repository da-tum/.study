# 📝 B.Tech CSE Data Structures — Written Exam Master Portal

This portal is a comprehensive, exam-optimized guide designed for tomorrow's **Data Structures (B.Tech CSE)** written exam. It compiles, solves, and traces all key concepts, high-frequency questions, and algorithms from your exam notes, revision sheets, and mock tests.

---

## 📂 Section 1: [Syllabus Solutions]
Step-by-step conceptual breakdowns and optimized answers organized by native syllabus units.

### 📐 Unit 1: Introduction, Complexity & Searching
*   **Linear vs. Non-Linear Data Structures**: 
    *   *Linear*: Elements are arranged sequentially. Every element has a unique predecessor and successor (except the first and last). Memory allocation is sequential or linked. Examples: Arrays, Stacks, Queues, Linked Lists.
    *   *Non-Linear*: Elements are arranged hierarchically or in networks. An element can connect to multiple elements. Examples: Trees, Graphs.
*   **Abstract Data Type (ADT)**: A logical, implementation-independent description of a data type. It defines the data organization and a set of valid operations (e.g., `push()`, `pop()` for Stack ADT) without specifying *how* they are implemented (via arrays or linked lists).
*   **Asymptotic Notations**:
    *   **Big-O ($O$)**: Represents the asymptotic *upper bound* (worst-case run time).
    *   **Omega ($\Omega$)**: Represents the asymptotic *lower bound* (best-case run time).
    *   **Theta ($\Theta$)**: Represents the asymptotic *tight bound* (average-case run time).
*   **The Complexity Ladder (Increasing Order)**:
    $$\Theta(1) < \Theta(\log n) < \Theta(\sqrt{n}) < \Theta(n) < \Theta(n \log n) < \Theta(n^2) < \Theta(n^3) < \Theta(2^n) < \Theta(n!)$$
*   **Recurrence Relations (Master Theorem Application)**:
    *   *Merge Sort*: $T(n) = 2T(n/2) + O(n) \Rightarrow \Theta(n \log n)$
    *   *Binary Search*: $T(n) = T(n/2) + O(1) \Rightarrow \Theta(\log n)$
    *   *Naive Fibonacci*: $T(n) = T(n-1) + T(n-2) + O(1) \Rightarrow \Theta(2^n)$
*   **Tower of Hanoi (3 Disks Step-by-Step Trace)**:
    *   *Rods*: $A$ (Source), $B$ (Auxiliary), $C$ (Destination).
    *   *Step 1*: Move disk 1 from $A \rightarrow C$
    *   *Step 2*: Move disk 2 from $A \rightarrow B$
    *   *Step 3*: Move disk 1 from $C \rightarrow B$
    *   *Step 4*: Move disk 3 from $A \rightarrow C$
    *   *Step 5*: Move disk 1 from $B \rightarrow A$
    *   *Step 6*: Move disk 2 from $B \rightarrow C$
    *   *Step 7*: Move disk 1 from $A \rightarrow C$
    *   *Formula for $N$ disks*: $T(n) = 2T(n-1) + 1 = 2^n - 1$ steps. For $3$ disks: $2^3 - 1 = 7$ steps. Time Complexity: $\Theta(2^n)$.
*   **Jump Search**: Works only on sorted arrays. It jumps ahead by fixed blocks of size $m = \sqrt{n}$. Once a block boundary exceeds the target, it performs a backward linear search within that block.
    *   *Optimal Step Size*: $m = \sqrt{n}$
    *   *Time Complexity*: $O(\sqrt{n})$

---

### 🔗 Unit 2: Arrays, Linked Lists & Sorting
*   **Array Memory Representation**: Elements are stored in contiguous memory locations. The address of an element at index $i$ is calculated dynamically in $O(1)$ time: 
    $$\text{Address}(arr[i]) = \text{Base Address} + i \times \text{Size of element}$$
*   **Insertion/Deletion Cost in Arrays**: Inserting at the beginning or middle requires shifting $O(n)$ elements to the right to create space. Deleting requires shifting remaining elements left. Thus, worst-case is $O(n)$.
*   **Linked List Pointers (Time Complexities)**:
    *   *Insertion at Beginning*: $O(1)$ — Adjust only the `head` pointer.
    *   *Insertion at End (with no tail pointer)*: $O(n)$ — Must traverse to the last node.
    *   *Insertion at End (with tail pointer)*: $O(1)$ — Connect directly through the tail pointer.
    *   *Insertion in Middle*: $O(n)$ — Traverse to find the node, then adjust pointers.
*   **Singly vs. Doubly vs. Circular Linked Lists**:
    *   *Singly*: One forward pointer per node (`next`). $O(n)$ backward traversal.
    *   *Doubly*: Two pointers (`prev` and `next`). Bidirectional traversal. Wastes extra pointer memory.
    *   *Circular*: Last node's `next` points back to `head`. No `NULL` values. Ideal for continuous queues or cyclic turn-taking (e.g., Round Robin).

---

### 🗄️ Unit 3: Stacks & Queues
*   **Stack ADT (LIFO)**: Last In, First Out. Operations happen only at the `top`.
    *   *Overflow*: Attempting to push onto a full stack (`top == MAX - 1`).
    *   *Underflow*: Attempting to pop from an empty stack (`top == -1`).
*   **Queue ADT (FIFO)**: First In, First Out. Insertion happens at the `rear`, deletion at the `front`.
    *   *Overflow*: `rear == MAX - 1`.
    *   *Underflow*: `front == -1` or `front > rear`.
*   **Circular Queue**: Overcomes the linear queue limitation where empty slots at the front (after deletions) cannot be reused once `rear` reaches the array boundary. It wraps pointers using modulo arithmetic:
    *   *Enqueue*: `rear = (rear + 1) % MAX_SIZE`
    *   *Dequeue*: `front = (front + 1) % MAX_SIZE`
    *   *Full Condition*: `(rear + 1) % MAX_SIZE == front`
    *   *Empty Condition*: `front == -1`

---

### 🌳 Unit 4: Trees, Graphs & Hashing
*   **Binary Search Tree (BST) Property**: For every node, all keys in its left subtree are strictly smaller than the node's key, and all keys in its right subtree are strictly greater.
*   **Reconstructing Trees from Traversals**:
    *   **Preorder + Inorder**: **YES** (Preorder identifies the root, Inorder splits left/right subtrees).
    *   **Postorder + Inorder**: **YES** (Postorder identifies the root from the end, Inorder splits subtrees).
    *   **Preorder + Postorder**: **NO** (Cannot uniquely determine left vs. right child for nodes with a single child).
*   **AVL Tree**: A self-balancing BST where the balance factor ($BF$) of every node is either $-1$, $0$, or $+1$.
    $$\text{Balance Factor (BF)} = \text{Height of Left Subtree (LH)} - \text{Height of Right Subtree (RH)}$$
    If $|BF| > 1$, the tree is unbalanced, and LL, RR, LR, or RL rotations are applied.
*   **BFS vs. DFS in Graphs**:
    *   *BFS*: Explores nodes level-by-level using a **Queue** data structure. Finds shortest path in unweighted graphs. Time: $O(V + E)$.
    *   *DFS*: Explores deeply along branches using a **Stack** (or recursion). Used for cycle detection and topological sorting. Time: $O(V + E)$.
*   **Hashing & Collision Handling**: Hashing maps arbitrary keys into fixed table indices using a hash function (e.g., $h(k) = k \pmod{\text{size}}$). A **collision** occurs when two keys hash to the same index. 
    *   *Linear Probing*: Look for the next contiguous empty slot sequentially: $h(k, i) = (h(k) + i) \pmod{\text{size}}$.
    *   *Chaining*: Maintain a linked list of all colliding elements at each table index.

---

## 📈 Section 2: [High-Frequency Questions]
Highly repeated B.Tech exam questions solved with high-scoring answers.

### ❓ Q1: Differentiate between Arrays and Linked Lists based on memory allocation and insertion operations. [2 Marks]
*   **Memory Allocation**: Arrays use **static, contiguous** memory allocation at compile-time (or runtime for dynamic arrays). Linked Lists use **dynamic, non-contiguous** memory allocation at runtime via pointers.
*   **Insertion Operation**: In arrays, inserting an element at the beginning/middle requires shifting existing elements, taking $O(n)$ time. In linked lists, inserting at the beginning takes $O(1)$ time by creating a new node and updating pointers, without shifting elements.

### ❓ Q2: Find the time complexity of the following code snippet. [2 Marks]
```python
i = 1
while i <= n:
    i = i * 2
```
*   **Solution**: In each step, the loop variable $i$ doubles in value: $1, 2, 4, 8, \dots$. After $k$ iterations, $i = 2^k$. The loop terminates when $i > n \Rightarrow 2^k > n$. Taking the logarithm on both sides:
    $$k = \log_2 n$$
    The loop runs logarithmic times. Hence, the Time Complexity is **$\Theta(\log n)$**.

### ❓ Q3: Construct a Binary Tree using the following traversals. [8 Marks]
*   **Preorder**: `A B D E C F`
*   **Inorder**: `D B E A C F`
*   **Step-by-Step Construction**:
    1.  *Identify Root*: The first element in preorder traversal is always the root $\Rightarrow$ **Root = A**.
    2.  *Partition Inorder*: Find `A` in the inorder sequence to separate left and right subtrees:
        $$\text{Left Subtree Inorder} = [\text{D, B, E}] \quad | \quad \text{Root} = \text{A} \quad | \quad \text{Right Subtree Inorder} = [\text{C, F}]$$
    3.  *Construct Left Subtree*: Preorder elements for the left subtree are `B, D, E`.
        *   First preorder element is `B` $\Rightarrow$ **Root of left subtree = B**.
        *   Partition left inorder `D, B, E` around `B`: **Left child = D**, **Right child = E**.
    4.  *Construct Right Subtree*: Preorder elements for the right subtree are `C, F`.
        *   First preorder element is `C` $\Rightarrow$ **Root of right subtree = C**.
        *   Partition right inorder `C, F` around `C`: **Right child = F** (Left child is empty).
    5.  *Final Tree Diagram*:
        ```
              A
             / \
            B   C
           / \   \
          D   E   F
        ```
    6.  *Postorder Traversal (L-R-Root)*: `D E B F C A`

### ❓ Q4: Trace the step-by-step insertion of keys `10, 20, 30, 40` into an AVL tree. [8 Marks]
1.  **Insert 10**:
    ```
    10 (BF = 0)
    ```
2.  **Insert 20**:
    ```
      10 (BF = -1)
        \
        20 (BF = 0)
    ```
3.  **Insert 30**:
    ```
      10 (BF = -2) <-- UNBALANCED!
        \
        20 (BF = -1)
          \
          30 (BF = 0)
    ```
    *   *Violation*: Node `10` has a Balance Factor of $-2$. This is a **Right-Right (RR) Case** at node `10`.
    *   *Action*: Apply a single **Left Rotation** around `10`.
    *   *Result*:
        ```
            20 (BF = 0)
           /  \
         10    30 (BF = 0)
        ```
4.  **Insert 40**:
    ```
            20 (BF = -1)
           /  \
         10    30 (BF = -1)
                 \
                 40 (BF = 0)
        ```
    *   *Check Balance Factors*: $BF(10) = 0$, $BF(40) = 0$, $BF(30) = -1$, $BF(20) = -1$.
    *   *Result*: All $|BF| \le 1$. The tree is balanced.

---

## 🗃️ Section 3: [Comprehensive Question Bank]

### 🔹 Pool A: 2-Mark Short Answer Questions

#### Q1. What is Stack Underflow? State the mathematical condition.
*   **Answer**: Stack Underflow occurs when a deletion (`POP`) operation is attempted on an empty stack. In an array-based implementation, the mathematical condition is:
    $$\text{top} == -1$$

#### Q2. Why is Binary Search highly efficient compared to Linear Search? State their worst-case complexities.
*   **Answer**: Binary Search repeatedly divides the search space in half (logarithmic search space reduction), whereas Linear Search checks elements one-by-one (linear reduction).
    *   *Linear Search Worst Case*: $O(n)$
    *   *Binary Search Worst Case*: $O(\log n)$

#### Q3. State the balance factor condition of an AVL tree.
*   **Answer**: In an AVL tree, the Balance Factor ($BF$) of every node must satisfy:
    $$BF \in \{-1, 0, +1\} \quad \text{where} \quad BF = \text{Height(Left Subtree)} - \text{Height(Right Subtree)}$$

#### Q4. Differentiate between stable and unstable sorting algorithms. Give one example of each.
*   **Answer**: A sorting algorithm is **stable** if it preserves the relative order of equal elements in the sorted output. It is **unstable** if it might change their relative order.
    *   *Stable*: Merge Sort
    *   *Unstable*: Quick Sort

#### Q5. What is a Circular Queue and what is its primary advantage?
*   **Answer**: A circular queue is a linear queue implementation where the last index wraps around to the first index. Its primary advantage is **optimal memory utilization** by reusing empty slots at the front created after dequeue operations.

#### Q6. What is the load factor of a Hash Table?
*   **Answer**: The load factor ($\alpha$) represents the average number of elements stored per bucket in a hash table. It is defined as:
    $$\alpha = \frac{n}{m} \quad \text{where } n = \text{number of occupied slots, } m = \text{total size of the table}$$

---

### 🔸 Pool B: 8-Mark Long Answer Questions (with sub-parts)

#### Q1. Dynamic Programming vs. Greedy Paradigm.
*   **(a) Compare Dynamic Programming and Greedy Algorithms based on Optimal Substructure, Decision making, and Backtracking.** [4 Marks]
    *   *Optimal Substructure*: Both require optimal substructure (local optimal components make up the global optimal).
    *   *Decision Making*: Greedy makes a single, locally optimal choice at each step without reconsidering. DP evaluates all possible subproblem decisions and stores results to make the globally optimal choice.
    *   *Backtracking*: Greedy never backtracks or revisits a decision once made. DP implicitly handles backtracking by building solutions bottom-up and storing overlapping solutions.
*   **(b) State which paradigm always guarantees a globally optimal solution and explain why, using the 0/1 Knapsack problem.** [4 Marks]
    *   **Dynamic Programming** always guarantees a globally optimal solution, whereas Greedy does not.
    *   *Knapsack Explanation*: In the 0/1 Knapsack problem, items cannot be broken. A Greedy strategy (e.g., picking the item with the highest value-to-weight ratio first) fails because it may leave empty weight slots that could be better utilized by a different combination of items. DP evaluates all item combinations systematically using a table $DP[i][w]$, guaranteeing the global maximum value.

#### Q2. Stack & Expression Conversions.
*   **(a) Write a clean Python function to convert an Infix expression to Postfix notation using a Stack.** [5 Marks]
```python
def infix_to_postfix(expression):
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    stack = []
    postfix = []
    
    for char in expression:
        if char.isalnum():
            postfix.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                postfix.append(stack.pop())
            stack.pop() # Remove '('
        else: # Operator
            while stack and stack[-1] != '(' and precedence.get(stack[-1], 0) >= precedence.get(char, 0):
                postfix.append(stack.pop())
            stack.append(char)
            
    while stack:
        postfix.append(stack.pop())
    return "".join(postfix)
```
*   **(b) Trace the execution of your algorithm for the infix expression `(A + B) * C` using a step-by-step table.** [3 Marks]
    *   **Trace Table**:

| Character | Action | Stack Content | Postfix Output |
| :--- | :--- | :--- | :--- |
| `(` | Push to Stack | `['(']` | `` |
| `A` | Append to Output | `['(']` | `A` |
| `+` | Push to Stack | `['(', '+']` | `A` |
| `B` | Append to Output | `['(', '+']` | `A B` |
| `)` | Pop until `(` | `[]` | `A B +` |
| `*` | Push to Stack | `['*']` | `A B +` |
| `C` | Append to Output | `['*']` | `A B + C` |
| *End* | Pop remaining | `[]` | `A B + C *` |

---

## 🎯 Section 4: [Mock Exam Paper - High-Fidelity Solved Version]
*Time allowed: 3 Hours | Maximum Marks: 40*

---

### 📝 PART A: Attempt ANY 4 Questions (2 Marks Each)

#### Q1. Differentiate between Array and Linked List on the basis of Memory allocation and Insertion operation.
*   **Memory Allocation**: 
    *   *Array*: Contiguous block of memory allocated statically at **compile-time** (on the stack) or dynamically (but still contiguous) at runtime. The size is fixed and must be declared in advance.
    *   *Linked List*: Non-contiguous nodes allocated dynamically at **runtime** (on the heap) as needed. Memory size grows and shrinks dynamically.
*   **Insertion**:
    *   *Array*: Takes **$O(n)$** time in the worst case because inserting at the beginning or middle requires shifting all subsequent elements right.
    *   *Linked List*: Takes **$O(1)$** time to insert at the head since it only requires adjusting a few pointers (e.g., `new_node.next = head; head = new_node`) without shifting any data.

#### Q2. Find the time complexity of the following loop structure: `i = 1; while i <= n: i = i * 2`.
*   **Mathematical Derivation**:
    The loop variable $i$ starts at $1$ and doubles in value in each iteration step:
    $$\text{Iteration 1}: i = 2^1$$
    $$\text{Iteration 2}: i = 2^2$$
    $$\text{Iteration } k: i = 2^k$$
    The loop terminates when the condition $i \le n$ becomes false, i.e., $2^k > n$. 
    Taking the logarithm to base 2 on both sides:
    $$k > \log_2 n$$
    The total execution steps grow logarithmically with respect to input size $n$.
    **Time Complexity = $O(\log n)$** (Logarithmic).

#### Q3. State whether the following statement is TRUE or FALSE: "Binary Search can be applied on unsorted arrays." Justify.
*   **Answer**: **FALSE**.
*   **Justification**: Binary Search relies on the **ordering property** of sorted arrays. In each iteration, it compares the target with the *middle element* and eliminates one-half of the search space. If the array is unsorted, comparing target with the middle element gives no information about which side the target lies on, making search space elimination mathematically invalid. For example, searching `3` in `[5, 1, 9, 3, 7]` with a middle element of `9` would lead us to search `[5, 1]` (since $3 < 9$), completely missing the target `3` in the right half.

#### Q4. What is Stack Underflow? State the mathematical condition and differentiate it from Stack Overflow.
*   **Stack Underflow**: Occurs when a deletion (`POP`) or check (`PEEK`) operation is attempted on an *empty stack* that contains no elements.
    *   *Mathematical Condition*: `top == -1` (for an array-based implementation).
*   **Comparison**:
    *   *Stack Overflow*: Happens when a `PUSH` is attempted on a *full stack*. Condition: `top == MAX_SIZE - 1`.
    *   *Stack Underflow*: Happens when a `POP` is attempted on an *empty stack*. Condition: `top == -1`.

#### Q5. Write the inorder traversal rule of a Binary Tree. Give an example.
*   **Inorder Traversal Rule**: **Left Subtree &rarr; Root Node &rarr; Right Subtree** (L-Root-R).
*   **Example**:
    ```
          10 (Root)
         /  \
        5    15
    ```
    *Traversal order*: `5, 10, 15`. In a Binary Search Tree (BST), Inorder traversal always produces elements in **ascending sorted order**.

#### Q6. Differentiate between BFS and DFS traversal on the basis of data structure, strategy, and complexity.
| Aspect Metric | BFS (Breadth-First Search) | DFS (Depth-First Search) |
| :--- | :--- | :--- |
| **Data Structure** | FIFO **Queue** (First-In First-Out) | LIFO **Stack** (Last-In First-Out) or Recursion |
| **Traversal Strategy** | Level-by-level (visits all immediate neighbors first) | Branch-by-branch (goes as deep as possible before backtracking) |
| **Time Complexity** | $O(V + E)$ where $V = \text{vertices}, E = \text{edges}$ | $O(V + E)$ |
| **Space Complexity** | $O(V)$ auxiliary space for queue | $O(V)$ auxiliary space for recursive call stack |

#### Q7. What is the worst-case complexity of Quick Sort? When does it occur and how is it avoided?
*   **Worst-Case Complexity**: **$O(n^2)$** (Quadratic).
*   **When it occurs**: When the partition pivot chosen consistently splits the array extremely unevenly (e.g., $0$ elements on one side and $n-1$ on the other). This happens on already sorted or reverse-sorted arrays when using the first or last element as the pivot.
*   **How it is avoided**: By using **Randomized Quick Sort** (choosing a random element as pivot) or the **Median-of-Three** pivot strategy (median of first, middle, and last elements).

---

### 📝 PART B: Attempt ANY 4 Questions (8 Marks Each)

#### Q1. Quick Sort Dry Run: Perform Quick Sort on [35, 10, 50, 25, 5, 40, 15] using the first element as pivot. Show partitioning steps, recursive breakdown, and complete code.
##### (a) Level-by-Level Dry Run partition trace (Hoare's Partitioning)
*   **Level 0**: Partitioning `[35, 10, 50, 25, 5, 40, 15]`, Pivot = `35`
    *   $i$ starts at index 1 (val 10), scans right for $>35$ &rarr; stops at index 2 (`50`).
    *   $j$ starts at index 6 (val 15), scans left for $\le 35$ &rarr; stops at index 6 (`15`).
    *   Swap `arr[2]` (50) with `arr[6]` (15) &rarr; Array: `[35, 10, 15, 25, 5, 40, 50]`
    *   Resume scanning: $i$ stops at index 5 (`40`). $j$ stops at index 4 (`5`).
    *   Pointers crossed ($i=5, j=4$) &rarr; Stop. Swap pivot `35` with `arr[j=4]` (5) &rarr; Array: `[5, 10, 15, 25] 35 [40, 50]`
    *   *Result*: Pivot `35` is sorted.
*   **Level 1 (Left Subarray)**: Partitioning `[5, 10, 15, 25]`, Pivot = `5`
    *   $i$ stops at index 1 (`10` > 5). $j$ scans left and stops at index 0 (`5` <= 5).
    *   Pointers crossed ($i=1, j=0$). Swap pivot (no change).
    *   *Result*: `5` is sorted! Left subtree: `[]`, Right: `[10, 15, 25]`.
*   **Level 2**: Partitioning `[10, 15, 25]`, Pivot = `10`
    *   Pointers cross immediately at $i=1, j=0$. Swap pivot (no change).
    *   *Result*: `10` is sorted. Right subtree: `[15, 25]`.
*   **Level 3**: Partitioning `[15, 25]`, Pivot = `15` &rarr; `15` sorted, then leaf `[25]` sorted.
*   **Level 1 (Right Subarray)**: Partitioning `[40, 50]`, Pivot = `40` &rarr; `40` sorted, leaf `[50]` sorted.

##### (b) Recursive Decomposition Structure
```
[35, 10, 50, 25, 5, 40, 15]
             | (pivot 35)
     [5, 10, 15, 25]  35  [40, 50]
        | (pivot 5)          | (pivot 40)
      [] 5 [10, 15, 25]    [] 40 [50]
             | (pivot 10)
           [] 10 [15, 25]
                   | (pivot 15)
                 [] 15 [25]
```
**Final Sorted Array**: `[5, 10, 15, 25, 35, 40, 50]`

##### (c) Quick Sort & Partitioning Algorithms (Pseudocode)
```text
ALGORITHM Partition(arr, low, high)
  Input: Array arr, boundaries low and high
  Output: Partition index j
  
  pivot = arr[low]
  i = low + 1
  j = high
  
  while true do
    while i <= j and arr[i] <= pivot do
      i = i + 1
    end while
    while i <= j and arr[j] > pivot do
      j = j - 1
    end while
    if i < j then
      Swap arr[i] and arr[j]
    else
      break
    end if
  end while
  
  Swap arr[low] and arr[j]
  return j

ALGORITHM QuickSort(arr, low, high)
  Input: Array arr, boundaries low and high
  
  if low < high then
    p = Partition(arr, low, high)
    QuickSort(arr, low, p - 1)
    QuickSort(arr, p + 1, high)
  end if
```

##### (d) Complete Python Implementation
```python
def quick_sort(arr, low, high):
    if low < high:
        p = partition(arr, low, high)
        quick_sort(arr, low, p - 1)
        quick_sort(arr, p + 1, high)

def partition(arr, low, high):
    pivot = arr[low]
    i = low + 1
    j = high
    while True:
        while i <= j and arr[i] <= pivot:
            i += 1
        while i <= j and arr[j] > pivot:
            j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
        else:
            break
    arr[low], arr[j] = arr[j], arr[low]
    return j
```

---

#### Q2. Queue Rearrangement: Transform [1, 2, 3, 4, 5, 6] into [1, 3, 5, 2, 4, 6] using ONLY queue operations.
##### (a) Step-by-Step State Trace Log
Using two auxiliary queues: `Q_odd` and `Q_even`.
1.  **Dequeue elements from main queue `Q1` one by one and filter**:
    *   Dequeue `1` &rarr; Odd &rarr; Enqueue to `Q_odd` &rarr; `Q_odd = [1]`
    *   Dequeue `2` &rarr; Even &rarr; Enqueue to `Q_even` &rarr; `Q_even = [2]`
    *   Dequeue `3` &rarr; Odd &rarr; Enqueue to `Q_odd` &rarr; `Q_odd = [1, 3]`
    *   Dequeue `4` &rarr; Even &rarr; Enqueue to `Q_even` &rarr; `Q_even = [2, 4]`
    *   Dequeue `5` &rarr; Odd &rarr; Enqueue to `Q_odd` &rarr; `Q_odd = [1, 3, 5]`
    *   Dequeue `6` &rarr; Even &rarr; Enqueue to `Q_even` &rarr; `Q_even = [2, 4, 6]`
    *   *State*: `Q1 = []`, `Q_odd = [1, 3, 5]`, `Q_even = [2, 4, 6]`
2.  **Dequeue all from `Q_odd` and enqueue to `Q1`**:
    *   `Q1 = [1, 3, 5]`, `Q_odd = []`
3.  **Dequeue all from `Q_even` and enqueue to `Q1`**:
    *   `Q1 = [1, 3, 5, 2, 4, 6]`, `Q_even = []` (Complete!)

##### (b) Queue Rearrangement Algorithm (Pseudocode)
```text
ALGORITHM RearrangeQueue(Q1)
  Input: Queue Q1 filled with integers
  Output: Queue Q1 with all odd integers followed by all even integers
  
  Create empty queues Q_odd and Q_even
  
  // Step 1: Partition elements into helper queues
  while Q1 is not empty do
    val = Q1.dequeue()
    if val is odd then
      Q_odd.enqueue(val)
    else
      Q_even.enqueue(val)
    end if
  end while
  
  // Step 2: Enqueue odd elements back to Q1
  while Q_odd is not empty do
    Q1.enqueue(Q_odd.dequeue())
  end while
  
  // Step 3: Enqueue even elements back to Q1
  while Q_even is not empty do
    Q1.enqueue(Q_even.dequeue())
  end while
```

##### (c) Complete Python Implementation
```python
from collections import deque

class Queue:
    def __init__(self, elements=None):
        self.items = deque(elements) if elements else deque()
    def enqueue(self, val):
        self.items.append(val)
    def dequeue(self):
        return self.items.popleft()
    def is_empty(self):
        return len(self.items) == 0

def rearrange_queue(q1):
    q_odd = Queue()
    q_even = Queue()
    while not q1.is_empty():
        val = q1.dequeue()
        if val % 2 != 0:
            q_odd.enqueue(val)
        else:
            q_even.enqueue(val)
    while not q_odd.is_empty():
        q1.enqueue(q_odd.dequeue())
    while not q_even.is_empty():
        q1.enqueue(q_even.dequeue())
```

---

#### Q3. Stack Operations: trace push(10), push(20), push(30), pop(), push(40), pop(), push(50) showing top and final state.
##### (a) Operation Log Table
| Step | Operation | Stack State (Bottom to Top) | Top Pointer | Popped Element |
| :--- | :--- | :--- | :--- | :--- |
| 0 | Initial | `[]` | `-1` | &mdash; |
| 1 | `push(10)` | `[10]` | `0` | &mdash; |
| 2 | `push(20)` | `[10, 20]` | `1` | &mdash; |
| 3 | `push(30)` | `[10, 20, 30]` | `2` | &mdash; |
| 4 | `pop()` | `[10, 20]` | `1` | `30` |
| 5 | `push(40)` | `[10, 20, 40]` | `2` | &mdash; |
| 6 | `pop()` | `[10, 20]` | `1` | `40` |
| 7 | `push(50)` | `[10, 20, 50]` | `2` | &mdash; |

##### (b) Sub-questions Answers
*   **Final Stack**: `[10, 20, 50]`
*   **Top Element**: `50`
*   **Popping Empty Stack (Stack Underflow)**: Causes a runtime crash or underflow check error. In Python, we throw a custom exception `StackUnderflowException`.

##### (c) Stack Push and Pop Algorithms (Pseudocode)
```text
ALGORITHM Push(stack, item)
  Input: Array stack of capacity MAX, active element item
  
  if top >= MAX - 1 then
    throw StackOverflowException
  else
    top = top + 1
    stack[top] = item
  end if

ALGORITHM Pop(stack)
  Input: Array stack
  Output: Top element of the stack
  
  if top == -1 then
    throw StackUnderflowException
  else
    popped_val = stack[top]
    stack[top] = null // clear slot
    top = top - 1
    return popped_val
  end if
```

##### (d) Complete Python Implementation
```python
class ArrayStack:
    def __init__(self, capacity=10):
        self.arr = [None] * capacity
        self.top = -1
    def push(self, val):
        self.top += 1
        self.arr[self.top] = val
    def pop(self):
        if self.top == -1:
            raise IndexError("Stack Underflow")
        val = self.arr[self.top]
        self.top -= 1
        return val
```

---

#### Q4. Binary Tree Traversal: For tree with Root A, left=B (children D,E), right=C (child F) — find Inorder, Preorder, Postorder traversals.
##### (a) Tree Structure Diagram
```
      Tree Structure:
             A (Root)
            / \
           B   C
          / \   \
         D   E   F (Leaves: D, E, F)
```

##### (b) Traversals Result
*   **Preorder (Root-L-R)**: `A, B, D, E, C, F`
*   **Inorder (L-Root-R)**: `D, B, E, A, C, F`
*   **Postorder (L-R-Root)**: `D, E, B, F, C, A`

##### (c) Node-by-Node Tracing
*   *Preorder*: Visit root `A` &rarr; go left, visit `B` &rarr; go left, visit leaf `D` &rarr; backtrack to B, go right, visit leaf `E` &rarr; backtrack to A, go right, visit `C` &rarr; go right, visit leaf `F`.
*   *Inorder*: Recurse left from A to B to D. Visit leaf `D` &rarr; backtrack, visit parent `B` &rarr; go right, visit leaf `E` &rarr; backtrack to A, visit root `A` &rarr; go right to C, visit `C` &rarr; go right, visit leaf `F`.

##### (d) Recursive Tree Traversals Algorithms (Pseudocode)
```text
ALGORITHM Preorder(root)
  Input: Node root of binary tree
  
  if root is not null then
    Visit(root.val)
    Preorder(root.left)
    Preorder(root.right)
  end if

ALGORITHM Inorder(root)
  Input: Node root of binary tree
  
  if root is not null then
    Inorder(root.left)
    Visit(root.val)
    Inorder(root.right)
  end if

ALGORITHM Postorder(root)
  Input: Node root of binary tree
  
  if root is not null then
    Postorder(root.left)
    Postorder(root.right)
    Visit(root.val)
  end if
```

##### (e) Complete Python Implementation
```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(root, res):
    if root:
        inorder(root.left, res)
        res.append(root.val)
        inorder(root.right, res)
```

---

#### Q5. BFS and DFS Traversal: Tracing graph starting from Node A (connections A-B,C; B-D,E; C-F; E-G).
##### (a) Step-by-Step Traversal Traces
*   **BFS (Queue-based)**:
    1.  Start with queue `['A']`, visited `{'A'}`
    2.  Process `A` &rarr; queue `['B', 'C']`, visited `{'A', 'B', 'C'}`
    3.  Process `B` &rarr; queue `['C', 'D', 'E']`, visited `{'A', 'B', 'C', 'D', 'E'}`
    4.  Process `C` &rarr; queue `['D', 'E', 'F']`, visited `{'A', 'B', 'C', 'D', 'E', 'F'}`
    5.  Process `D` &rarr; queue `['E', 'F']`
    6.  Process `E` &rarr; queue `['F', 'G']`, visited `{'A', 'B', 'C', 'D', 'E', 'F', 'G'}`
    7.  Process `F` &rarr; queue `['G']`
    8.  Process `G` &rarr; queue `[]`
    *   **BFS Visit Order**: `A &rarr; B &rarr; C &rarr; D &rarr; E &rarr; F &rarr; G`
*   **DFS (Stack-based / Recursion)**:
    1.  Visit `A` &rarr; recurse left to `B` &rarr; recurse left to leaf `D`.
    2.  Backtrack to `B` &rarr; recurse right to `E` &rarr; recurse to leaf `G`.
    3.  Backtrack to `E` &rarr; backtrack to `B` &rarr; backtrack to `A`.
    4.  Recurse right from `A` to `C` &rarr; recurse to leaf `F`.
    *   **DFS Visit Order**: `A &rarr; B &rarr; D &rarr; E &rarr; G &rarr; C &rarr; F`

##### (b) BFS and DFS Traversal Algorithms (Pseudocode)
```text
ALGORITHM BFS(graph, start)
  Input: Graph representation graph, source node start
  Output: BFS traversal order list
  
  Create set visited and add start
  Create queue queue and enqueue start
  Create list traversal_order
  
  while queue is not empty do
    node = queue.dequeue()
    traversal_order.append(node)
    
    for neighbor in graph[node] do
      if neighbor is not in visited then
        visited.add(neighbor)
        queue.enqueue(neighbor)
      end if
    end for
  end while
  return traversal_order

ALGORITHM DFS(graph, node, visited, traversal_order)
  Input: Graph representation graph, active node, visited set, traversal_order list
  
  visited.add(node)
  traversal_order.append(node)
  
  for neighbor in graph[node] do
    if neighbor is not in visited then
      DFS(graph, neighbor, visited, traversal_order)
    end if
  end for
```

##### (c) Complete Python Implementation
```python
def bfs(graph, start):
    visited, queue, order = {start}, [start], []
    while queue:
        node = queue.pop(0)
        order.append(node)
        for n in graph[node]:
            if n not in visited:
                visited.add(n)
                queue.append(n)
    return order
```

---

#### Q6. Construct Binary Tree: Preorder A B D E C F and Inorder D B E A C F. Show reconstruction step-by-step.
##### (a) Reconstruction Steps & Diagrams
1.  **First preorder node is Root &rarr; Root = A**
    *   Split Inorder: `[D, B, E] | A | [C, F]`
2.  **Left Subtree (Preorder: `B, D, E`, Inorder: `D, B, E`)**
    *   First preorder node is `B` &rarr; Sub-Root = B
    *   Split Inorder around B: `[D] | B | [E]`
    *   Leaves are D (left) and E (right).
3.  **Right Subtree (Preorder: `C, F`, Inorder: `C, F`)**
    *   First preorder node is `C` &rarr; Sub-Root = C
    *   Split Inorder around C: `[] | C | [F]`
    *   Right child is leaf F (Left child is NULL).

##### (b) Final Tree Structure Diagram
```
        A
       / \
      B   C
     / \   \
    D   E   F
```

##### (c) Tree Construction Algorithm (Pseudocode)
```text
ALGORITHM BuildTree(preorder, inorder)
  Input: Lists preorder and inorder representing traversals
  Output: Root Node of reconstructed binary tree
  
  if preorder is empty or inorder is empty then
    return null
  end if
  
  root_val = preorder[0]
  root = new Node(root_val)
  
  root_index = index of root_val in inorder
  
  left_inorder = inorder[0 ... root_index - 1]
  right_inorder = inorder[root_index + 1 ... end]
  
  left_preorder = preorder[1 ... length(left_inorder)]
  right_preorder = preorder[length(left_inorder) + 1 ... end]
  
  root.left = BuildTree(left_preorder, left_inorder)
  root.right = BuildTree(right_preorder, right_inorder)
  
  return root
```

##### (d) Complete Python Implementation
```python
def build_tree(preorder, inorder):
    if not preorder or not inorder:
        return None
    root_val = preorder[0]
    root = Node(root_val)
    idx = inorder.index(root_val)
    root.left = build_tree(preorder[1:1+idx], inorder[:idx])
    root.right = build_tree(preorder[1+idx:], inorder[idx+1:])
    return root
```

---

#### Q7. Complexity Analysis: Analyze loop structures sequential O(n), logarithmic O(log n), quadratic O(n²).
##### (a) Snippet A: Sequential Linear Loop ($O(n)$)
*   **Code**: `for i in range(n): print(i)`
*   **Derivation**: The loop runs $n$ times executing $1$ operation each time. Total operations $T(n) = \sum_{i=0}^{n-1} 1 = n$. Complexity is **$O(n)$**. (Classified as Best/Average/Worst Case: $O(n)$).

##### (b) Snippet B: Logarithmic Loop ($O(\log n)$)
*   **Code**: `i = 1; while i < n: i = i * 3`
*   **Derivation**: $i$ multiplies by 3 every iteration, taking values $3^1, 3^2, \dots, 3^k$. Loop stops when $3^k \ge n \Rightarrow k = \log_3 n$. Complexity is **$O(\log n)$**. (Classified as Best/Average/Worst Case: $O(\log n)$).

##### (c) Snippet C: Quadratic Loop ($O(n^2)$)
*   **Code**: `for i in range(n): for j in range(n): print(i, j)`
*   **Derivation**: Nested sequential loops. The inner runs $n$ times for each of the $n$ outer iterations. Total operations $T(n) = n \times n = n^2$. Complexity is **$O(n^2)$**. (Classified as Best/Average/Worst Case: $O(n^2)$).

##### (d) Algorithmic Complexity Bounds Reference Table
| Snippet | Loop Structure | Time Complexity | Space Complexity | Reasoning |
| :--- | :--- | :--- | :--- | :--- |
| **A** | Single Linear ($0$ to $n-1$) | $O(n)$ | $O(1)$ | Iterates sequentially $n$ times with constant operations inside. |
| **B** | Logarithmic Multiplicative (multiplies by 3) | $O(\log n)$ | $O(1)$ | Doubles/triples step sizes so values grow exponentially, stopping in $\log_3 n$ steps. |
| **C** | Nested Quadratic (double nested $n \times n$) | $O(n^2)$ | $O(1)$ | Inner loop executes $n$ times for each of the $n$ outer iterations. |

---

#### Q8. Searching Techniques: Differentiate Linear vs Binary Search. Also search element 25 in [5, 10, 15, 20, 25, 30, 35] using Binary Search.
##### (a) Benchmark Comparison
*   *Linear Search*: Compares elements sequentially. Complexity is $O(n)$ worst-case. Prerequisite: None.
*   *Binary Search*: Divides sorted search space in half. Complexity is $O(\log n)$ worst-case. Prerequisite: Must be sorted.

##### (b) Binary Search Trace table for Key = 25
*   Input: `[5, 10, 15, 20, 25, 30, 35]`, boundaries: `low = 0`, `high = 6`
1.  **Iteration 1**: `mid = (0 + 6) // 2 = 3`. `arr[3] = 20`. Since $25 > 20$, search right half &rarr; `low = mid + 1 = 4`.
2.  **Iteration 2**: `mid = (4 + 6) // 2 = 5`. `arr[5] = 30`. Since $25 < 30$, search left half &rarr; `high = mid - 1 = 4`.
3.  **Iteration 3**: `mid = (4 + 4) // 2 = 4`. `arr[4] = 25`. Since $25 == 25$, Match found at **index 4**!

##### (c) Searching Algorithms (Pseudocode)
```text
ALGORITHM LinearSearch(arr, target)
  Input: Array arr of size n, active key target
  Output: Index of target, or -1 if not found
  
  for index = 0 to n - 1 do
    if arr[index] == target then
      return index
    end if
  end for
  return -1

ALGORITHM BinarySearch(arr, target)
  Input: Sorted array arr of size n, active key target
  Output: Index of target, or -1 if not found
  
  low = 0
  high = n - 1
  
  while low <= high do
    mid = (low + high) // 2
    if arr[mid] == target then
      return mid
    elif target > arr[mid] then
      low = mid + 1
    else
      high = mid - 1
    end if
  end while
  return -1
```

##### (d) Complete Python Implementation
```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```
