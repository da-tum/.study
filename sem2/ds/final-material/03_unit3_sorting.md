# Unit 3 — Sorting Algorithms

## Key Terminology

| Term | Meaning | Examples |
|------|---------|---------|
| Stable | Equal elements keep their original relative order | Bubble, Merge, Insertion |
| Unstable | Equal elements may swap positions | Quick, Heap, Selection |
| In-place | Uses O(1) extra space | Bubble, Selection, Insertion, Quick, Heap |
| Out-of-place | Needs extra memory | Merge Sort — O(n) extra |
| Comparison sort | Compares element pairs | Bubble, Merge, Quick, Heap |
| Non-comparison | Uses digit/count values | Counting Sort, Radix Sort |

---

## Bubble Sort ⭐ EXAM PRIORITY

**Idea:** Compare adjacent elements. If left > right, swap them. The largest element "bubbles up" to its correct position after each pass.

**Step-by-step with [64, 34, 25, 12]:**
```
Pass 1: compare (64,34) → swap → compare (64,25) → swap → compare (64,12) → swap
        [34, 25, 12, 64]   ← 64 is in final position!
Pass 2: [25, 12, 34, 64]
Pass 3: [12, 25, 34, 64]   ← sorted!
```

**The Code (memorize this pattern):**
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):           # n-1 passes
        swapped = False
        for j in range(n - 1 - i):   # -i because last i are sorted
            if arr[j] > arr[j + 1]:  # wrong order?
                arr[j], arr[j+1] = arr[j+1], arr[j]  # swap!
                swapped = True
        if not swapped:               # already sorted — optimization
            break
    return arr
```

| Case | Time | Space |
|------|------|-------|
| Best (sorted array) | O(n) | O(1) |
| Average | O(n²) | O(1) |
| Worst (reverse sorted) | O(n²) | O(1) |

**Stable: YES | In-place: YES**

---

## Insertion Sort

**Idea:** Like sorting playing cards in your hand. Pick one card, slide it into the correct position in your already-sorted hand.

```
[5, 2, 4, 6, 1]
Take 2: insert before 5 → [2, 5, 4, 6, 1]
Take 4: insert between 2 and 5 → [2, 4, 5, 6, 1]
Take 1: insert at start → [1, 2, 4, 5, 6]
```

**Best case O(n) — great for nearly-sorted data!**
**Stable: YES | In-place: YES**

---

## Selection Sort

**Idea:** Find the minimum in the unsorted portion, place it at the start. Repeat.

O(n²) always. Unstable. In-place.

---

## Merge Sort ⭐ EXAM PRIORITY

**Idea:** Divide & Conquer. Keep splitting array in half until you have individual elements (already sorted). Then merge sorted halves back together.

**Trace with [38, 27, 43, 3]:**
```
DIVIDE:
[38, 27, 43, 3]
  [38, 27]    [43, 3]
  [38] [27]   [43] [3]

MERGE (each pair in sorted order):
  [27, 38]    [3, 43]
[3, 27, 38, 43]  ← done!
```

**The TWO functions (learn separately!):**
```python
# Function 1: SPLIT (just divides recursively)
def merge_sort(arr):
    if len(arr) <= 1:        # BASE CASE: single element is sorted
        return arr
    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])   # sort left half
    right = merge_sort(arr[mid:])   # sort right half
    return merge(left, right)       # merge sorted halves

# Function 2: MERGE (the actual work happens here)
def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:   # <= makes it STABLE
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])    # add remaining
    result.extend(right[j:])
    return result
```

| Case | Time | Space |
|------|------|-------|
| Best | O(n log n) | O(n) |
| Average | O(n log n) | O(n) |
| Worst | O(n log n) | O(n) |

**Stable: YES | In-place: NO — needs O(n) extra memory**

> Why O(n log n)? → log n levels of splitting × O(n) work to merge each level = O(n log n)

---

## Quick Sort ⭐ EXAM PRIORITY

**Idea:** Choose a PIVOT element. Partition the array so all elements < pivot go LEFT, all > pivot go RIGHT. Pivot is now in its FINAL correct position! Recursively sort left and right sides.

**Trace with [10, 7, 8, 9, 1, 5], pivot = 5 (last element):**
```
Walk left to right, put elements <= 5 on left side:
1 ≤ 5 → left side
Result: [1, 5, 8, 9, 7, 10]
         ↑ ← 5 is in final position! → ↑
Sort [1] and [8, 9, 7, 10] separately → done!
```

**The Partition function (memorize this):**
```python
def partition(arr, low, high):
    pivot = arr[high]     # choose last element as pivot
    i = low - 1           # i = boundary of smaller elements

    for j in range(low, high):
        if arr[j] <= pivot:         # if current <= pivot
            i += 1                  # expand smaller boundary
            arr[i], arr[j] = arr[j], arr[i]  # swap into smaller zone

    # Place pivot in its correct final position
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1   # return pivot's final index

def quick_sort(arr, low, high):
    if low < high:
        pivot_idx = partition(arr, low, high)
        quick_sort(arr, low, pivot_idx - 1)   # sort left
        quick_sort(arr, pivot_idx + 1, high)  # sort right
```

| Case | Time | Space |
|------|------|-------|
| Best | O(n log n) | O(log n) |
| Average | O(n log n) | O(log n) |
| Worst (sorted input) | O(n²) | O(n) |

**Stable: NO | In-place: YES | Fastest in practice**

> Worst case happens when pivot is always min or max (e.g., sorted array). Fix: random pivot selection.

---

## Heap Sort

Build a Max-Heap from array → repeatedly extract the max and place at end.

O(n log n) always | O(1) space | Unstable | In-place

---

## Non-Comparison Sorts (Conceptual)

**Counting Sort:** Count frequency of each element. Works only for integers in a known range [0, k]. Time: O(n+k). Stable.

**Radix Sort:** Sort digit by digit (least to most significant). Uses Counting Sort internally. Time: O(d × (n+k)).

---

## THE MASTER TABLE — Memorize This!

| Algorithm | Best | Average | Worst | Space | Stable | In-place |
|-----------|------|---------|-------|-------|--------|----------|
| Bubble | O(n) | O(n²) | O(n²) | O(1) | YES | YES |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | NO | YES |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | YES | YES |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | YES | NO |
| Quick | O(n log n) | O(n log n) | O(n²) | O(log n) | NO | YES |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | NO | YES |
| Counting | O(n+k) | O(n+k) | O(n+k) | O(k) | YES | NO |

---

## Viva Quick-Fire

**Q: What is a stable sort?**
A: A sort where equal elements maintain their original relative order. Bubble, Merge, Insertion are stable.

**Q: Which sort has guaranteed O(n log n) in ALL cases?**
A: Merge Sort and Heap Sort.

**Q: Why is Merge Sort O(n) space?**
A: It needs an auxiliary array to merge two sorted halves — cannot merge in-place.

**Q: When is Quick Sort worst case O(n²)?**
A: When the pivot is always the smallest or largest element — happens with sorted/reverse sorted arrays and bad pivot choice.

**Q: How does Bubble Sort work?**
A: Repeatedly compares adjacent elements and swaps if arr[j] > arr[j+1]. After each pass, the largest unsorted element reaches its correct position at the end.

**Q: What is a pivot in Quick Sort?**
A: An element used to partition the array. All elements smaller than pivot go left, all larger go right. The pivot ends up in its final sorted position.

**Q: Which sort is fastest in practice?**
A: Quick Sort — excellent cache performance and low constant factors despite O(n²) worst case.

**Q: Best sort for nearly-sorted data?**
A: Insertion Sort — best case O(n).

**Q: Best sort for linked lists?**
A: Merge Sort — doesn't require random access.
