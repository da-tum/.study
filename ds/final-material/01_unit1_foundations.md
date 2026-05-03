# 📘 UNIT 1 — Foundations & Algorithmic Analysis
> Target: Read in 60 minutes | CO1

---

## 1.1 Data Structures & ADTs

### What is a Data Structure?
A **Data Structure** is a way of organizing and storing data in memory so that it can be accessed and modified efficiently.

**Two types:**
- **Primitive**: int, float, char, bool
- **Non-Primitive**: Arrays, Linked Lists, Trees, Graphs, etc.

### What is an ADT (Abstract Data Type)?
An **ADT** is a *logical description* of how data is organized and what operations can be performed — WITHOUT worrying about implementation details.

```
ADT = Data + Operations (no implementation detail)
Example: Stack ADT → push(), pop(), peek(), isEmpty()
         You don't care if it's implemented via array or linked list
```

**Why ADTs?** → Separation of concerns. The user of the ADT doesn't need to know HOW it works.

### Common Operations on Data Structures:
| Operation | Description |
|-----------|-------------|
| **Traversal** | Visit every element once |
| **Insertion** | Add a new element |
| **Deletion** | Remove an element |
| **Searching** | Find an element |
| **Sorting** | Arrange elements in order |
| **Merging** | Combine two structures |

---

## 1.2 Algorithm Analysis — The BIG PICTURE

> "Before coding, ask: HOW LONG will this take? HOW MUCH MEMORY?"

### Time Complexity
How the **runtime** grows as input size `n` increases.

### Space Complexity
How **memory usage** grows as input size `n` increases.

---

## 1.3 Big O Notation — MASTER THIS!

Big O describes the **upper bound** (worst case).

```
O(f(n)) = algorithm's growth rate
```

### The Complexity Ladder (Best → Worst):

| Notation | Name | Example |
|----------|------|---------|
| **O(1)** | Constant | Array access `arr[i]`, hash lookup |
| **O(log n)** | Logarithmic | Binary search |
| **O(n)** | Linear | Linear search, single loop |
| **O(n log n)** | Linearithmic | Merge sort, Quick sort (avg) |
| **O(n²)** | Quadratic | Bubble sort, nested loops |
| **O(n³)** | Cubic | Triple nested loops |
| **O(2ⁿ)** | Exponential | Fibonacci (naive recursive) |
| **O(n!)** | Factorial | Permutations, traveling salesman brute force |

### Visual Memory Trick:
```
1 < log n < n < n log n < n² < n³ < 2ⁿ < n!
FAST ←————————————————————————————→ SLOW
```

### Big Omega (Ω) — Lower Bound (Best Case)
```
Ω(n) = best-case scenario
Example: Linear search finds element at index 0 → Ω(1)
```

### Big Theta (Θ) — Tight Bound (Average Case)
```
Θ(n) = both upper AND lower bound match
Example: Linear search in average case → Θ(n)
```

### Simplification Rules:
```python
# Rule 1: Drop constants
O(2n) → O(n)
O(100) → O(1)

# Rule 2: Drop lower order terms
O(n² + n) → O(n²)
O(n + log n) → O(n)

# Rule 3: Different inputs = different variables
def func(a, b):        # O(a + b), NOT O(n)
    for x in a: ...
    for y in b: ...
```

### Examples to Know:

```python
# O(1) — constant
def get_first(arr):
    return arr[0]

# O(n) — linear
def find(arr, target):
    for item in arr:
        if item == target:
            return True

# O(n²) — quadratic
def bubble(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):  # nested loop!
            ...

# O(log n) — binary search
def binary_search(arr, target):
    lo, hi = 0, len(arr)-1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
```

---

## 1.4 Cases: Best / Average / Worst

| Case | Meaning | Example (Linear Search) |
|------|---------|------------------------|
| **Best** | Most favorable input | Element is at index 0 → O(1) |
| **Average** | Typical/random input | Element is in the middle → O(n/2) = O(n) |
| **Worst** | Least favorable input | Element not in list → O(n) |

---

## 1.5 Algorithm Design Paradigms

### 1. Divide & Conquer
```
Split problem → Solve subproblems recursively → Combine results
Examples: Merge Sort, Quick Sort, Binary Search
```

### 2. Greedy
```
At each step, pick the locally optimal choice
Hope: local optima → global optimum
Examples: Dijkstra's shortest path, Huffman encoding
Note: Doesn't always give the BEST answer globally
```

### 3. Dynamic Programming (DP)
```
Break into overlapping subproblems → Store results (memoization)
Avoid recomputing the same subproblems
Examples: Fibonacci, Knapsack, Longest Common Subsequence
```

| Paradigm | Key Idea | Examples |
|----------|----------|----------|
| Divide & Conquer | Split, solve, merge | Merge Sort, Quick Sort |
| Greedy | Best local choice | Dijkstra, Huffman |
| Dynamic Programming | Memoize overlapping subproblems | Fibonacci, Knapsack |

---

## 1.6 Recursion

### What is Recursion?
A function that **calls itself** to solve a smaller version of the same problem.

### Two Essential Parts:
1. **Base Case** — The stopping condition (prevents infinite loop)
2. **Recursive Case** — The function calling itself with a smaller input

```python
# Classic: Factorial
def factorial(n):
    if n == 0:          # BASE CASE
        return 1
    return n * factorial(n - 1)  # RECURSIVE CASE

# Classic: Fibonacci
def fib(n):
    if n <= 1:          # BASE CASE
        return n
    return fib(n-1) + fib(n-2)  # RECURSIVE CASE
```

### The Call Stack
```
factorial(4)
  → 4 * factorial(3)
       → 3 * factorial(2)
            → 2 * factorial(1)
                 → 1 * factorial(0)
                      → returns 1
```
Each function call is pushed onto the **call stack** and popped when it returns.

> ⚠️ **Stack Overflow** = too many recursive calls, call stack runs out of memory!

### Recursion vs Iteration
| | Recursion | Iteration |
|-|-----------|-----------|
| Memory | O(n) call stack | O(1) usually |
| Readability | Cleaner for trees/graphs | Better for simple loops |
| Risk | Stack overflow | None |

---

## 🎯 UNIT 1 VIVA QUICK-FIRE

**Q: What is Big O?**
A: Upper bound of an algorithm's time complexity — worst-case growth rate.

**Q: What's O(log n)?**
A: Binary search — each step halves the input.

**Q: Difference between O, Ω, Θ?**
A: O = worst case upper bound, Ω = best case lower bound, Θ = tight/average bound.

**Q: What is an ADT?**
A: A mathematical model of a data type with defined operations but no implementation details.

**Q: What is the base case in recursion?**
A: The condition that stops recursion. Without it, you get infinite recursion / stack overflow.

**Q: What is Divide & Conquer?**
A: Break problem into smaller subproblems, solve recursively, then combine results. Example: Merge Sort.
