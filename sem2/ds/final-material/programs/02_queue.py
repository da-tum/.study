"""
====================================================
QUEUE — Complete Implementation (Exam Ready)
====================================================
Covers:
  - Queue using Python list (simple)
  - Queue using collections.deque (proper/efficient)
  - Queue using Linked List (manual implementation)
  - Operations: enqueue, dequeue, peek, isEmpty, size

KEY VIVA POINTS:
  - FIFO: First In, First Out
  - Enqueue = add to REAR
  - Dequeue = remove from FRONT
  - Real use: BFS, scheduling, printer queue
"""

from collections import deque


# ======================================
# METHOD 1: Queue using Python list
# (Simple — but dequeue is O(n))
# ======================================
class QueueUsingList:
    def __init__(self):
        self.queue = []

    def enqueue(self, data):
        self.queue.append(data)           # add to rear — O(1)
        print(f"Enqueued: {data}")

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty! Underflow.")
            return None
        removed = self.queue.pop(0)       # remove from front — O(n)!
        print(f"Dequeued: {removed}")
        return removed

    def peek(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

    def display(self):
        print("Front ->", self.queue, "<- Rear")


# ======================================
# METHOD 2: Queue using deque (BEST)
# Both enqueue and dequeue are O(1)
# ======================================
class QueueUsingDeque:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, data):
        self.queue.append(data)           # add to rear — O(1)
        print(f"Enqueued: {data}")

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty! Underflow.")
            return None
        removed = self.queue.popleft()    # remove from front — O(1)!
        print(f"Dequeued: {removed}")
        return removed

    def peek(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

    def display(self):
        print("Front ->", list(self.queue), "<- Rear")


# ======================================
# METHOD 3: Queue using Linked List
# (Manual — shows deep understanding)
# ======================================
class QNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class QueueLinkedList:
    def __init__(self):
        self.front = None   # points to front node (for dequeue)
        self.rear = None    # points to rear node (for enqueue)
        self._size = 0

    def enqueue(self, data):
        new_node = QNode(data)
        if self.rear is None:           # empty queue
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node   # link to end
            self.rear = new_node        # update rear
        self._size += 1
        print(f"Enqueued: {data}")

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty! Underflow.")
            return None
        removed = self.front.data
        self.front = self.front.next    # move front forward
        if self.front is None:          # queue became empty
            self.rear = None
        self._size -= 1
        print(f"Dequeued: {removed}")
        return removed

    def peek(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.front.data

    def is_empty(self):
        return self.front is None

    def size(self):
        return self._size

    def display(self):
        current = self.front
        elements = []
        while current:
            elements.append(str(current.data))
            current = current.next
        print("Front -> [" + " -> ".join(elements) + "] <- Rear")


# =======================
# MAIN — Demo & Test
# =======================
if __name__ == "__main__":
    print("=" * 50)
    print("QUEUE DEMO (using deque - recommended)")
    print("=" * 50)
    q = QueueUsingDeque()

    print("\n--- Enqueue operations ---")
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.enqueue(40)
    q.display()

    print(f"\nPeek (front): {q.peek()}")
    print(f"Size: {q.size()}")

    print("\n--- Dequeue operations ---")
    q.dequeue()
    q.dequeue()
    q.display()

    print(f"\nIs empty? {q.is_empty()}")
    q.dequeue()
    q.dequeue()
    q.dequeue()   # underflow check

    print("\n" + "=" * 50)
    print("QUEUE DEMO (using Linked List)")
    print("=" * 50)
    ql = QueueLinkedList()
    ql.enqueue("A")
    ql.enqueue("B")
    ql.enqueue("C")
    ql.display()
    ql.dequeue()
    ql.display()


"""
EXPECTED OUTPUT:

=== QUEUE DEMO (using deque) ===
Enqueued: 10
Enqueued: 20
Enqueued: 30
Enqueued: 40
Front → [10, 20, 30, 40] ← Rear

Peek (front): 10
Size: 4

--- Dequeue operations ---
Dequeued: 10
Dequeued: 20
Front → [30, 40] ← Rear

Is empty? False
Dequeued: 30
Dequeued: 40
Queue is empty! Underflow.

=== QUEUE DEMO (using Linked List) ===
Enqueued: A, B, C
Front → [A → B → C] ← Rear
Dequeued: A
Front → [B → C] ← Rear
"""
