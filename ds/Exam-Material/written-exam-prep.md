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

## 🎯 Section 4: [Predictive Exam Paper]
*Time: 3 Hours | Maximum Marks: 40*

---

### 📝 PART A: Attempt ANY 4 Questions (2 Marks Each)

#### Q1. Differentiate between BFS and DFS traversal of a Graph. State the helper data structure used in each.
*   **Answer**:
    *   **BFS (Breadth-First Search)** traverses the graph level-by-level, visiting all neighbor nodes at the current depth before going deeper. It uses a **Queue (FIFO)**.
    *   **DFS (Depth-First Search)** traverses deeply along a single branch as far as possible before backtracking to unvisited branches. It uses a **Stack (LIFO)** or recursion.

#### Q2. Write a Python function for the PUSH operation in an array-based Stack. Include overflow handling.
*   **Answer**:
```python
def push(stack, top, item, MAX_SIZE):
    if top >= MAX_SIZE - 1:
        print("Stack Overflow! Cannot push element.")
        return top
    top += 1
    stack[top] = item
    return top
```

#### Q3. State whether the following statement is TRUE or FALSE: "A binary tree can be uniquely reconstructed if both its Preorder and Postorder traversals are given." Justify.
*   **Answer**: **FALSE**. Preorder (Root-L-R) and Postorder (L-R-Root) traversals do not establish structural boundaries between left and right subtrees for nodes that have only a single child. For example, a root node `A` with a single child `B` yields the same preorder (`A, B`) and postorder (`B, A`) regardless of whether `B` is a left child or a right child.

#### Q4. What is the optimal step size $m$ in Jump Search for an array of size $n$, and what is its worst-case time complexity?
*   **Answer**:
    *   *Optimal Step Size*: $m = \sqrt{n}$
    *   *Worst-Case Time Complexity*: $O(\sqrt{n})$

---

### 📝 PART B: Attempt ANY 4 Questions (8 Marks Each)

#### Q1. Quick Sort Partitioning & Tracing.
*   **(a) Perform a complete dry run of the Quick Sort algorithm on the following array, selecting the first element as the pivot: `[35, 10, 50, 25, 5, 40, 15]`. Show every partition step.** [5 Marks]
    *   **Initial Array**: `[35, 10, 50, 25, 5, 40, 15]`, Pivot = `35`.
    *   *Goal*: Partition elements around pivot `35` so that values $< 35$ go left and values $> 35$ go right.
    *   *Standard Partition Trace (using Hoare's or logical partition)*:
        *   Scan left-to-right for element $> 35 \Rightarrow 50$ (at index 2).
        *   Scan right-to-left for element $< 35 \Rightarrow 15$ (at index 6).
        *   Swap `50` and `15` $\Rightarrow$ Array becomes: `[35, 10, 15, 25, 5, 40, 50]`
        *   Resume left scan for element $> 35 \Rightarrow 40$ (at index 5).
        *   Resume right scan for element $< 35 \Rightarrow 5$ (at index 4).
        *   Since indices have crossed, partition is complete.
        *   Swap pivot `35` with `5` (at boundary index 4) $\Rightarrow$ Array becomes: `[5, 10, 15, 25] 35 [40, 50]`
        *   *Pivot `35` is now placed at its correct sorted position.*
    *   *Recursive Call 1 (Left Subarray)*: `[5, 10, 15, 25]`, Pivot = `5`.
        *   Partitioning splits it into empty left and `[10, 15, 25]` right.
        *   Sorted: `[5, 10, 15, 25]`
    *   *Recursive Call 2 (Right Subarray)*: `[40, 50]`, Pivot = `40`.
        *   Partitioning splits it into empty left and `[50]` right.
        *   Sorted: `[40, 50]`
    *   **Final Sorted Array**: `[5, 10, 15, 25, 35, 40, 50]`
*   **(b) Discuss the best-case and worst-case time complexities of Quick Sort. Under what structural condition does the worst-case occur?** [3 Marks]
    *   *Best-Case Time Complexity*: $O(n \log n)$ — Occurs when the pivot consistently partitions the array into two equal halves.
    *   *Worst-Case Time Complexity*: $O(n^2)$ — Occurs when the pivot consistently partitions the array into highly unbalanced subproblems of size $0$ and $n-1$.
    *   *Structural Condition*: This worst-case occurs when the array is already sorted (ascending or descending) and we choose the first or last element as the pivot.

#### Q2. Queue Rearrangement using Queue Operations.
*   **(a) Write a step-by-step description of an algorithm to transform a queue containing `[1, 2, 3, 4, 5, 6]` (where `1` is at the front) into `[1, 3, 5, 2, 4, 6]` using ONLY standard enqueue and dequeue operations and auxiliary queues.** [4 Marks]
    1.  Initialize two auxiliary queues: `Q_odd` and `Q_even`.
    2.  Iterate through the original queue `Q1` until empty:
        *   Dequeue the front element.
        *   If the element is odd, enqueue it into `Q_odd`.
        *   If the element is even, enqueue it into `Q_even`.
    3.  Iterate through `Q_odd` until empty:
        *   Dequeue from `Q_odd` and enqueue into `Q1`.
    4.  Iterate through `Q_even` until empty:
        *   Dequeue from `Q_even` and enqueue into `Q1`.
*   **(b) Show the state of all queues after each step of the transformation.** [4 Marks]
    *   *Initial State*: `Q1 = [1, 2, 3, 4, 5, 6]`, `Q_odd = []`, `Q_even = []`
    *   *After Dequeuing Q1*:
        *   Element `1` dequeued $\Rightarrow$ `Q_odd = [1]`
        *   Element `2` dequeued $\Rightarrow$ `Q_even = [2]`
        *   Element `3` dequeued $\Rightarrow$ `Q_odd = [1, 3]`
        *   Element `4` dequeued $\Rightarrow$ `Q_even = [2, 4]`
        *   Element `5` dequeued $\Rightarrow$ `Q_odd = [1, 3, 5]`
        *   Element `6` dequeued $\Rightarrow$ `Q_even = [2, 4, 6]`
        *   *Intermediate State*: `Q1 = []`, `Q_odd = [1, 3, 5]`, `Q_even = [2, 4, 6]`
    *   *Enqueuing Odd Elements back to Q1*:
        *   `Q1 = [1, 3, 5]`, `Q_odd = []`
    *   *Enqueuing Even Elements back to Q1*:
        *   `Q1 = [1, 3, 5, 2, 4, 6]`, `Q_even = []`
    *   *Final State*: `Q1 = [1, 3, 5, 2, 4, 6]` (Rearrangement complete).

#### Q3. Tree Reconstruction & Traversals.
*   **(a) Construct a unique Binary Tree using the following traversals:** [5 Marks]
    *   **Preorder**: `P M H K R T W Y`
    *   **Inorder**: `H M K P W T Y R`
    *   **Reconstruction Steps**:
        1.  *Identify Root*: First element in preorder is `P` $\Rightarrow$ **Root = P**.
        2.  *Partition Inorder*: Find `P` in inorder sequence `H, M, K | P | W, T, Y, R`.
            *   Left subtree inorder: `H, M, K`
            *   Right subtree inorder: `W, T, Y, R`
        3.  *Construct Left Subtree*: Preorder elements are `M, H, K`.
            *   First is `M` $\Rightarrow$ **Root of left subtree = M**.
            *   Partition left inorder `H, M, K` around `M`: **Left child = H**, **Right child = K**.
        4.  *Construct Right Subtree*: Preorder elements are `R, T, W, Y`.
            *   First is `R` $\Rightarrow$ **Root of right subtree = R**.
            *   Partition right inorder `W, T, Y, R` around `R`: Left subtree inorder is `W, T, Y`, right is empty.
        5.  *Construct Left Subtree of R*: Preorder elements are `T, W, Y`.
            *   First is `T` $\Rightarrow$ **Root = T**.
            *   Partition inorder `W, T, Y` around `T`: **Left child = W**, **Right child = Y**.
        6.  *Final Tree Diagram*:
            ```
                      P
                    /   \
                   M     R
                  / \   /
                 H   K T
                      / \
                     W   Y
            ```
*   **(b) Find the unique Postorder traversal of the constructed tree.** [3 Marks]
    *   **Postorder Traversal (Left-Right-Root)**:
        *   Postorder of Left subtree: `H K M`
        *   Postorder of Right subtree: `W Y T R`
        *   Combined with root `P` $\Rightarrow$ **`H K M W Y T R P`**

#### Q4. Time Complexity of Snippets.
*   **Analyze the time complexity of the following code snippets and express them in Big-O notation:** [8 Marks]
*   **(a)** [2 Marks]
```python
for i in range(n):
    print(i)
```
*   *Analysis*: The loop executes sequentially exactly $n$ times. Time Complexity is **$O(n)$** (Linear).
*   **(b)** [3 Marks]
```python
i = 1
while i < n:
    i = i * 3
```
*   *Analysis*: In each iteration, $i$ is multiplied by 3. Its value grows exponentially: $1, 3, 9, 27, \dots, 3^k$. The loop terminates when $3^k \ge n \Rightarrow k \ge \log_3 n$. Time Complexity is **$O(\log n)$** (Logarithmic).
*   **(c)** [3 Marks]
```python
for i in range(n):
    for j in range(n):
        print(i, j)
```
*   *Analysis*: The outer loop runs $n$ times. For each iteration of the outer loop, the inner loop also runs $n$ times. The print statement is executed $n \times n = n^2$ times. Time Complexity is **$O(n^2)$** (Quadratic).
