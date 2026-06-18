# Last 10-Minute Exam Cheatsheet ⚡

> **How to use this:** Read this right before you walk into the exam hall. Do not try to learn new things here, just use it to trigger your memory.

---

## ⏱️ Time Complexity Cheat Codes

| Data Structure / Algo | Best | Average | Worst | Key Characteristic |
| :--- | :--- | :--- | :--- | :--- |
| **Array Access** | O(1) | O(1) | O(1) | Instant index lookup |
| **Array Insert/Del** | O(n) | O(n) | O(n) | Must shift elements |
| **Linked List Access** | O(n) | O(n) | O(n) | Must traverse from head |
| **Linked List Insert** | O(1) | O(1) | O(1) | *If position is known* |
| **Stack (Push/Pop)** | O(1) | O(1) | O(1) | Top only |
| **Queue (Enq/Deq)** | O(1) | O(1) | O(1) | Front/Rear only |
| **Bubble Sort** | O(n) | O(n²) | O(n²) | Compare adjacent |
| **Merge Sort** | O(n log n)| O(n log n)| O(n log n)| Divide & Conquer (needs memory) |
| **Quick Sort** | O(n log n)| O(n log n)| O(n²) | Pivot based (fastest in practice) |
| **BST Search** | O(log n) | O(log n) | O(n) | Skewed tree = worst case |
| **Hash Table** | O(1) | O(1) | O(n) | Worst case = many collisions |

---

## 🧩 The "Explain Like I'm 5" Anchors

If your mind goes blank, remember these real-world objects:

*   **Linked List:** A Train. Carriages connected by hooks. Easy to add a carriage, hard to find the 50th carriage.
*   **Stack:** A Stack of Plates. Last plate put down is the first one picked up (LIFO).
*   **Queue:** A Movie Ticket Line. First person in line gets the ticket first (FIFO).
*   **Bubble Sort:** Bubbles rising. Largest items float to the end one by one.
*   **Merge Sort:** Sorting a deck of cards by tearing it in half until you have single cards, then pairing them back up.
*   **Quick Sort:** Picking a leader (pivot). Shorter people go left, taller people go right.
*   **BST:** A family tree where left children are always smaller, right children always bigger.

---

## 💻 3-Line Code Skeletons

**1. Linked List Traversal:**
```python
current = self.head
while current:
    print(current.data)
    current = current.next
```

**2. Queue with Deque:**
```python
from collections import deque
q = deque()
q.append(x)     # Insert
q.popleft()     # Delete
```

**3. BST Inorder Traversal (Always Sorted!):**
```python
def inorder(node):
    if node:
        inorder(node.left)
        print(node.data)
        inorder(node.right)
```

**4. Bubble Sort Swap Logic:**
```python
if arr[j] > arr[j+1]:
    arr[j], arr[j+1] = arr[j+1], arr[j]
```

---

## 🗣️ Viva Survival Phrases

If you get stuck during the viva, use these phrases to show you know what you're talking about:

*   *"I used a **deque** instead of a list because list.pop(0) is **O(n)**, but deque is **O(1)**."*
*   *"Merge Sort guarantees **O(n log n)**, but it requires extra memory, so it is **not in-place**."*
*   *"Quick Sort's worst-case is **O(n²)**, but in practice, it is the fastest because of **cache locality**."*
*   *"In a Binary Search Tree, an **In-Order Traversal** will always return the elements in sorted order."*
*   *"Postfix notation is better for computers because it doesn't require **parentheses** or **BODMAS rules**, so we can evaluate it linearly using a **Stack**."*

**Deep Breath. You've got this. Good luck! 🚀**
