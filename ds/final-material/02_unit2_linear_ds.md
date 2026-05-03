# Unit 2 — Linear Data Structures

## Arrays

**What is an Array?** A collection of elements stored in contiguous (side-by-side) memory locations. All elements must be the same type.

**Types:**
- **1D Array:** `arr = [10, 20, 30, 40]`
- **2D Array (Matrix):** `matrix = [[1,2],[3,4]]`
- **Static:** Fixed size (C arrays)
- **Dynamic:** Resizable (Python list, Java ArrayList)

**Complexity:**

| Operation | Time | Why |
|-----------|------|-----|
| Access arr[i] | O(1) | Direct index calculation |
| Search (unsorted) | O(n) | Must check each element |
| Insert at end | O(1) amortized | Python list append |
| Insert at middle | O(n) | Must shift elements right |
| Delete | O(n) | Must shift elements left |

**Array vs Linked List:**

| | Array | Linked List |
|-|-------|-------------|
| Memory | Contiguous | Scattered |
| Access | O(1) random | O(n) sequential |
| Insert/Delete | O(n) — shift | O(1) at known node |
| Size | Fixed/Dynamic | Always Dynamic |
| Cache friendly | YES | NO |

---

## Linked Lists ⭐ EXAM PRIORITY

**What is it?** A sequence of Nodes where each node has DATA + a NEXT pointer to the next node. Nodes are scattered in memory, connected by pointers.

```
HEAD → [10|→] → [20|→] → [30|None]
```

**The Node class (memorize this):**
```python
class Node:
    def __init__(self, data):
        self.data = data   # stores value
        self.next = None   # points to next node
```

### Singly Linked List
Each node points FORWARD only. `HEAD → A → B → C → None`

### Doubly Linked List
Each node has BOTH prev and next pointers.
`None ← A ↔ B ↔ C → None`
**Use case:** Browser history (back AND forward navigation)

### Circular Linked List
Last node's next points BACK to HEAD. No None at end.
`HEAD → A → B → C → (back to HEAD)`
**Use case:** Round-robin scheduling, music playlist loop

**Insert at HEAD — O(1):**
```python
new_node.next = self.head   # point new node to old head
self.head = new_node         # head now points to new node
```

**Traversal — O(n):**
```python
current = self.head
while current:
    print(current.data)
    current = current.next
```

**Delete by value — O(n):**
```python
# Special case: deleting head
if self.head.data == target:
    self.head = self.head.next
    return
# General case: find node BEFORE target
current = self.head
while current.next:
    if current.next.data == target:
        current.next = current.next.next  # skip target
        return
    current = current.next
```

**Complexity Summary:**

| Operation | Time |
|-----------|------|
| Insert at head | O(1) |
| Insert at tail | O(n) — walk to end first |
| Delete (known position) | O(1) |
| Delete (by value) | O(n) — search first |
| Search | O(n) |
| Traverse | O(n) |

**Real World Uses:**
- Browser history (Doubly Linked List)
- Undo/Redo in text editors
- Music playlists (Circular)
- Dynamic memory allocation

---

## Stacks (LIFO) ⭐ EXAM PRIORITY

**What is it?** Last In, First Out. Like a stack of plates — you add and remove from the TOP only.

```
     ┌───┐
     │ C │  ← TOP (last added, first removed)
     ├───┤
     │ B │
     ├───┤
     │ A │  ← BOTTOM (first added, last removed)
     └───┘
```

**ADT Operations:**

| Operation | Description | Complexity |
|-----------|-------------|------------|
| push(x) | Add to top | O(1) |
| pop() | Remove from top | O(1) |
| peek() | View top (don't remove) | O(1) |
| isEmpty() | Check if empty | O(1) |

**Python Implementation:**
```python
stack = []
stack.append(10)    # push
stack.append(20)
top = stack[-1]     # peek
stack.pop()         # pop → removes 20
```

**Real World Uses:**
- Function call stack (recursion uses this!)
- Infix to Postfix conversion
- Undo/Redo operations
- Browser back button
- DFS graph traversal

---

## Queues (FIFO) ⭐ EXAM PRIORITY

**What is it?** First In, First Out. Like a bank line — people join at REAR and leave from FRONT.

```
FRONT → [A] [B] [C] [D] ← REAR
dequeue ↑                  ↑ enqueue
```

**ADT Operations:**

| Operation | Description | Complexity |
|-----------|-------------|------------|
| enqueue(x) | Add to rear | O(1) |
| dequeue() | Remove from front | O(1) |
| peek() | View front element | O(1) |
| isEmpty() | Check if empty | O(1) |

**Python Implementation (use deque!):**
```python
from collections import deque
q = deque()
q.append(10)      # enqueue — add to rear
q.append(20)
q.popleft()       # dequeue — remove from front → returns 10
print(q[0])       # peek front
```

> Why deque and not list? Because list.pop(0) is O(n) — it shifts all elements. deque.popleft() is O(1). Always use deque for queues!

**Types of Queues:**
- **Simple Queue:** Basic FIFO
- **Circular Queue:** Rear connects to front — fixes wasted space
- **Priority Queue:** Elements have priorities, highest exits first (implemented with Heap)
- **Deque:** Insert/delete from BOTH ends

**Real World Uses:**
- CPU scheduling / Print queue
- BFS graph traversal
- Keyboard input buffer
- Call center waiting lines

---

## Stack vs Queue — KEY COMPARISON

| Feature | Stack | Queue |
|---------|-------|-------|
| Full Name | LIFO | FIFO |
| Add operation | push (top) | enqueue (rear) |
| Remove operation | pop (top) | dequeue (front) |
| Access ends | One end only | Two ends |
| Algorithm use | DFS, backtracking | BFS, scheduling |
| Real world | Undo, call stack | Printer, bank line |

## Viva Quick-Fire

**Q: What is a Linked List?**
A: A data structure where nodes are stored in non-contiguous memory. Each node contains data and a pointer (next) to the next node.

**Q: Difference between Array and Linked List?**
A: Arrays use contiguous memory with O(1) random access but O(n) insert/delete. Linked Lists use scattered memory with O(n) access but O(1) insert/delete at a known node.

**Q: What is LIFO?**
A: Last In, First Out. Stack uses LIFO — the last element pushed is the first to be popped.

**Q: What is FIFO?**
A: First In, First Out. Queue uses FIFO — the first element enqueued is the first to be dequeued.

**Q: What is the difference between Stack and Queue?**
A: Stack is LIFO (one end — top for both push and pop). Queue is FIFO (two ends — rear for enqueue, front for dequeue).

**Q: What is a Circular Linked List?**
A: A linked list where the last node's next pointer points back to the head instead of None. Used in round-robin scheduling.

**Q: What is a Doubly Linked List?**
A: Each node has two pointers — next and prev. Allows traversal in both directions. Used in browser history.

**Q: What is peek() in Stack?**
A: Returns the top element without removing it from the stack. O(1) operation.

**Q: Why use deque for Queue in Python?**
A: list.pop(0) is O(n) because it shifts all elements. deque.popleft() is O(1) — no shifting needed.

**Q: What is a Priority Queue?**
A: A queue where elements have priorities. The element with highest priority is dequeued first regardless of insertion order. Implemented using a Heap.
