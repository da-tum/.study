"""
====================================================
SORTING ALGORITHMS — Bubble, Merge, Quick Sort
====================================================

KEY VIVA COMPARISONS:
  Bubble: O(n²) stable, in-place, simple
  Merge:  O(n log n) stable, NOT in-place (O(n) space)
  Quick:  O(n log n) avg, unstable, in-place, fastest in practice
"""


# ============================================================
# 1. BUBBLE SORT — O(n²)
# ============================================================
def bubble_sort(arr):
    """
    Compare adjacent elements, swap if out of order.
    Largest element 'bubbles up' to end each pass.
    
    Stable: YES | In-place: YES
    Best: O(n) | Average: O(n²) | Worst: O(n²)
    """
    arr = arr.copy()  # don't modify original
    n = len(arr)
    
    for i in range(n - 1):            # n-1 passes
        swapped = False
        
        for j in range(n - 1 - i):   # -i because last i elements are sorted
            if arr[j] > arr[j + 1]:  # if out of order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # SWAP
                swapped = True
        
        # OPTIMIZATION: if no swaps occurred, array is already sorted
        if not swapped:
            break
    
    return arr


# ============================================================
# 2. MERGE SORT — O(n log n)
# ============================================================
def merge_sort(arr):
    """
    Divide array in half → sort each half → merge them.
    
    Stable: YES | In-place: NO (O(n) extra space)
    Best/Average/Worst: O(n log n)
    """
    if len(arr) <= 1:       # BASE CASE: single element is already sorted
        return arr
    
    # DIVIDE: find midpoint
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # recursively sort left half
    right = merge_sort(arr[mid:])   # recursively sort right half
    
    # MERGE: combine sorted halves
    return merge(left, right)


def merge(left, right):
    """
    Merge two sorted arrays into one sorted array.
    The KEY step of merge sort — O(n) time.
    """
    result = []
    i = j = 0
    
    # Compare elements from both halves, pick smaller
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:     # <= keeps it STABLE
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements (one side will have leftovers)
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result


# ============================================================
# 3. QUICK SORT — O(n log n) average
# ============================================================
def quick_sort(arr, low=None, high=None):
    """
    Choose pivot → partition (smaller left, larger right) → recurse.
    
    Stable: NO | In-place: YES
    Best/Average: O(n log n) | Worst: O(n²) (sorted input, bad pivot)
    """
    arr = arr if low is not None else arr.copy()
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        # Partition: put pivot in correct position
        pivot_index = partition(arr, low, high)
        
        # Recursively sort elements before and after pivot
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)
    
    return arr


def partition(arr, low, high):
    """
    Lomuto Partition Scheme:
    - Choose last element as pivot
    - Place all elements < pivot to the LEFT
    - Place all elements > pivot to the RIGHT
    - Put pivot in its CORRECT final position
    
    Returns the pivot's final index.
    """
    pivot = arr[high]   # choose last element as pivot
    i = low - 1         # i tracks boundary of smaller elements
    
    for j in range(low, high):
        if arr[j] <= pivot:         # if current < pivot
            i += 1                  # expand boundary
            arr[i], arr[j] = arr[j], arr[i]  # swap into smaller region
    
    # Place pivot in correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1  # return pivot's final index


# ============================================================
# HELPER: Print array with step details
# ============================================================
def print_array(arr, label=""):
    print(f"{label}: {arr}")


# ============================================================
# MAIN — Demo & Test All Three
# ============================================================
if __name__ == "__main__":
    
    original = [64, 34, 25, 12, 22, 11, 90]
    
    print("=" * 55)
    print(f"Original Array: {original}")
    print("=" * 55)

    # ---- BUBBLE SORT ----
    print("\n[BUBBLE SORT]")
    print("Logic: Compare adjacent pairs, swap if needed. Repeat.")

    arr = original.copy()
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        print(f"  After pass {i+1}: {arr}")
        if not swapped:
            break
    print(f"Sorted: {arr}")

    # ---- MERGE SORT ----
    print("\n[MERGE SORT]")
    print("Logic: Split -> sort halves -> merge")
    result = merge_sort(original)
    print(f"Sorted: {result}")

    # ---- QUICK SORT ----
    print("\n[QUICK SORT]")
    print("Logic: Pick pivot -> partition -> recurse on both sides")
    arr = original.copy()
    result = quick_sort(arr)
    print(f"Sorted: {result}")

    # ---- COMPARISON SUMMARY ----
    print("\n" + "=" * 55)
    print("COMPLEXITY SUMMARY")
    print("=" * 55)
    print(f"{'Algorithm':<15} {'Best':<15} {'Average':<15} {'Worst':<15} {'Space':<10} {'Stable'}")
    print("-" * 85)
    print(f"{'Bubble':<15} {'O(n)':<15} {'O(n²)':<15} {'O(n²)':<15} {'O(1)':<10} {'YES'}")
    print(f"{'Merge':<15} {'O(n log n)':<15} {'O(n log n)':<15} {'O(n log n)':<15} {'O(n)':<10} {'YES'}")
    print(f"{'Quick':<15} {'O(n log n)':<15} {'O(n log n)':<15} {'O(n²)':<15} {'O(log n)':<10} {'NO'}")


"""
VIVA QUICK-FIRE:

Q: How does Bubble Sort work?
A: Compare adjacent elements, swap if arr[j] > arr[j+1]. After each pass,
   the largest element is in its correct position.

Q: Why Bubble Sort O(n²)?
A: Two nested loops: outer (n-1 passes) × inner (n-1-i comparisons) = O(n²)

Q: How does Merge Sort work?
A: Divide array to halves recursively until 1 element, then merge sorted halves.

Q: Why is Merge Sort O(n log n)?
A: log n levels of division × O(n) to merge each level = O(n log n)

Q: Why is Merge Sort NOT in-place?
A: The merge step needs a temporary array to store merged result.

Q: How does Quick Sort work?
A: Pick pivot (usually last element), partition so smaller elements are left
   of pivot and larger are right, then recursively sort both partitions.

Q: When is Quick Sort O(n²)?
A: When pivot is always the smallest/largest (e.g., already sorted array).
   Fix: random pivot selection.

Q: Which sort is fastest in practice?
A: Quick Sort — great cache performance and small constant factors.
"""
