// Competitive Coding I (CC-1) Sessions 1 to 12 Comprehensive Master Data
// Auto-generated with Variable Bifurcation, Intuitions, Formulations & Python-Only Solutions
window.CC1_PROBLEMS = [
  {
    "id": "session-1-complexity",
    "session": 1,
    "sessionTitle": "Session 1: Introduction to Problem Solving",
    "topic": "Foundations",
    "title": "Time & Space Complexity & Problem Constraints Analysis",
    "lcNum": "Foundation / LeetCode Guide",
    "link": "https://leetcode.com/explore/interview/card/cheatsheets/720/resources/4725/",
    "difficulty": "Foundational",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Core foundational methodology to deduce target algorithm from problem constraints before coding.",
    "subField": "Foundations",
    "problemStatement": "Given an input constraint N in competitive programming platforms (LeetCode, CodeChef, Codeforces), deduce the required asymptotic time complexity to prevent Time Limit Exceeded (TLE) under standard 1.0s CPU budget (~10^8 elementary operations).",
    "intuition": "Standard contest servers execute approximately 10^7 to 10^8 operations per second. By examining the constraint on N, we can immediately eliminate incorrect algorithmic designs before writing a single line of code. If N <= 10^5, an O(N^2) solution will require 10^10 operations, guaranteeing TLE, whereas O(N log N) requires ~1.7 * 10^6 operations, executing in ~0.02s.",
    "formulation": "Formula: Required Operations \u2248 f(N) \u2264 10^8 operations.\n\u2022 N \u2264 10-12  \u27f9 O(N!) or O(N\u00b2 \u00b7 2^N) [Permutations, TSP, Bitmask DP]\n\u2022 N \u2264 20-25  \u27f9 O(2^N) [Subsets, Backtracking, Meet-in-the-Middle]\n\u2022 N \u2264 100    \u27f9 O(N\u2074) or O(N\u00b3) [Floyd-Warshall, Matrix Mult]\n\u2022 N \u2264 1,000  \u27f9 O(N\u00b2) [Nested loops, Dynamic Programming]\n\u2022 N \u2264 100,000\u27f9 O(N log N) or O(N) [Sorting, Binary Search, Heaps, Sliding Window]\n\u2022 N \u2264 10^9   \u27f9 O(log N) or O(\u221aN) or O(1) [Binary Search on Answer, Prime Factorization, Math]",
    "variableBifurcation": [
      {
        "name": "N",
        "type": "int / long long",
        "init": "Input size constraint",
        "role": "Maximum dimension of the problem instance",
        "update": "Static bound given in problem statement"
      },
      {
        "name": "ops_limit",
        "type": "double",
        "init": "1e8",
        "role": "Maximum clock cycle operations per second threshold",
        "update": "Fixed platform runtime constant"
      },
      {
        "name": "target_O",
        "type": "string",
        "init": "O(N log N) or O(N)",
        "role": "Algorithmic class budget allowable within time limits",
        "update": "Derived via ceiling evaluation"
      }
    ],
    "methods": [
      {
        "name": "Constraints-to-Algorithm Mapping (Rule of Thumb)",
        "time": "O(1) deduction",
        "space": "O(1)",
        "desc": "Check bounds on N and array values. If array values up to 10^9, consider binary search on answer or coordinate compression.",
        "formula": "T(n) <= 10^8 ops / sec"
      }
    ],
    "code": {
      "py": "import sys\n\ndef solve():\n    # Fast I/O in Python\n    input_data = sys.stdin.read().split()\n    if not input_data:\n        return\n    n = int(input_data[0])\n    # Target: Python executes ~2-5 * 10^7 ops/sec; keep N <= 10^5 in O(N) or O(N log N)\n    print(f\"Max ops for N={n}: limit to <= 10^8 in C++, ~3*10^7 in Python\")\n\nif __name__ == '__main__':\n    solve()"
    },
    "timeComplexity": "O(1) analytical deduction",
    "spaceComplexity": "O(1) analytical deduction"
  },
  {
    "id": "session-2-factorial",
    "session": 2,
    "sessionTitle": "Session 2: Recursion I",
    "topic": "Recursion",
    "title": "Factorial of a Number (n!)",
    "lcNum": "GfG Factorial",
    "link": "https://www.geeksforgeeks.org/problems/factorial5739/1",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Recursion 1): Fundamental base-case and recursive call stack mental model.",
    "subField": "Recursion 1",
    "problemStatement": "Given an integer n (n >= 0), calculate n! = n * (n-1) * (n-2) * ... * 1. By mathematical definition, 0! = 1.",
    "intuition": "Recursion breaks a problem into identical smaller subproblems. To calculate n!, we recognize that if we already knew the factorial of (n-1), we would simply multiply it by n. The recursion terminates at the base case n <= 1, where the answer is known without further subproblem delegation.",
    "formulation": "Recurrence Relation: F(n) = n * F(n-1) for n > 1\nBase Case: F(0) = 1, F(1) = 1\nCall Stack Depth: n frames allocated sequentially, then unwound with multiplication results.",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "int / long long",
        "init": "Input integer",
        "role": "State tracker representing the current integer being multiplied",
        "update": "Decrements by 1 on each recursive call: n - 1"
      },
      {
        "name": "return val",
        "type": "long long",
        "init": "1 at base case",
        "role": "Accumulated product returned up the call stack to parent frame",
        "update": "Parent frame computes n * child_return_val"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Head Recursion (Standard Call Stack)",
        "time": "O(n)",
        "space": "O(n) auxiliary stack",
        "desc": "Recurse until base case n <= 1, then multiply during unwinding phase."
      },
      {
        "name": "Method 2: Iterative / Tail Optimization",
        "time": "O(n)",
        "space": "O(1) auxiliary",
        "desc": "Multiply iteratively in a single loop from 1 to n to avoid stack overflow for large n."
      }
    ],
    "code": {
      "py": "def factorial(n: int) -> int:\n    # Base case: 0! = 1, 1! = 1\n    if n <= 1:\n        return 1\n    # Recurrence relation: n * fact(n-1)\n    return n * factorial(n - 1)\n\nif __name__ == '__main__':\n    print(\"Factorial of 5:\", factorial(5))"
    },
    "timeComplexity": "O(N) - exactly N recursive function calls",
    "spaceComplexity": "O(N) - recursion call stack depth of N frames"
  },
  {
    "id": "session-2-power",
    "session": 2,
    "sessionTitle": "Session 2: Recursion I",
    "topic": "Recursion",
    "title": "Power of a Number (Pow(x, n) / Binary Exponentiation)",
    "lcNum": "LeetCode 50",
    "link": "https://leetcode.com/problems/powx-n/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Recursion 1): Logarithmic divide & conquer exponentiation. Beware 32-bit integer overflow when n = -2^31.",
    "subField": "Recursion 1",
    "problemStatement": "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n). Constraints: -100.0 < x < 100.0, -2^31 <= n <= 2^31 - 1.",
    "intuition": "Multiplying x by itself n times takes O(n) steps, causing TLE when n = 2^31 - 1 (~2 * 10^9 operations). Binary exponentiation uses divide & conquer: if n is even, x^n = (x^2)^(n/2). If n is odd, x^n = x * x^(n-1). This cuts the exponent in half at every step, dropping runtime from 2 billion operations to just 31 operations!",
    "formulation": "Mathematical Recurrence:\n\u2022 x^0 = 1\n\u2022 If n < 0: x^n = 1 / (x^(-n))\n\u2022 If n is even: x^n = (x * x)^(n / 2)\n\u2022 If n is odd:  x^n = x * (x * x)^((n - 1) / 2)\nTime: O(log\u2082 n)",
    "variableBifurcation": [
      {
        "name": "x",
        "type": "double",
        "init": "Input base",
        "role": "Base value being multiplied",
        "update": "Squared at each even exponent step: x = x * x"
      },
      {
        "name": "n",
        "type": "long long",
        "init": "Input exponent",
        "role": "Target power (cast to int64/long to prevent overflow when negating -2^31)",
        "update": "Halved at each step: n / 2"
      },
      {
        "name": "ans",
        "type": "double",
        "init": "1.0",
        "role": "Accumulator of odd residual factors in iterative variant",
        "update": "ans = ans * current_base when n % 2 == 1"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Recursive Divide & Conquer",
        "time": "O(log n)",
        "space": "O(log n) stack",
        "desc": "Recurse on half power: double half = myPow(x, n/2); if even return half*half, else return half*half*x."
      },
      {
        "name": "Method 2: Iterative Binary Exponentiation",
        "time": "O(log n)",
        "space": "O(1) space",
        "desc": "Extract binary bits of n. When least significant bit is 1, multiply ans by x. Square x and right shift n."
      }
    ],
    "code": {
      "py": "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0:\n            x = 1.0 / x\n            n = -n\n        ans = 1.0\n        curr = x\n        while n > 0:\n            if n % 2 == 1:\n                ans *= curr\n            curr *= curr\n            n //= 2\n        return ans\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"2^10 =\", sol.myPow(2.0, 10))\n    print(\"2^-2 =\", sol.myPow(2.0, -2))"
    },
    "timeComplexity": "O(log N) - exponent halved on each step",
    "spaceComplexity": "O(1) - auxiliary space in iterative version (O(log N) stack for recursive)"
  },
  {
    "id": "session-2-print-seq",
    "session": 2,
    "sessionTitle": "Session 2: Recursion I",
    "topic": "Recursion",
    "title": "Print Increasing, Decreasing, and Decreasing-Increasing Recursively",
    "lcNum": "GfG Print Pattern",
    "link": "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Illustrates call stack execution order: Pre-order (before call) vs Post-order (after call).",
    "subField": "Recursion 1",
    "problemStatement": "Given a positive integer N, print numbers from 1 to N (increasing), N to 1 (decreasing), and N down to 1 back to N (decreasing-increasing) without using any loops.",
    "intuition": "The position of the print statement relative to the recursive call determines the output order. Code placed BEFORE the recursive call executes while the call stack is growing (Pre-order / Decreasing). Code placed AFTER the recursive call executes while the call stack is shrinking (Post-order / Increasing).",
    "formulation": "\u2022 Decreasing (N to 1): print(n) -> recurse(n-1)\n\u2022 Increasing (1 to N): recurse(n-1) -> print(n)\n\u2022 Decreasing-Increasing: print(n) -> recurse(n-1) -> print(n)",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "int",
        "init": "Input count",
        "role": "Current depth counter",
        "update": "Decrements to n - 1 until base case n == 0"
      }
    ],
    "methods": [
      {
        "name": "Pre-order vs Post-order Call Stack Execution",
        "time": "O(n)",
        "space": "O(n) stack",
        "desc": "Leverage call stack activation records to reverse the execution order naturally."
      }
    ],
    "code": {
      "py": "def print_increasing(n: int):\n    if n == 0:\n        return\n    print_increasing(n - 1)\n    print(n, end=\" \")\n\ndef print_decreasing(n: int):\n    if n == 0:\n        return\n    print(n, end=\" \")\n    print_decreasing(n - 1)\n\nif __name__ == '__main__':\n    print(\"Increasing:\")\n    print_increasing(5)\n    print(\"\\nDecreasing:\")\n    print_decreasing(5)"
    },
    "timeComplexity": "O(N) - visits each integer once",
    "spaceComplexity": "O(N) - recursion call stack depth of N"
  },
  {
    "id": "session-2-count-digits",
    "session": 2,
    "sessionTitle": "Session 2: Recursion I",
    "topic": "Recursion",
    "title": "Count Digits using Recursion",
    "lcNum": "GfG Count Digits",
    "link": "https://www.geeksforgeeks.org/problems/count-digits5716/1",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Base case detection on base-10 integer truncation.",
    "subField": "Recursion 1",
    "problemStatement": "Given a positive integer N, count the number of digits in N using recursion.",
    "intuition": "Dividing any non-zero integer by 10 removes its rightmost digit. Base case: If n < 10, exactly 1 digit remains. Otherwise, count is 1 + countDigits(n / 10).",
    "formulation": "count(n) = 1 if n < 10 else 1 + count(n // 10)\nNumber of steps: floor(log10(N)) + 1",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "long long",
        "init": "Input number",
        "role": "Number being truncated",
        "update": "n = n / 10 at each recursive step"
      }
    ],
    "methods": [
      {
        "name": "Recursive Truncation",
        "time": "O(log10 n)",
        "space": "O(log10 n) stack",
        "desc": "Recursively strip digits by division by 10 until base case n < 10."
      }
    ],
    "code": {
      "py": "def count_digits(n: int) -> int:\n    n = abs(n)\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)\n\nif __name__ == '__main__':\n    print(\"Digits in 12345:\", count_digits(12345))"
    },
    "timeComplexity": "O(log\u2081\u2080 N) - number of digits in N",
    "spaceComplexity": "O(log\u2081\u2080 N) - call stack frames"
  },
  {
    "id": "session-2-sum-array",
    "session": 2,
    "sessionTitle": "Session 2: Recursion I",
    "topic": "Recursion",
    "title": "Sum of Array using Recursion",
    "lcNum": "GfG Sum of Array",
    "link": "https://www.geeksforgeeks.org/problems/sum-of-array-elements2502/1",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Linear array traversal decomposed into index boundary induction.",
    "subField": "Recursion 1",
    "problemStatement": "Given an array of N integers, find the sum of all elements using recursion.",
    "intuition": "The sum of an array from index i to N-1 is arr[i] + sum(arr, i + 1, N). When i == N, the subarray is empty, yielding 0.",
    "formulation": "Sum(arr, i) = 0 if i == n else arr[i] + Sum(arr, i + 1)",
    "variableBifurcation": [
      {
        "name": "arr",
        "type": "int[]",
        "init": "Array",
        "role": "Data buffer",
        "update": "Immutable read-only"
      },
      {
        "name": "idx",
        "type": "int",
        "init": "0",
        "role": "Current head index",
        "update": "idx + 1 each call"
      }
    ],
    "methods": [
      {
        "name": "Index Pointer Recursion",
        "time": "O(n)",
        "space": "O(n) stack",
        "desc": "Pass index pointer idx from 0 to N-1."
      }
    ],
    "code": {
      "py": "def array_sum(arr: list[int], idx: int = 0) -> int:\n    if idx == len(arr):\n        return 0\n    return arr[idx] + array_sum(arr, idx + 1)\n\nif __name__ == '__main__':\n    print(\"Sum:\", array_sum([1, 2, 3, 4, 5]))"
    },
    "timeComplexity": "O(N) - visits each index once",
    "spaceComplexity": "O(N) - recursion depth"
  },
  {
    "id": "session-3-pivot-index",
    "session": 3,
    "sessionTitle": "Session 3: Recursion II",
    "topic": "Recursion",
    "title": "Find Pivot Index (Prefix Balance)",
    "lcNum": "LeetCode 724",
    "link": "https://leetcode.com/problems/find-pivot-index/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Recursion 2): Left-right sum balance equilibrium condition.",
    "subField": "Recursion 2",
    "problemStatement": "Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If no such index exists, return -1. If multiple exist, return the leftmost.",
    "intuition": "Let totalSum be the sum of all elements. At any index i, the sum of elements to the right is: rightSum = totalSum - leftSum - nums[i]. If leftSum == rightSum, index i is the pivot! We can precompute totalSum in O(N), then scan from left to right updating leftSum in O(1) per step.",
    "formulation": "Equilibrium Equation: leftSum == totalSum - leftSum - nums[i]\nRearranged: 2 * leftSum + nums[i] == totalSum",
    "variableBifurcation": [
      {
        "name": "totalSum",
        "type": "int",
        "init": "Sum of all nums",
        "role": "Global sum invariant across whole array",
        "update": "Computed once in prepass"
      },
      {
        "name": "leftSum",
        "type": "int",
        "init": "0",
        "role": "Sum of elements strictly before index i",
        "update": "leftSum += nums[i] after evaluating index i"
      },
      {
        "name": "i",
        "type": "int",
        "init": "0",
        "role": "Current candidate pivot index",
        "update": "i++"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Prefix Balance Scan (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Calculate totalSum once. Iterate i from 0 to N-1 checking 2 * leftSum + nums[i] == totalSum."
      },
      {
        "name": "Method 2: Prefix and Suffix Arrays",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Build prefixSum[] and suffixSum[] arrays and find first index where prefixSum[i-1] == suffixSum[i+1]."
      }
    ],
    "code": {
      "py": "class Solution:\n    def pivotIndex(self, nums: list[int]) -> int:\n        total_sum = sum(nums)\n        left_sum = 0\n        for i, val in enumerate(nums):\n            if left_sum == total_sum - left_sum - val:\n                return i\n            left_sum += val\n        return -1"
    },
    "timeComplexity": "O(N) - two passes of length N",
    "spaceComplexity": "O(1) - two integer variables (totalSum and leftSum)"
  },
  {
    "id": "session-3-remove-duplicates",
    "session": 3,
    "sessionTitle": "Session 3: Recursion II",
    "topic": "Recursion",
    "title": "Remove Adjacent Duplicates from String",
    "lcNum": "LeetCode 1047",
    "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Recursion 2): Recursive annihilation / Stack-based simulation of adjacent matching elements.",
    "subField": "Recursion 2",
    "problemStatement": "You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string.",
    "intuition": "When two adjacent identical characters are removed, the characters to their immediate left and right become adjacent and may trigger cascading removals (e.g. 'abbaca' -> remove 'bb' -> 'aaca' -> remove 'aa' -> 'ca'). This is isomorphic to a stack: for each incoming character, if it equals stack top, pop stack (annihilation); else push.",
    "formulation": "State Transition: Let S be a character stack.\nFor each char c in string:\n  if (!S.empty() && S.top() == c) S.pop()\n  else S.push(c)",
    "variableBifurcation": [
      {
        "name": "s",
        "type": "string",
        "init": "Input string",
        "role": "Source sequence",
        "update": "Read-only stream"
      },
      {
        "name": "st / res",
        "type": "string / stack",
        "init": "Empty buffer",
        "role": "Maintains prefix without adjacent duplicates",
        "update": "Push if mismatch; pop if match"
      }
    ],
    "methods": [
      {
        "name": "Method 1: String-as-Stack Simulation (Optimal)",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Use output string as stack with push_back and pop_back to avoid extra data structure overhead."
      },
      {
        "name": "Method 2: Pure Recursion",
        "time": "O(n\u00b2)",
        "space": "O(n) stack",
        "desc": "Find first adjacent pair, slice it out, and recursively call removeDuplicates(s.substr)."
      }
    ],
    "code": {
      "py": "class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        stack = []\n        for ch in s:\n            if stack and stack[-1] == ch:\n                stack.pop()\n            else:\n                stack.append(ch)\n        return \"\".join(stack)"
    },
    "timeComplexity": "O(N) - single pass over string length N",
    "spaceComplexity": "O(N) - auxiliary buffer storing result"
  },
  {
    "id": "session-3-fibonacci",
    "session": 3,
    "sessionTitle": "Session 3: Recursion II",
    "topic": "Recursion",
    "title": "Fibonacci Number (Recursion Tree, Memoization & DP)",
    "lcNum": "LeetCode 509",
    "link": "https://leetcode.com/problems/fibonacci-number/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Recursion 2): Classic recursion tree analysis demonstrating O(2^N) exponential explosion vs O(N) memoization.",
    "subField": "Recursion 2",
    "problemStatement": "The Fibonacci numbers, commonly denoted F(n) form a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1. F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2) for n > 1. Given n, calculate F(n).",
    "intuition": "Naive recursion creates an overlapping binary decision tree where F(n-2) is computed independently twice, F(n-3) three times, and so forth, taking O(2^n) time! By caching previously computed results (Memoization / DP) or keeping only the last two values (Space Optimization), we reduce the problem to O(n) time and O(1) space.",
    "formulation": "\u2022 Base Cases: F(0) = 0, F(1) = 1\n\u2022 Recurrence: F(n) = F(n-1) + F(n-2)\n\u2022 Space-Optimized State Transition: curr = prev1 + prev2; prev2 = prev1; prev1 = curr",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "int",
        "init": "Target index",
        "role": "Term index in Fibonacci sequence",
        "update": "Constant input"
      },
      {
        "name": "prev2",
        "type": "int",
        "init": "0",
        "role": "Represents F(i-2)",
        "update": "Takes previous value of prev1"
      },
      {
        "name": "prev1",
        "type": "int",
        "init": "1",
        "role": "Represents F(i-1)",
        "update": "Takes previous value of curr"
      },
      {
        "name": "curr",
        "type": "int",
        "init": "0",
        "role": "Represents F(i)",
        "update": "curr = prev1 + prev2"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Naive Recursion",
        "time": "O(2^n)",
        "space": "O(n) stack",
        "desc": "Direct translation of recurrence: fib(n-1) + fib(n-2). TLE on n >= 40."
      },
      {
        "name": "Method 2: Top-Down Memoization",
        "time": "O(n)",
        "space": "O(n) memo + stack",
        "desc": "Array memo[n+1] stores computed results to eliminate duplicate subtrees."
      },
      {
        "name": "Method 3: Space-Optimized DP (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Keep only two previous variables prev1 and prev2."
      }
    ],
    "code": {
      "py": "class Solution:\n    def fib(self, n: int) -> int:\n        if n <= 1:\n            return n\n        prev2, prev1 = 0, 1\n        for _ in range(2, n + 1):\n            curr = prev1 + prev2\n            prev2, prev1 = prev1, curr\n        return prev1"
    },
    "timeComplexity": "O(N) - single loop from 2 to N",
    "spaceComplexity": "O(1) - two variables prev1, prev2"
  },
  {
    "id": "session-3-tower-of-hanoi",
    "session": 3,
    "sessionTitle": "Session 3: Recursion II",
    "topic": "Recursion",
    "title": "Tower of Hanoi with Recursion Tree Presentation",
    "lcNum": "GfG Tower of Hanoi",
    "link": "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Quintessential 3-step divide & conquer state transfer demonstrating 2^N - 1 moves.",
    "subField": "Recursion 2",
    "problemStatement": "Move N disks from rod 1 (Source) to rod 3 (Destination) using rod 2 (Auxiliary) under constraints: (1) only one disk can be moved at a time, (2) no disk may be placed on top of a smaller disk. Return total moves and print steps.",
    "intuition": "To move N disks from S to D:\n1. Move top N-1 disks from S to A (using D as auxiliary).\n2. Move disk N from S to D.\n3. Move N-1 disks from A to D (using S as auxiliary).\nBase case: N = 1 disk moves directly from S to D.",
    "formulation": "Total Moves Recurrence: M(n) = 2 * M(n-1) + 1\nClosed Form Solution: M(n) = 2^n - 1",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "int",
        "init": "Disk count",
        "role": "Number of disks to transfer",
        "update": "n - 1 for subproblems"
      },
      {
        "name": "from_rod",
        "type": "int / char",
        "init": "1 or 'A'",
        "role": "Source peg holding disks",
        "update": "Swaps roles during recursive calls"
      },
      {
        "name": "to_rod",
        "type": "int / char",
        "init": "3 or 'C'",
        "role": "Target peg",
        "update": "Swaps roles during recursive calls"
      },
      {
        "name": "aux_rod",
        "type": "int / char",
        "init": "2 or 'B'",
        "role": "Helper peg",
        "update": "Swaps roles during recursive calls"
      }
    ],
    "methods": [
      {
        "name": "3-Step Divide & Conquer Recursion",
        "time": "O(2^n)",
        "space": "O(n) stack",
        "desc": "Delegate moving N-1 disks to auxiliary peg, move bottom disk, then delegate moving N-1 disks from auxiliary peg to destination."
      }
    ],
    "code": {
      "py": "def toh(n: int, from_rod: int, to_rod: int, aux_rod: int) -> int:\n    if n == 0:\n        return 0\n    moves = toh(n - 1, from_rod, aux_rod, to_rod)\n    print(f\"Move disk {n} from rod {from_rod} to rod {to_rod}\")\n    moves += 1\n    moves += toh(n - 1, aux_rod, to_rod, from_rod)\n    return moves\n\nif __name__ == '__main__':\n    print(\"Total moves:\", toh(3, 1, 3, 2))"
    },
    "timeComplexity": "O(2^N) - exactly 2^N - 1 moves executed",
    "spaceComplexity": "O(N) - recursion call stack depth of N"
  },
  {
    "id": "session-4-kadane",
    "session": 4,
    "sessionTitle": "Session 4: Array I",
    "topic": "Arrays",
    "title": "Maximum Subarray Sum (Kadane's Algorithm)",
    "lcNum": "LeetCode 53",
    "link": "https://leetcode.com/problems/maximum-subarray/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": 2,
    "teacherNote": "\ud83d\udd25 VERY IMP (Teacher Priority Rank #2): 'Ismei Kadane's algorithm aata hai.. very imp'. Core DP decision: extend vs restart.",
    "subField": "Array 1",
    "problemStatement": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "intuition": "At every index i, we make a dynamic programming decision: 'Should I extend the existing contiguous subarray, or should I start a brand new subarray beginning at element nums[i]?' If the running sum up to index i-1 is negative, adding it to nums[i] will only diminish nums[i]'s value. Therefore, whenever running sum drops below 0, it is always optimal to discard it and reset to 0 (or pick nums[i] directly).",
    "formulation": "DP Recurrence Relation:\n\u2022 currSum = max(nums[i], currSum + nums[i])\n\u2022 maxSum = max(maxSum, currSum)\nEquivalently with running reset:\n\u2022 currSum += nums[i]; if (currSum > maxSum) maxSum = currSum; if (currSum < 0) currSum = 0;",
    "variableBifurcation": [
      {
        "name": "nums",
        "type": "vector<int> / int[]",
        "init": "Input array",
        "role": "Stream of numbers (can contain positive and negative numbers)",
        "update": "Read-only loop traversal"
      },
      {
        "name": "currSum",
        "type": "int",
        "init": "nums[0] or 0",
        "role": "Maximum contiguous subarray sum ending at the current index i",
        "update": "currSum = max(nums[i], currSum + nums[i]); resets to 0 if negative"
      },
      {
        "name": "maxSum",
        "type": "int",
        "init": "nums[0] or INT_MIN",
        "role": "Global maximum contiguous sum discovered across all indices 0 to i",
        "update": "maxSum = max(maxSum, currSum)"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Brute Force (All Subarrays)",
        "time": "O(n\u00b2)",
        "space": "O(1)",
        "desc": "Check every start index i and end index j, keeping a running sum.",
        "pitfall": "T.L.E on N = 10^5 (10^10 operations)."
      },
      {
        "name": "Method 2: Kadane's Algorithm (Optimal DP)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Single pass tracking current contiguous window. Discard negative prefix burdens immediately.",
        "formula": "currSum = max(nums[i], currSum + nums[i])"
      }
    ],
    "code": {
      "py": "class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        curr_sum = nums[0]\n        max_sum = nums[0]\n        for n in nums[1:]:\n            curr_sum = max(n, curr_sum + n)\n            max_sum = max(max_sum, curr_sum)\n        return max_sum"
    },
    "timeComplexity": "O(N) - single pass through array",
    "spaceComplexity": "O(1) - two scalar variables currSum and maxSum"
  },
  {
    "id": "session-4-max-product-subarray",
    "session": 4,
    "sessionTitle": "Session 4: Array I",
    "topic": "Arrays",
    "title": "Maximum Product Subarray (Kadane's Variant)",
    "lcNum": "LeetCode 152",
    "link": "https://leetcode.com/problems/maximum-product-subarray/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Double Kadane variant tracking both positive max and negative min due to sign flip property.",
    "subField": "Array 1",
    "problemStatement": "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return that product.",
    "intuition": "Unlike addition where negative numbers only decrease the sum, multiplication has a sign-reversal property: multiplying two negative numbers creates a positive number! A deeply negative product can instantly flip to the largest positive product if multiplied by another negative number. Therefore, at each index i, we MUST track BOTH the maximum product ending at i and the minimum (most negative) product ending at i. Whenever nums[i] < 0, swap max and min before updating!",
    "formulation": "If nums[i] < 0: swap(currMax, currMin)\ncurrMax = max(nums[i], currMax * nums[i])\ncurrMin = min(nums[i], currMin * nums[i])\nans = max(ans, currMax)",
    "variableBifurcation": [
      {
        "name": "currMax",
        "type": "int",
        "init": "nums[0]",
        "role": "Max product ending at current index (always positive or closest to 0)",
        "update": "max(nums[i], currMax * nums[i])"
      },
      {
        "name": "currMin",
        "type": "int",
        "init": "nums[0]",
        "role": "Min product ending at current index (captures negative potential)",
        "update": "min(nums[i], currMin * nums[i])"
      },
      {
        "name": "ans",
        "type": "int",
        "init": "nums[0]",
        "role": "Global maximum product seen so far",
        "update": "ans = max(ans, currMax)"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Two-Pointer Prefix and Suffix Scan",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Scan left-to-right and right-to-left. Reset product to 1 upon encountering 0."
      },
      {
        "name": "Method 2: Double Kadane (Optimal DP)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Track currMax and currMin simultaneously. Swap when nums[i] < 0."
      }
    ],
    "code": {
      "py": "class Solution:\n    def maxProduct(self, nums: list[int]) -> int:\n        curr_max = curr_min = ans = nums[0]\n        for x in nums[1:]:\n            if x < 0:\n                curr_max, curr_min = curr_min, curr_max\n            curr_max = max(x, curr_max * x)\n            curr_min = min(x, curr_min * x)\n            ans = max(ans, curr_max)\n        return ans"
    },
    "timeComplexity": "O(N) - single pass",
    "spaceComplexity": "O(1) - auxiliary space"
  },
  {
    "id": "session-4-moore-voting",
    "session": 4,
    "sessionTitle": "Session 4: Array I",
    "topic": "Arrays",
    "title": "Majority Element (Moore's Voting Algorithm)",
    "lcNum": "LeetCode 169",
    "link": "https://leetcode.com/problems/majority-element/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": 3,
    "teacherNote": "\ud83d\udd25 VERY IMP (Teacher Priority Rank #3): 'Moore's voting algo to solve majority element in an array(very imp)))'. O(1) space cancellation principle.",
    "subField": "Array 1",
    "problemStatement": "Given an array nums of size n, return the majority element. The majority element is the element that appears more than \u230an / 2\u230b times. You may assume that the majority element always exists in the array.",
    "intuition": "Imagine each element is an army fighting for dominance. If two different elements fight, they both destroy each other. Because the majority element has strictly more soldiers than all other armies combined (> n/2), even if EVERY other element teams up to kill a majority soldier, the majority element will STILL have at least one soldier surviving at the end! We maintain a candidate and a count: when count == 0, adopt current element as candidate. If next matches candidate, increment count; else decrement count.",
    "formulation": "Cancellation Invariant:\nIf count == 0: candidate = nums[i], count = 1\nElse if nums[i] == candidate: count++\nElse: count--\nAt loop termination, candidate holds the majority element.",
    "variableBifurcation": [
      {
        "name": "nums",
        "type": "vector<int> / int[]",
        "init": "Input array",
        "role": "Stream of votes",
        "update": "Read-only traversal"
      },
      {
        "name": "candidate",
        "type": "int",
        "init": "0 / unassigned",
        "role": "Hypothesized majority element leading the vote tally",
        "update": "Updated to nums[i] whenever count drops to 0"
      },
      {
        "name": "count",
        "type": "int",
        "init": "0",
        "role": "Net positive surplus votes accumulated by candidate",
        "update": "+1 when vote equals candidate; -1 when vote differs (cancellation)"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Hash Map Frequency Count",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Count frequencies in unordered_map<int, int>. Return key where freq > n/2."
      },
      {
        "name": "Method 2: Sorting",
        "time": "O(n log n)",
        "space": "O(1)",
        "desc": "Sort the array. The element at index n/2 must be the majority element."
      },
      {
        "name": "Method 3: Boyer-Moore Voting Algorithm (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Linear scan pair-wise cancellation. Guaranteed O(1) auxiliary space.",
        "formula": "count += (nums[i] == candidate) ? +1 : -1"
      }
    ],
    "code": {
      "py": "class Solution:\n    def majorityElement(self, nums: list[int]) -> int:\n        candidate = 0\n        count = 0\n        for num in nums:\n            if count == 0:\n                candidate = num\n            count += 1 if num == candidate else -1\n        return candidate"
    },
    "timeComplexity": "O(N) - single pass over array length N",
    "spaceComplexity": "O(1) - two integer variables candidate and count"
  },
  {
    "id": "session-5-two-sum",
    "session": 5,
    "sessionTitle": "Session 5: Array II",
    "topic": "Arrays",
    "title": "Two Sum (Hash Map Complement)",
    "lcNum": "LeetCode 1",
    "link": "https://leetcode.com/problems/two-sum/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Array 2): Hash Table lookup inversion (x + y = target => y = target - x).",
    "subField": "Array 2",
    "problemStatement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input would have exactly one solution, and you may not use the same element twice.",
    "intuition": "Instead of checking every pair with nested loops in O(N^2), as we traverse each element nums[i], we ask: 'Have we already visited an element with value equal to (target - nums[i])?' By recording each visited number and its index in a Hash Map, this check takes O(1) average time.",
    "formulation": "Algebraic relation: a + b = target  \u27f9  b = target - a\nLookup in Hash Map: seen.find(target - nums[i])",
    "variableBifurcation": [
      {
        "name": "nums",
        "type": "vector<int> / int[]",
        "init": "Input array",
        "role": "List of integers to evaluate",
        "update": "Read-only loop"
      },
      {
        "name": "target",
        "type": "int",
        "init": "Given target sum",
        "role": "Sum constant invariant",
        "update": "Constant"
      },
      {
        "name": "seen",
        "type": "unordered_map<int, int>",
        "init": "Empty hash table",
        "role": "Maps visited value -> original index in nums",
        "update": "seen[nums[i]] = i"
      },
      {
        "name": "complement",
        "type": "int",
        "init": "target - nums[i]",
        "role": "Required partner value to achieve target",
        "update": "Computed at each iteration"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Brute Force Nested Loops",
        "time": "O(n\u00b2)",
        "space": "O(1)",
        "desc": "Check every pair (i, j) for nums[i] + nums[j] == target."
      },
      {
        "name": "Method 2: One-Pass Hash Map (Optimal)",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Check if complement exists in map; if yes return indices, else insert current value.",
        "formula": "complement = target - nums[i]"
      }
    ],
    "code": {
      "py": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        seen = {}\n        for i, num in enumerate(nums):\n            comp = target - num\n            if comp in seen:\n                return [seen[comp], i]\n            seen[num] = i\n        return []"
    },
    "timeComplexity": "O(N) - single pass with O(1) average hash map lookups",
    "spaceComplexity": "O(N) - hash map stores at most N elements"
  },
  {
    "id": "session-5-max-frequency",
    "session": 5,
    "sessionTitle": "Session 5: Array II",
    "topic": "Arrays",
    "title": "Count Elements With Maximum Frequency",
    "lcNum": "LeetCode 3005",
    "link": "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Array 2): Frequency mapping with dynamic maximum tracking.",
    "subField": "Array 2",
    "problemStatement": "You are given an array nums consisting of positive integers. Return the total frequencies of elements in nums such that those elements all have the maximum frequency.",
    "intuition": "Count the frequency of each number using a frequency array or hash map. Maintain maxFreq as the highest frequency seen so far. If a new number achieves a frequency strictly greater than maxFreq, reset the total accumulator to that frequency and update maxFreq. If another number matches maxFreq, add maxFreq to the total accumulator.",
    "formulation": "Single Pass / Two Pass:\nmaxFreq = max(freq[x] for x in nums)\ntotal = sum(freq[x] for x in unique(nums) if freq[x] == maxFreq)",
    "variableBifurcation": [
      {
        "name": "freq",
        "type": "int[101] / map",
        "init": "All 0",
        "role": "Frequency table mapping element -> count",
        "update": "freq[x]++"
      },
      {
        "name": "maxFreq",
        "type": "int",
        "init": "0",
        "role": "Highest count achieved by any element",
        "update": "maxFreq = max(maxFreq, freq[x])"
      },
      {
        "name": "total",
        "type": "int",
        "init": "0",
        "role": "Cumulative sum of frequencies of elements having maxFreq",
        "update": "total = (freq == maxFreq) ? total + freq : (freq > maxFreq ? freq : total)"
      }
    ],
    "methods": [
      {
        "name": "One-Pass Dynamic Frequency Tracker",
        "time": "O(n)",
        "space": "O(u) where u is unique elements (or O(1) for fixed bounds)",
        "desc": "Track freq[x] while scanning. When freq[x] > maxFreq: maxFreq = freq[x], total = maxFreq; if freq[x] == maxFreq: total += maxFreq."
      }
    ],
    "code": {
      "py": "class Solution:\n    def maxFrequencyElements(self, nums: list[int]) -> int:\n        freq = {}\n        max_freq = 0\n        total = 0\n        for x in nums:\n            freq[x] = freq.get(x, 0) + 1\n            f = freq[x]\n            if f > max_freq:\n                max_freq = f\n                total = f\n            elif f == max_freq:\n                total += f\n        return total"
    },
    "timeComplexity": "O(N) - single pass through array",
    "spaceComplexity": "O(U) - unique elements in frequency map (O(1) with 101-element array)"
  },
  {
    "id": "session-5-left-rotate",
    "session": 5,
    "sessionTitle": "Session 5: Array II",
    "topic": "Arrays",
    "title": "Left Rotate an Array by K Positions (Reversal Algorithm)",
    "lcNum": "GfG Cyclically Rotate",
    "link": "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Array 2): 3-step reversal algorithm in O(1) space.",
    "subField": "Array 2",
    "problemStatement": "Given an array of size n, left rotate the array by k positions in-place without using extra auxiliary arrays (O(1) space).",
    "intuition": "In a left rotation by k positions, the first k elements [0 ... k-1] move to the end of the array, while the remaining n-k elements [k ... n-1] shift to the beginning. We can achieve this in O(1) memory using the elegant 3-step in-place reversal algorithm:\n1. Reverse the first k elements: [0 ... k-1]\n2. Reverse the remaining n-k elements: [k ... n-1]\n3. Reverse the entire array: [0 ... n-1]",
    "formulation": "Let A = nums[0..k-1] and B = nums[k..n-1].\nOriginal: AB\nStep 1: Reverse(A) => A^R B\nStep 2: Reverse(B) => A^R B^R\nStep 3: Reverse(A^R B^R) = (B^R)^R (A^R)^R = BA (desired left rotation!)",
    "variableBifurcation": [
      {
        "name": "k",
        "type": "int",
        "init": "Given rotation count",
        "role": "Effective left shift amount",
        "update": "k = k % n"
      },
      {
        "name": "n",
        "type": "int",
        "init": "nums.size()",
        "role": "Array length",
        "update": "Constant"
      },
      {
        "name": "l, r",
        "type": "int",
        "init": "Subarray bounds",
        "role": "Pointers for in-place swap reverse",
        "update": "l++, r-- until l >= r"
      }
    ],
    "methods": [
      {
        "name": "3-Step In-Place Reversal Algorithm (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "reverse(0, k-1) -> reverse(k, n-1) -> reverse(0, n-1)."
      }
    ],
    "code": {
      "py": "def left_rotate(arr: list[int], k: int) -> None:\n    n = len(arr)\n    if n == 0:\n        return\n    k %= n\n    def rev(l, r):\n        while l < r:\n            arr[l], arr[r] = arr[r], arr[l]\n            l += 1; r -= 1\n    rev(0, k - 1)\n    rev(k, n - 1)\n    rev(0, n - 1)\n\nif __name__ == '__main__':\n    a = [1, 2, 3, 4, 5, 6, 7]\n    left_rotate(a, 2)\n    print(\"Left rotated:\", a) # [3, 4, 5, 6, 7, 1, 2]"
    },
    "timeComplexity": "O(N) - each element swapped exactly twice",
    "spaceComplexity": "O(1) - strictly in-place"
  },
  {
    "id": "session-5-right-rotate",
    "session": 5,
    "sessionTitle": "Session 5: Array II",
    "topic": "Arrays",
    "title": "Right Rotate an Array by K Positions (LeetCode 189)",
    "lcNum": "LeetCode 189",
    "link": "https://leetcode.com/problems/rotate-array/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Teacher Confirmed (Array 2): 3-step reversal in-place right shift.",
    "subField": "Array 2",
    "problemStatement": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "intuition": "In a right rotation, the last k elements move to the front. The in-place reversal strategy works symmetrically:\n1. Reverse the ENTIRE array: [0 ... n-1] (moves last elements to the front, but inverted)\n2. Reverse the first k elements: [0 ... k-1] (restores correct order of front portion)\n3. Reverse the remaining n-k elements: [k ... n-1] (restores correct order of back portion)",
    "formulation": "Formula: Let A = nums[0..n-k-1], B = nums[n-k..n-1]. Original = AB.\n1. Reverse(nums) = (AB)^R = B^R A^R\n2. Reverse(0, k-1) = (B^R)^R A^R = B A^R\n3. Reverse(k, n-1) = B (A^R)^R = BA (desired right rotation!)",
    "variableBifurcation": [
      {
        "name": "k",
        "type": "int",
        "init": "Shift steps",
        "role": "Right shift magnitude",
        "update": "k = k % n"
      },
      {
        "name": "l, r",
        "type": "int",
        "init": "Endpoints",
        "role": "Swap boundary pointers",
        "update": "l++, r--"
      }
    ],
    "methods": [
      {
        "name": "3-Step In-Place Reversal Algorithm (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "reverse(0, n-1) -> reverse(0, k-1) -> reverse(k, n-1)."
      }
    ],
    "code": {
      "py": "class Solution:\n    def rotate(self, nums: list[int], k: int) -> None:\n        n = len(nums)\n        k %= n\n        def rev(l, r):\n            while l < r:\n                nums[l], nums[r] = nums[r], nums[l]\n                l += 1; r -= 1\n        rev(0, n - 1)\n        rev(0, k - 1)\n        rev(k, n - 1)"
    },
    "timeComplexity": "O(N) - each element swapped twice",
    "spaceComplexity": "O(1) - in-place"
  },
  {
    "id": "session-6-dutch-national-flag",
    "session": 6,
    "sessionTitle": "Session 6: Array III",
    "topic": "Arrays",
    "title": "Sort 0, 1 and 2 (Dutch National Flag Algorithm)",
    "lcNum": "LeetCode 75",
    "link": "https://leetcode.com/problems/sort-colors/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": 6,
    "teacherNote": "\ud83d\udd25 IMP (Teacher Priority Rank #6): 'Dutch National Flag algo( imp)'. 3-way in-place partition in a single pass.",
    "subField": "Array 3",
    "problemStatement": "Given an array nums with n objects colored red, white, or blue (represented by integers 0, 1, and 2), sort them in-place so that objects of the same color are adjacent, in order 0, 1, and 2. Solve in one pass without library sort.",
    "intuition": "Dijkstra's 3-way partitioning maintains 3 pointers dividing the array into 4 invariant regions:\n\u2022 [0 ... low-1]: strictly 0s (Red)\n\u2022 [low ... mid-1]: strictly 1s (White)\n\u2022 [mid ... high]: uninspected elements\n\u2022 [high+1 ... n-1]: strictly 2s (Blue)\nWe examine nums[mid]:\n\u2022 If 0: swap(nums[low], nums[mid]), low++, mid++ (we know the swapped element at low was a 1, so mid can advance).\n\u2022 If 1: mid++ (1 is already in its proper middle region).\n\u2022 If 2: swap(nums[mid], nums[high]), high-- (do NOT advance mid because the element swapped from high is uninspected!).",
    "formulation": "Loop Invariant (while mid <= high):\nnums[0..low-1] = 0\nnums[low..mid-1] = 1\nnums[high+1..n-1] = 2",
    "variableBifurcation": [
      {
        "name": "low",
        "type": "int",
        "init": "0",
        "role": "Boundary index where the next 0 should be placed",
        "update": "low++ when a 0 is swapped in"
      },
      {
        "name": "mid",
        "type": "int",
        "init": "0",
        "role": "Scanning pointer inspecting the current element",
        "update": "mid++ when element is 1 or after swap with low"
      },
      {
        "name": "high",
        "type": "int",
        "init": "n - 1",
        "role": "Boundary index where the next 2 should be placed",
        "update": "high-- when a 2 is swapped in"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Two-Pass Counting Sort",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Count 0s, 1s, and 2s in pass 1, then overwrite array in pass 2.",
        "pitfall": "Requires two passes; interviewers specifically ask for a single pass."
      },
      {
        "name": "Method 2: Dutch National Flag 3-Way Partition (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Single pass, in-place pointer swapping maintaining 3 region boundaries."
      }
    ],
    "code": {
      "py": "class Solution:\n    def sortColors(self, nums: list[int]) -> None:\n        low, mid, high = 0, 0, len(nums) - 1\n        while mid <= high:\n            if nums[mid] == 0:\n                nums[low], nums[mid] = nums[mid], nums[low]\n                low += 1\n                mid += 1\n            elif nums[mid] == 1:\n                mid += 1\n            else:\n                nums[mid], nums[high] = nums[high], nums[mid]\n                high -= 1"
    },
    "timeComplexity": "O(N) - single pass (each step advances mid or decreases high)",
    "spaceComplexity": "O(1) - in-place"
  },
  {
    "id": "session-6-container-most-water",
    "session": 6,
    "sessionTitle": "Session 6: Array III",
    "topic": "Arrays",
    "title": "Container With Most Water (Greedy Two Pointers)",
    "lcNum": "LeetCode 11",
    "link": "https://leetcode.com/problems/container-with-most-water/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": 7,
    "teacherNote": "\ud83d\udd25 HIGH EXAM PROBABILITY (Teacher Priority Rank #7): 'Container with most water... Inme se koi ek aa sakta hai i guess'. Width-bottleneck trade-off.",
    "subField": "Array 3",
    "problemStatement": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    "intuition": "The water capacity formed between lines at indices l and r is determined by width * height: area = (r - l) * min(height[l], height[r]). We start with the widest possible container by setting l = 0 and r = n - 1. As we move the pointers inward, the width (r - l) strictly decreases. Therefore, to find an area larger than the current one, the bottleneck height MUST increase! The bottleneck is the shorter line. Moving the taller line can NEVER produce a larger area, because width decreases while height remains bounded by the shorter line. Hence, we greedily discard the shorter line at every step!",
    "formulation": "Area Formula: Area(l, r) = (r - l) * min(height[l], height[r])\nGreedy Step:\nIf height[l] < height[r]: l++\nElse: r--",
    "variableBifurcation": [
      {
        "name": "height",
        "type": "vector<int> / int[]",
        "init": "Input array",
        "role": "Heights of vertical lines",
        "update": "Read-only"
      },
      {
        "name": "l",
        "type": "int",
        "init": "0",
        "role": "Left boundary pointer",
        "update": "l++ if height[l] < height[r]"
      },
      {
        "name": "r",
        "type": "int",
        "init": "n - 1",
        "role": "Right boundary pointer",
        "update": "r-- if height[r] <= height[l]"
      },
      {
        "name": "maxArea",
        "type": "int",
        "init": "0",
        "role": "Maximum water volume observed",
        "update": "maxArea = max(maxArea, (r - l) * min(height[l], height[r]))"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Brute Force All Pairs",
        "time": "O(n\u00b2)",
        "space": "O(1)",
        "desc": "Check every pair (i, j) for area. TLE for N = 10^5."
      },
      {
        "name": "Method 2: Greedy Inward Two Pointers (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Start at widest span. Move the shorter wall inward each step."
      }
    ],
    "code": {
      "py": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        l, r = 0, len(height) - 1\n        max_area = 0\n        while l < r:\n            h = min(height[l], height[r])\n            max_area = max(max_area, (r - l) * h)\n            if height[l] < height[r]:\n                l += 1\n            else:\n                r -= 1\n        return max_area"
    },
    "timeComplexity": "O(N) - single pass inward traversal",
    "spaceComplexity": "O(1) - two pointer variables"
  },
  {
    "id": "session-6-trapping-rain-water",
    "session": 6,
    "sessionTitle": "Session 6: Array III",
    "topic": "Arrays",
    "title": "Trapping Rain Water (Two Pointers / Prefix-Suffix)",
    "lcNum": "LeetCode 42",
    "link": "https://leetcode.com/problems/trapping-rain-water/",
    "difficulty": "Hard",
    "teacherConfirmed": true,
    "teacherPriorityRank": 1,
    "teacherNote": "\ud83d\udd25 HIGHEST PRIORITY #1: 'Trapping rain water > Kadane's algo > Moore's voting... Inme se koi ek aa sakta hai i guess'. Top expected exam question.",
    "subField": "Array 3",
    "problemStatement": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "intuition": "The water trapped directly above any vertical column i is determined solely by the difference between the minimum of the highest boundaries to its left and right, and its own elevation:\nwater[i] = max(0, min(leftMax[i], rightMax[i]) - height[i]).\nIn the Two Pointers approach, if height[l] <= height[r], we know that the bottleneck for column l is strictly determined by leftMax (because height[r] >= leftMax guarantees that there exists at least one wall to the right that is as tall or taller than leftMax). Therefore, we can immediately calculate the trapped water at l without knowing the exact absolute maximum to the right! Symmetrically, if height[r] < height[l], the bottleneck for r is rightMax.",
    "formulation": "Water equation at position i:\nwater[i] = min(leftMax, rightMax) - height[i]\nTwo Pointers Invariant:\nIf height[l] <= height[r]:\n  if (height[l] >= leftMax) leftMax = height[l];\n  else totalWater += leftMax - height[l];\n  l++;\nElse:\n  if (height[r] >= rightMax) rightMax = height[r];\n  else totalWater += rightMax - height[r];\n  r--;",
    "variableBifurcation": [
      {
        "name": "l, r",
        "type": "int",
        "init": "0, n - 1",
        "role": "Left and right boundary pointers converging inward",
        "update": "l++ if height[l] <= height[r]; else r--"
      },
      {
        "name": "leftMax",
        "type": "int",
        "init": "0",
        "role": "Maximum elevation observed so far from index 0 to l",
        "update": "leftMax = max(leftMax, height[l])"
      },
      {
        "name": "rightMax",
        "type": "int",
        "init": "0",
        "role": "Maximum elevation observed so far from index n-1 down to r",
        "update": "rightMax = max(rightMax, height[r])"
      },
      {
        "name": "totalWater",
        "type": "long long / int",
        "init": "0",
        "role": "Cumulative trapped water volume",
        "update": "totalWater += leftMax - height[l] (or rightMax - height[r])"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Prefix Max and Suffix Max Arrays",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Precompute prefixMax[] and suffixMax[] arrays, then loop to calculate water[i] = min(prefixMax[i], suffixMax[i]) - height[i]."
      },
      {
        "name": "Method 2: Two Pointers (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Process the smaller wall side inward, updating leftMax/rightMax dynamically in O(1) space."
      }
    ],
    "code": {
      "py": "class Solution:\n    def trap(self, height: list[int]) -> int:\n        l, r = 0, len(height) - 1\n        left_max = right_max = 0\n        total_water = 0\n        while l < r:\n            if height[l] <= height[r]:\n                if height[l] >= left_max:\n                    left_max = height[l]\n                else:\n                    total_water += left_max - height[l]\n                l += 1\n            else:\n                if height[r] >= right_max:\n                    right_max = height[r]\n                else:\n                    total_water += right_max - height[r]\n                r -= 1\n        return total_water"
    },
    "timeComplexity": "O(N) - single pass converging two pointers",
    "spaceComplexity": "O(1) - constant extra space (4 scalar variables)"
  },
  {
    "id": "session-7-lower-bound",
    "session": 7,
    "sessionTitle": "Session 7: Binary Search I",
    "topic": "Binary Search",
    "title": "Lower Bound (First Index where arr[i] >= target)",
    "lcNum": "GfG / C++ std::lower_bound",
    "link": "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": 4,
    "teacherNote": "\ud83d\udd25 VERY IMP (Teacher Priority Rank #4): 'Binary search very imp... lower bound , upper bound'. Search space reduction invariant.",
    "subField": "Binary Search",
    "problemStatement": "Given a sorted array arr of n integers and a target value x, find the index of the first element in arr that is greater than or equal to x. If all elements are smaller than x, return n.",
    "intuition": "Binary search works on any monotonic condition (True/False boundary). Define condition: P(mid) = (arr[mid] >= target). In a sorted array, once P(mid) becomes True, it remains True for all subsequent indices (i.e., [F, F, F, T, T, T]). We want the very first 'True'. If arr[mid] >= target, mid is a viable candidate, but an earlier index to the left might also satisfy it, so record ans = mid and shrink search space to the left (high = mid - 1). If arr[mid] < target, mid and all elements before it are too small, so search right (low = mid + 1).",
    "formulation": "Monotonic Predicate: f(i) = (arr[i] >= target)\nSearch space: [0, n - 1]\nMid calculation: mid = low + (high - low) // 2 (prevents integer overflow)\nIf arr[mid] >= target: ans = mid, high = mid - 1\nElse: low = mid + 1",
    "variableBifurcation": [
      {
        "name": "arr",
        "type": "list[int]",
        "init": "Sorted input array",
        "role": "Monotonic search space",
        "update": "Read-only"
      },
      {
        "name": "target",
        "type": "int",
        "init": "Target value",
        "role": "Comparison threshold",
        "update": "Constant"
      },
      {
        "name": "low",
        "type": "int",
        "init": "0",
        "role": "Left boundary pointer of search range",
        "update": "low = mid + 1 when arr[mid] < target"
      },
      {
        "name": "high",
        "type": "int",
        "init": "n - 1",
        "role": "Right boundary pointer of search range",
        "update": "high = mid - 1 when arr[mid] >= target"
      },
      {
        "name": "ans",
        "type": "int",
        "init": "n",
        "role": "Best candidate index satisfying arr[i] >= target",
        "update": "ans = mid whenever arr[mid] >= target"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Linear Scan",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Iterate from index 0 to n-1. Return first index with arr[i] >= target."
      },
      {
        "name": "Method 2: Binary Search (Optimal)",
        "time": "O(log n)",
        "space": "O(1)",
        "desc": "Halve search space on each step. Guaranteed logarithmic runtime."
      }
    ],
    "code": {
      "py": "def lower_bound(arr: list[int], target: int) -> int:\n    \"\"\"\n    Finds the first index in a sorted array where arr[index] >= target.\n    Returns len(arr) if no such element exists.\n    Time Complexity: O(log N) | Space Complexity: O(1)\n    \"\"\"\n    low, high = 0, len(arr) - 1\n    ans = len(arr)  # Default fallback if all elements < target\n\n    while low <= high:\n        mid = low + (high - low) // 2\n\n        if arr[mid] >= target:\n            ans = mid          # mid is valid candidate\n            high = mid - 1     # Try to find a smaller index on the left\n        else:\n            low = mid + 1      # arr[mid] is too small, search right\n\n    return ans\n\nif __name__ == '__main__':\n    nums = [1, 2, 4, 4, 5, 8, 10]\n    print(\"Lower bound of 4:\", lower_bound(nums, 4))  # Output: 2 (first 4 at index 2)\n    print(\"Lower bound of 6:\", lower_bound(nums, 6))  # Output: 5 (element 8 at index 5)\n    print(\"Lower bound of 12:\", lower_bound(nums, 12)) # Output: 7 (beyond array)"
    },
    "timeComplexity": "O(log N) - search interval halves at each iteration",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-7-upper-bound",
    "session": 7,
    "sessionTitle": "Session 7: Binary Search I",
    "topic": "Binary Search",
    "title": "Upper Bound (First Index where arr[i] > target)",
    "lcNum": "GfG / C++ std::upper_bound",
    "link": "https://www.geeksforgeeks.org/problems/ceil-the-floor2824/1",
    "difficulty": "Easy",
    "teacherConfirmed": true,
    "teacherPriorityRank": 4,
    "teacherNote": "\ud83d\udd25 VERY IMP (Teacher Priority Rank #4): 'Binary search very imp... lower bound , upper bound'. Strict inequality predicate.",
    "subField": "Binary Search",
    "problemStatement": "Given a sorted array arr of n integers and a target value x, find the index of the first element in arr that is strictly greater than x (arr[i] > x). If all elements are <= x, return n.",
    "intuition": "Upper bound is structurally identical to Lower Bound, but changes the comparison from greater-or-equal (>=) to STRICTLY greater (>). The monotonic predicate is P(mid) = (arr[mid] > target). If arr[mid] > target, mid is an upper bound candidate, but a smaller index might exist to the left, so record ans = mid and search left (high = mid - 1). If arr[mid] <= target, mid is not strictly greater, so search right (low = mid + 1). Note: The count of target in sorted array is upper_bound(target) - lower_bound(target)!",
    "formulation": "Monotonic Predicate: f(i) = (arr[i] > target)\nIf arr[mid] > target: ans = mid, high = mid - 1\nElse: low = mid + 1",
    "variableBifurcation": [
      {
        "name": "arr",
        "type": "list[int]",
        "init": "Sorted array",
        "role": "Monotonic search domain",
        "update": "Read-only"
      },
      {
        "name": "target",
        "type": "int",
        "init": "Target value",
        "role": "Strict threshold",
        "update": "Constant"
      },
      {
        "name": "low, high",
        "type": "int",
        "init": "0, len(arr) - 1",
        "role": "Search range boundary pointers",
        "update": "Converge towards upper bound"
      },
      {
        "name": "ans",
        "type": "int",
        "init": "len(arr)",
        "role": "Earliest index where arr[i] > target",
        "update": "ans = mid when arr[mid] > target"
      }
    ],
    "methods": [
      {
        "name": "Binary Search on Strict Inequality",
        "time": "O(log n)",
        "space": "O(1)",
        "desc": "Check arr[mid] > target. Halve search range each step."
      }
    ],
    "code": {
      "py": "def upper_bound(arr: list[int], target: int) -> int:\n    \"\"\"\n    Finds the first index in a sorted array where arr[index] > target.\n    Returns len(arr) if no such element exists.\n    Time Complexity: O(log N) | Space Complexity: O(1)\n    \"\"\"\n    low, high = 0, len(arr) - 1\n    ans = len(arr)\n\n    while low <= high:\n        mid = low + (high - low) // 2\n\n        if arr[mid] > target:\n            ans = mid          # candidate index strictly greater than target\n            high = mid - 1     # check for an earlier element on the left\n        else:\n            low = mid + 1      # arr[mid] <= target, must search right\n\n    return ans\n\nif __name__ == '__main__':\n    nums = [1, 2, 4, 4, 5, 8, 10]\n    print(\"Upper bound of 4:\", upper_bound(nums, 4))  # Output: 4 (element 5 at index 4)\n    print(\"Upper bound of 2:\", upper_bound(nums, 2))  # Output: 2 (element 4 at index 2)\n    # Frequency of 4: upper_bound - lower_bound = 4 - 2 = 2 occurrences!"
    },
    "timeComplexity": "O(log N) - logarithmic interval halving",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-7-koko-bananas",
    "session": 7,
    "sessionTitle": "Session 7: Binary Search I",
    "topic": "Binary Search",
    "title": "Koko Eating Bananas (Binary Search on Answer Space)",
    "lcNum": "LeetCode 875",
    "link": "https://leetcode.com/problems/koko-eating-bananas/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": 5,
    "teacherNote": "\ud83d\udd25 BAHUT IMP (Teacher Priority Rank #5): 'KOKO EATING BANANAS(YE BHI BAHUT IMP HAI)'. Binary search on the answer range [1, max(piles)].",
    "subField": "Binary Search",
    "problemStatement": "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards will return in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile and eats k bananas from it. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Return the minimum integer k such that she can eat all the bananas within h hours.",
    "intuition": "What is the search space for speed k? If k = 1, she eats at minimum speed. If k = max(piles), she eats at maximum speed (taking exactly 1 hour per pile, total n hours). Therefore, the valid speed k MUST lie in range [1, max(piles)]. Notice the monotonic property: If speed k allows Koko to finish in <= h hours, ANY speed greater than k will ALSO allow her to finish. If speed k is too slow (> h hours), ANY speed smaller than k is guaranteed to fail. This is a classic Binary Search on Answer Space!",
    "formulation": "Hours required for pile p at speed k: ceil(p / k) = (p + k - 1) // k\nTotal hours: H(k) = sum((p + k - 1) // k for p in piles)\nPredicate: can_finish(k) = (H(k) <= h)\nSearch range: low = 1, high = max(piles)",
    "variableBifurcation": [
      {
        "name": "piles",
        "type": "list[int]",
        "init": "Array of pile sizes",
        "role": "Banana quantities per pile",
        "update": "Read-only"
      },
      {
        "name": "h",
        "type": "int",
        "init": "Available hours",
        "role": "Time constraint threshold",
        "update": "Constant"
      },
      {
        "name": "low",
        "type": "int",
        "init": "1",
        "role": "Minimum possible eating speed (1 banana/hr)",
        "update": "low = mid + 1 if mid speed is too slow"
      },
      {
        "name": "high",
        "type": "int",
        "init": "max(piles)",
        "role": "Maximum meaningful eating speed (finishes 1 pile/hr)",
        "update": "high = mid - 1 if mid speed is feasible"
      },
      {
        "name": "mid",
        "type": "int",
        "init": "low + (high - low) // 2",
        "role": "Candidate eating speed being tested",
        "update": "Evaluated at each binary search iteration"
      },
      {
        "name": "hours_needed",
        "type": "int",
        "init": "0",
        "role": "Sum of ceil divisions of each pile by speed k",
        "update": "Computed in O(N) feasibility check"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Linear Scan on Speed",
        "time": "O(N * max(Piles))",
        "space": "O(1)",
        "desc": "Test k = 1, 2, 3 ... until hours <= h. TLE when max(pile) = 10^9."
      },
      {
        "name": "Method 2: Binary Search on Answer (Optimal)",
        "time": "O(N * log(max(Piles)))",
        "space": "O(1)",
        "desc": "Binary search on speed range [1, max(piles)]. Feasibility check in O(N)."
      }
    ],
    "code": {
      "py": "import math\n\nclass Solution:\n    def minEatingSpeed(self, piles: list[int], h: int) -> int:\n        \"\"\"\n        Binary search on answer space [1, max(piles)].\n        Time Complexity: O(N * log(max(piles))) | Space Complexity: O(1)\n        \"\"\"\n        def can_finish(speed: int) -> bool:\n            # Calculate total hours needed at given speed\n            hours_spent = 0\n            for pile in piles:\n                # ceil(pile / speed) in integer math: (pile + speed - 1) // speed\n                hours_spent += (pile + speed - 1) // speed\n                if hours_spent > h:\n                    return False\n            return hours_spent <= h\n\n        low, high = 1, max(piles)\n        ans = high\n\n        while low <= high:\n            mid = low + (high - low) // 2\n\n            if can_finish(mid):\n                ans = mid        # Speed 'mid' works, try even smaller speed\n                high = mid - 1\n            else:\n                low = mid + 1    # Speed 'mid' is too slow, must increase speed\n\n        return ans\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Min eating speed for [3, 6, 7, 11] in 8 hrs:\", sol.minEatingSpeed([3, 6, 7, 11], 8)) # 4\n    print(\"Min eating speed for [30, 11, 23, 4, 20] in 5 hrs:\", sol.minEatingSpeed([30, 11, 23, 4, 20], 5)) # 30"
    },
    "timeComplexity": "O(N * log(M)) where N = len(piles) and M = max(piles)",
    "spaceComplexity": "O(1) - auxiliary space"
  },
  {
    "id": "session-7-first-bad-version",
    "session": 7,
    "sessionTitle": "Session 7: Binary Search I",
    "topic": "Binary Search",
    "title": "First Bad Version (Binary Search Boundary)",
    "lcNum": "LeetCode 278",
    "link": "https://leetcode.com/problems/first-bad-version/",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Binary search on monotonic boolean function (API contract).",
    "subField": "Binary Search",
    "problemStatement": "You have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version with minimum API calls.",
    "intuition": "All versions starting from the first bad version are bad, forming a monotonic boolean array: [False, False, ..., False, True, True, ..., True]. We need to find the earliest True index. When mid is bad (isBadVersion(mid) == True), mid might be the first bad version or it occurred earlier, so we save ans = mid and search left (high = mid - 1). If mid is good (False), the first bad version must be strictly after mid, so search right (low = mid + 1).",
    "formulation": "f(v) = isBadVersion(v)\nIf f(mid) == True: ans = mid, high = mid - 1\nElse: low = mid + 1",
    "variableBifurcation": [
      {
        "name": "n",
        "type": "int",
        "init": "Total versions",
        "role": "Maximum version index",
        "update": "Constant"
      },
      {
        "name": "low, high",
        "type": "int",
        "init": "1, n",
        "role": "Version search bounds",
        "update": "Halves each step"
      },
      {
        "name": "ans",
        "type": "int",
        "init": "n",
        "role": "First bad version found so far",
        "update": "ans = mid when isBadVersion(mid)"
      }
    ],
    "methods": [
      {
        "name": "Binary Search Boundary Detection",
        "time": "O(log n) API calls",
        "space": "O(1)",
        "desc": "Standard binary search on monotonic boolean predicate."
      }
    ],
    "code": {
      "py": "# The isBadVersion API is defined by the system.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        \"\"\"\n        Binary search on monotonic True/False boundary.\n        Time Complexity: O(log N) | Space Complexity: O(1)\n        \"\"\"\n        low, high = 1, n\n        ans = n\n\n        while low <= high:\n            mid = low + (high - low) // 2\n\n            if isBadVersion(mid):\n                ans = mid        # mid is bad, check if earlier version is also bad\n                high = mid - 1\n            else:\n                low = mid + 1    # mid is good, defect must be to the right\n\n        return ans"
    },
    "timeComplexity": "O(log N) - exactly log2(N) API calls",
    "spaceComplexity": "O(1) - auxiliary space"
  },
  {
    "id": "session-8-search-rotated",
    "session": 8,
    "sessionTitle": "Session 8: Binary Search II",
    "topic": "Binary Search",
    "title": "Search in Rotated Sorted Array (Distinct Elements)",
    "lcNum": "LeetCode 33",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": 5.5,
    "teacherNote": "\ud83d\udd25 IMP (Teacher Priority Rank #5.5): 'Search in rotated sorted array'. The half-sorted invariant principle.",
    "subField": "Binary Search",
    "problemStatement": "Given integer array nums sorted in ascending order with distinct values, rotated at some unknown pivot, and an integer target, return the index of target if it is in nums, or -1 if not. Solve in O(log n) runtime.",
    "intuition": "Crucial Invariant: If a sorted array is rotated at any pivot point, dividing it in half at mid guarantees that AT LEAST ONE of the two halves [low ... mid] or [mid ... high] is ALWAYS completely sorted!\n1. Check if nums[low] <= nums[mid]:\n   If True, the LEFT half is sorted! We test whether target falls cleanly inside this range: nums[low] <= target <= nums[mid]. If yes, discard right half (high = mid - 1); otherwise search right (low = mid + 1).\n2. If False, the RIGHT half MUST be sorted! Check if target lies within nums[mid] <= target <= nums[high]. If yes, search right (low = mid + 1); otherwise search left (high = mid - 1).",
    "formulation": "Half-Sorted Invariant:\nIf nums[mid] == target: return mid\nIf nums[low] <= nums[mid]: # Left sorted\n    if nums[low] <= target < nums[mid]: high = mid - 1\n    else: low = mid + 1\nElse: # Right sorted\n    if nums[mid] < target <= nums[high]: low = mid + 1\n    else: high = mid - 1",
    "variableBifurcation": [
      {
        "name": "nums",
        "type": "list[int]",
        "init": "Rotated sorted array",
        "role": "Search domain with distinct elements",
        "update": "Read-only"
      },
      {
        "name": "target",
        "type": "int",
        "init": "Value sought",
        "role": "Search target",
        "update": "Constant"
      },
      {
        "name": "low, high",
        "type": "int",
        "init": "0, len(nums) - 1",
        "role": "Interval boundary pointers",
        "update": "Adjusted based on which half is sorted"
      },
      {
        "name": "mid",
        "type": "int",
        "init": "low + (high - low) // 2",
        "role": "Split point partitioning array into two halves",
        "update": "Recalculated every iteration"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Linear Scan",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Check each element one-by-one. Fails the O(log N) requirement."
      },
      {
        "name": "Method 2: Modified Binary Search with Half-Sorted Invariant (Optimal)",
        "time": "O(log n)",
        "space": "O(1)",
        "desc": "Identify the sorted half and test target containment in O(1) before halving search space."
      }
    ],
    "code": {
      "py": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        \"\"\"\n        Searches for target in a rotated sorted array of unique elements.\n        Time Complexity: O(log N) | Space Complexity: O(1)\n        \"\"\"\n        low, high = 0, len(nums) - 1\n\n        while low <= high:\n            mid = low + (high - low) // 2\n\n            # 1. Target directly at midpoint\n            if nums[mid] == target:\n                return mid\n\n            # 2. Check if the LEFT half is sorted\n            if nums[low] <= nums[mid]:\n                # Is target located within the sorted left half?\n                if nums[low] <= target < nums[mid]:\n                    high = mid - 1  # Search left\n                else:\n                    low = mid + 1   # Search right\n            # 3. Otherwise, the RIGHT half must be sorted\n            else:\n                # Is target located within the sorted right half?\n                if nums[mid] < target <= nums[high]:\n                    low = mid + 1   # Search right\n                else:\n                    high = mid - 1  # Search left\n\n        return -1\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Search 0 in [4,5,6,7,0,1,2]:\", sol.search([4, 5, 6, 7, 0, 1, 2], 0)) # 4\n    print(\"Search 3 in [4,5,6,7,0,1,2]:\", sol.search([4, 5, 6, 7, 0, 1, 2], 3)) # -1"
    },
    "timeComplexity": "O(log N) - eliminates half the elements at each step",
    "spaceComplexity": "O(1) - constant space"
  },
  {
    "id": "session-8-search-rotated-ii",
    "session": 8,
    "sessionTitle": "Session 8: Binary Search II",
    "topic": "Binary Search",
    "title": "Search in Rotated Sorted Array II (With Duplicates)",
    "lcNum": "LeetCode 81",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Handling ambiguity when nums[low] == nums[mid] == nums[high].",
    "subField": "Binary Search",
    "problemStatement": "Given an integer array nums sorted in ascending order (not necessarily with distinct values) that has been rotated, return true if target is in nums, or false if not. Solve with optimal complexity.",
    "intuition": "When duplicate elements exist, we can encounter cases where nums[low] == nums[mid] == nums[high] (e.g. [3, 1, 2, 3, 3, 3, 3]). In this situation, we cannot determine which half is sorted because both endpoints match mid! The only safe mathematical move is to shrink the search space by trimming the duplicates: low += 1 and high -= 1. In the worst case (all identical elements), runtime degrades to O(N), but on average remains O(log N).",
    "formulation": "Ambiguity Resolution:\nIf nums[low] == nums[mid] == nums[high]:\n    low += 1; high -= 1; continue\nElse proceed with standard half-sorted test.",
    "variableBifurcation": [
      {
        "name": "nums",
        "type": "list[int]",
        "init": "Array with possible duplicates",
        "role": "Rotated array domain",
        "update": "Read-only"
      },
      {
        "name": "low, high",
        "type": "int",
        "init": "0, len(nums) - 1",
        "role": "Boundary pointers",
        "update": "low++ and high-- during three-way collision"
      }
    ],
    "methods": [
      {
        "name": "Modified Binary Search with Ambiguity Trimming",
        "time": "O(log n) average, O(n) worst-case",
        "space": "O(1)",
        "desc": "Trim duplicate endpoints when nums[low] == nums[mid] == nums[high]."
      }
    ],
    "code": {
      "py": "class Solution:\n    def search(self, nums: list[int], target: int) -> bool:\n        \"\"\"\n        Handles duplicates in rotated sorted array.\n        Time Complexity: O(log N) average, O(N) worst | Space: O(1)\n        \"\"\"\n        low, high = 0, len(nums) - 1\n\n        while low <= high:\n            mid = low + (high - low) // 2\n\n            if nums[mid] == target:\n                return True\n\n            # Ambiguity check: cannot determine which half is sorted\n            if nums[low] == nums[mid] == nums[high]:\n                low += 1\n                high -= 1\n                continue\n\n            # Left half is sorted\n            if nums[low] <= nums[mid]:\n                if nums[low] <= target < nums[mid]:\n                    high = mid - 1\n                else:\n                    low = mid + 1\n            # Right half is sorted\n            else:\n                if nums[mid] < target <= nums[high]:\n                    low = mid + 1\n                else:\n                    high = mid - 1\n\n        return False"
    },
    "timeComplexity": "O(log N) average, O(N) worst-case when all elements are duplicates",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-8-aggressive-cows",
    "session": 8,
    "sessionTitle": "Session 8: Binary Search II",
    "topic": "Binary Search",
    "title": "Aggressive Cows / Magnetic Force Between Two Balls",
    "lcNum": "LeetCode 1552 / SPOJ AGGRCOW",
    "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Binary search on monotonic answer space for 'maximize the minimum distance'.",
    "subField": "Binary Search",
    "problemStatement": "In an array of stall positions, place k cows such that the minimum distance between any two cows is as large as possible (maximize the minimum distance). Return this maximum possible minimum distance.",
    "intuition": "Search Space on Distance: The minimum possible distance is 1, and the maximum possible distance is (stalls[n-1] - stalls[0]) after sorting the stalls. Notice monotonicity: If it is possible to place k cows with minimum distance >= D, then it is ALWAYS possible to place them with any distance < D! If distance D is too large to fit k cows, any distance > D is also impossible. We test distance feasibility greedily in O(N): place cow 1 at stalls[0], then place each subsequent cow at the earliest stall with position >= last_pos + D. If we can place >= k cows, D is feasible!",
    "formulation": "Feasibility Function can_place(D):\ncount = 1, last_pos = stalls[0]\nfor x in stalls[1..n-1]:\n    if x - last_pos >= D: count++; last_pos = x\nreturn count >= k\nBinary Search: if can_place(mid): ans = mid, low = mid + 1 else high = mid - 1",
    "variableBifurcation": [
      {
        "name": "stalls / position",
        "type": "list[int]",
        "init": "Array of stall coordinates",
        "role": "Positions where cows can be placed",
        "update": "Sorted in ascending order"
      },
      {
        "name": "k / m",
        "type": "int",
        "init": "Number of cows/balls",
        "role": "Target count of items to place",
        "update": "Constant"
      },
      {
        "name": "low",
        "type": "int",
        "init": "1",
        "role": "Minimum possible distance",
        "update": "low = mid + 1 when mid distance is feasible"
      },
      {
        "name": "high",
        "type": "int",
        "init": "stalls[-1] - stalls[0]",
        "role": "Maximum possible distance span",
        "update": "high = mid - 1 when mid distance is infeasible"
      },
      {
        "name": "ans",
        "type": "int",
        "init": "1",
        "role": "Largest feasible minimum distance found",
        "update": "ans = mid whenever can_place(mid)"
      }
    ],
    "methods": [
      {
        "name": "Greedy Feasibility + Binary Search on Distance (Optimal)",
        "time": "O(N log N + N log(max_dist))",
        "space": "O(1)",
        "desc": "Sort coordinates. Binary search on distance range [1, max_dist] with greedy O(N) check."
      }
    ],
    "code": {
      "py": "class Solution:\n    def maxDistance(self, position: list[int], m: int) -> int:\n        \"\"\"\n        Binary search on answer space for 'maximize minimum distance'.\n        Time: O(N log N + N log(max_pos)) | Space: O(1)\n        \"\"\"\n        position.sort()\n\n        def can_place(dist: int) -> bool:\n            # Greedily place first ball at first position\n            count = 1\n            last_pos = position[0]\n            for i in range(1, len(position)):\n                if position[i] - last_pos >= dist:\n                    count += 1\n                    last_pos = position[i]\n                    if count >= m:\n                        return True\n            return False\n\n        low = 1\n        high = position[-1] - position[0]\n        ans = 1\n\n        while low <= high:\n            mid = low + (high - low) // 2\n\n            if can_place(mid):\n                ans = mid        # mid is feasible; try to achieve an even larger minimum distance\n                low = mid + 1\n            else:\n                high = mid - 1   # mid is too large to place m balls\n\n        return ans\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Max min distance for [1, 2, 3, 4, 7] with 3 balls:\", sol.maxDistance([1, 2, 3, 4, 7], 3)) # 3"
    },
    "timeComplexity": "O(N log N + N log(D)) where D is the coordinate range span",
    "spaceComplexity": "O(1) - auxiliary space"
  },
  {
    "id": "session-9-spiral-matrix",
    "session": 9,
    "sessionTitle": "Session 9: Matrix Problems I",
    "topic": "Matrix",
    "title": "Spiral Matrix Traversal",
    "lcNum": "LeetCode 54",
    "link": "https://leetcode.com/problems/spiral-matrix/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "4-boundary contraction model (top, bottom, left, right).",
    "subField": "Matrix",
    "problemStatement": "Given an m x n matrix, return all elements of the matrix in spiral order (clockwise starting from top-left).",
    "intuition": "Maintain 4 pointers bounding the unvisited rectangular region: top = 0, bottom = m - 1, left = 0, right = n - 1. We cycle through four discrete boundary sweeps:\n1. Left to Right along row 'top', then advance top += 1\n2. Top to Bottom along column 'right', then advance right -= 1\n3. Right to Left along row 'bottom' (only if top <= bottom), then advance bottom -= 1\n4. Bottom to Top along column 'left' (only if left <= right), then advance left += 1\nRepeat while top <= bottom and left <= right.",
    "formulation": "Boundary loop: while top <= bottom and left <= right\nDirection order: [\u2192 right, \u2193 down, \u2190 left, \u2191 up]\nGuard conditions: top <= bottom for leftward sweep; left <= right for upward sweep.",
    "variableBifurcation": [
      {
        "name": "matrix",
        "type": "list[list[int]]",
        "init": "m x n 2D grid",
        "role": "Source matrix",
        "update": "Read-only"
      },
      {
        "name": "top",
        "type": "int",
        "init": "0",
        "role": "Topmost unvisited row index",
        "update": "top += 1 after traversing row"
      },
      {
        "name": "bottom",
        "type": "int",
        "init": "m - 1",
        "role": "Bottommost unvisited row index",
        "update": "bottom -= 1 after traversing row"
      },
      {
        "name": "left",
        "type": "int",
        "init": "0",
        "role": "Leftmost unvisited column index",
        "update": "left += 1 after traversing column"
      },
      {
        "name": "right",
        "type": "int",
        "init": "n - 1",
        "role": "Rightmost unvisited column index",
        "update": "right -= 1 after traversing column"
      },
      {
        "name": "res",
        "type": "list[int]",
        "init": "[]",
        "role": "Resulting sequence of spiral values",
        "update": "Appends matrix[r][c] at each cell"
      }
    ],
    "methods": [
      {
        "name": "4-Boundary Peel-off Traversal (Optimal)",
        "time": "O(m * n)",
        "space": "O(1) auxiliary",
        "desc": "Contract boundaries inward in 4 directions without extra visited array."
      }
    ],
    "code": {
      "py": "class Solution:\n    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:\n        \"\"\"\n        4-Boundary spiral peel-off algorithm.\n        Time Complexity: O(M * N) | Space Complexity: O(1) auxiliary\n        \"\"\"\n        if not matrix or not matrix[0]:\n            return []\n\n        m, n = len(matrix), len(matrix[0])\n        top, bottom = 0, m - 1\n        left, right = 0, n - 1\n        res = []\n\n        while top <= bottom and left <= right:\n            # 1. Sweep Left -> Right along 'top'\n            for col in range(left, right + 1):\n                res.append(matrix[top][col])\n            top += 1\n\n            # 2. Sweep Top -> Bottom along 'right'\n            for row in range(top, bottom + 1):\n                res.append(matrix[row][right])\n            right -= 1\n\n            # 3. Sweep Right -> Left along 'bottom' (if row still valid)\n            if top <= bottom:\n                for col in range(right, left - 1, -1):\n                    res.append(matrix[bottom][col])\n                bottom -= 1\n\n            # 4. Sweep Bottom -> Top along 'left' (if col still valid)\n            if left <= right:\n                for row in range(bottom, top - 1, -1):\n                    res.append(matrix[row][left])\n                left += 1\n\n        return res\n\nif __name__ == '__main__':\n    sol = Solution()\n    mat = [\n        [1, 2, 3],\n        [4, 5, 6],\n        [7, 8, 9]\n    ]\n    print(\"Spiral order:\", sol.spiralOrder(mat)) # [1, 2, 3, 6, 9, 8, 7, 4, 5]"
    },
    "timeComplexity": "O(M * N) - each element visited exactly once",
    "spaceComplexity": "O(1) auxiliary space (excluding output array)"
  },
  {
    "id": "session-9-search-2d-matrix",
    "session": 9,
    "sessionTitle": "Session 9: Matrix Problems I",
    "topic": "Matrix",
    "title": "Search a 2D Matrix (LeetCode 74 & 240)",
    "lcNum": "LeetCode 74 & 240",
    "link": "https://leetcode.com/problems/search-a-2d-matrix/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Virtual 1D coordinate mapping vs Top-Right Staircase elimination.",
    "subField": "Matrix",
    "problemStatement": "Given an m x n integer matrix with the following two properties: (1) each row is sorted in non-decreasing order, (2) the first integer of each row is greater than the last integer of the previous row. Return true if target is in matrix, false otherwise. Solve in O(log(m * n)).",
    "intuition": "Because each row is sorted and the first element of row (i+1) is greater than the last element of row i, the entire m x n matrix is mathematically equivalent to a single continuous 1D sorted array of length (m * n)! We can perform standard Binary Search over index range [0, m * n - 1]. To access the matrix at 1D virtual index 'mid', we map it to 2D coordinates: row = mid // n, col = mid % n.",
    "formulation": "Virtual 1D Coordinate Mapping:\n\u2022 Total length: L = m * n\n\u2022 mid = (low + high) // 2\n\u2022 row = mid // n\n\u2022 col = mid % n\n\u2022 val = matrix[row][col]",
    "variableBifurcation": [
      {
        "name": "m, n",
        "type": "int",
        "init": "Rows, Cols count",
        "role": "Matrix dimensions",
        "update": "Constant"
      },
      {
        "name": "low",
        "type": "int",
        "init": "0",
        "role": "Start of virtual 1D array",
        "update": "low = mid + 1 if val < target"
      },
      {
        "name": "high",
        "type": "int",
        "init": "m * n - 1",
        "role": "End of virtual 1D array",
        "update": "high = mid - 1 if val > target"
      },
      {
        "name": "mid",
        "type": "int",
        "init": "low + (high - low) // 2",
        "role": "Virtual 1D midpoint",
        "update": "Recalculated each iteration"
      },
      {
        "name": "val",
        "type": "int",
        "init": "matrix[mid // n][mid % n]",
        "role": "Current matrix cell value being tested",
        "update": "Decoded via coordinate math"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Virtual 1D Binary Search (LC 74 - Optimal)",
        "time": "O(log(m * n))",
        "space": "O(1)",
        "desc": "Treat matrix as flattened 1D array via mid // n and mid % n."
      },
      {
        "name": "Method 2: Top-Right Staircase Search (LC 240)",
        "time": "O(m + n)",
        "space": "O(1)",
        "desc": "Start at top-right corner. If val > target col--; if val < target row++."
      }
    ],
    "code": {
      "py": "class Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        \"\"\"\n        Virtual 1D array binary search on strictly sorted matrix.\n        Time Complexity: O(log(M * N)) | Space Complexity: O(1)\n        \"\"\"\n        if not matrix or not matrix[0]:\n            return False\n\n        m, n = len(matrix), len(matrix[0])\n        low, high = 0, m * n - 1\n\n        while low <= high:\n            mid = low + (high - low) // 2\n            # 1D to 2D coordinate translation\n            r = mid // n\n            c = mid % n\n            val = matrix[r][c]\n\n            if val == target:\n                return True\n            elif val < target:\n                low = mid + 1\n            else:\n                high = mid - 1\n\n        return False\n\n    def searchMatrix2(self, matrix: list[list[int]], target: int) -> bool:\n        \"\"\"\n        Staircase Search (LeetCode 240) where rows and columns are independently sorted.\n        Time Complexity: O(M + N) | Space Complexity: O(1)\n        \"\"\"\n        if not matrix or not matrix[0]:\n            return False\n\n        r = 0\n        c = len(matrix[0]) - 1 # Start at top-right corner\n\n        while r < len(matrix) and c >= 0:\n            val = matrix[r][c]\n            if val == target:\n                return True\n            elif val > target:\n                c -= 1 # Target cannot be in this column\n            else:\n                r += 1 # Target cannot be in this row\n\n        return False\n\nif __name__ == '__main__':\n    sol = Solution()\n    mat = [\n        [1, 3, 5, 7],\n        [10, 11, 16, 20],\n        [23, 30, 34, 60]\n    ]\n    print(\"Search 3 in matrix:\", sol.searchMatrix(mat, 3))   # True\n    print(\"Search 13 in matrix:\", sol.searchMatrix(mat, 13)) # False"
    },
    "timeComplexity": "O(log(M * N)) for LC 74; O(M + N) for LC 240",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-9-sorted-matrix-print",
    "session": 9,
    "sessionTitle": "Session 9: Matrix Problems I",
    "topic": "Matrix",
    "title": "Printing Elements in Sorted Order from Row-Wise Sorted Matrix",
    "lcNum": "GfG Sorted Matrix",
    "link": "https://www.geeksforgeeks.org/problems/sorted-matrix2333/1",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "K-Way Merge via Min-Heap priority queue.",
    "subField": "Matrix",
    "problemStatement": "Given an N x N matrix where every row and column is sorted in non-decreasing order, return all elements of the matrix in strictly sorted order.",
    "intuition": "Since each of the N rows is already sorted, this problem is identical to Merging K Sorted Lists! We can use a Min-Heap of size N. We insert the first element of each row: (matrix[i][0], i, 0). At each step, we extract the minimum element from the heap, add it to our result list, and if that row has a next element, push (matrix[i][col + 1], i, col + 1) into the heap. This produces elements in sorted order in O(N^2 log N) time and only O(N) auxiliary memory!",
    "formulation": "Heap state: stores (val, row, col) for front of each row\nExtract min: adds to res\nPush next: heap.push((matrix[row][col+1], row, col+1))",
    "variableBifurcation": [
      {
        "name": "heap",
        "type": "list[tuple]",
        "init": "[(mat[i][0], i, 0) for i in range(N)]",
        "role": "Min-heap tracking minimum heads of all N rows",
        "update": "Maintains size <= N"
      },
      {
        "name": "val, r, c",
        "type": "int",
        "init": "Extracted from heap",
        "role": "Current global minimum across all active rows",
        "update": "Advanced to (r, c + 1)"
      },
      {
        "name": "res",
        "type": "list[int]",
        "init": "[]",
        "role": "Final sorted sequence of N^2 elements",
        "update": "Appends val"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Flatten & Full Sort",
        "time": "O(N\u00b2 log N)",
        "space": "O(N\u00b2)",
        "desc": "Flatten into 1D list of size N^2 and call sort()."
      },
      {
        "name": "Method 2: K-Way Merge with Min-Heap (Optimal Memory)",
        "time": "O(N\u00b2 log N)",
        "space": "O(N) heap memory",
        "desc": "Keep heap of size N containing head of each row. Stream results in O(N) memory."
      }
    ],
    "code": {
      "py": "import heapq\n\ndef sorted_matrix_elements(mat: list[list[int]]) -> list[int]:\n    \"\"\"\n    K-Way Merge using Min-Heap for sorted matrix.\n    Time Complexity: O(N^2 * log N) | Space Complexity: O(N) heap space\n    \"\"\"\n    if not mat or not mat[0]:\n        return []\n\n    n = len(mat)\n    min_heap = []\n\n    # Initialize heap with the first element of each row: (value, row_idx, col_idx)\n    for i in range(n):\n        if len(mat[i]) > 0:\n            heapq.heappush(min_heap, (mat[i][0], i, 0))\n\n    res = []\n\n    while min_heap:\n        val, r, c = heapq.heappop(min_heap)\n        res.append(val)\n\n        # If next column exists in the same row, push it to heap\n        if c + 1 < len(mat[r]):\n            heapq.heappush(min_heap, (mat[r][c + 1], r, c + 1))\n\n    return res\n\nif __name__ == '__main__':\n    grid = [\n        [10, 20, 30, 40],\n        [15, 25, 35, 45],\n        [27, 29, 37, 48],\n        [32, 33, 39, 50]\n    ]\n    print(\"Sorted elements:\", sorted_matrix_elements(grid))"
    },
    "timeComplexity": "O(N\u00b2 log N) - N\u00b2 extractions from heap of size N",
    "spaceComplexity": "O(N) - auxiliary heap space"
  },
  {
    "id": "session-10-median-row-sorted",
    "session": 10,
    "sessionTitle": "Session 10: Matrix Problems II",
    "topic": "Matrix",
    "title": "Finding Median in Row-Wise Sorted Matrix",
    "lcNum": "GfG Median in a Row-Wise Sorted Matrix",
    "link": "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
    "difficulty": "Hard",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Binary search on matrix value domain combined with row-wise upper_bound counting.",
    "subField": "Matrix",
    "problemStatement": "Given a row-wise sorted matrix of size R x C where R and C are always odd, find the median of the matrix. You cannot flatten and sort the matrix (must be sub-quadratic in time).",
    "intuition": "In an R x C matrix where total elements N = R * C is odd, the median has exactly (N // 2) elements strictly smaller than it, meaning there are at least (N // 2 + 1) elements <= median. What is the search space for the median value? It must lie between min(first column) and max(last column)! For any candidate value 'mid', we can count how many numbers in the matrix are <= mid by calling binary search (bisect_right / upper_bound) on each of the R rows in O(R * log C). If count <= N // 2, mid is too small, so low = mid + 1; otherwise high = mid.",
    "formulation": "Target count: desired = (R * C + 1) // 2\nValue search range: low = min(matrix[i][0]), high = max(matrix[i][C-1])\ncount_less_equal(mid) = sum(bisect_right(row, mid) for row in matrix)\nIf count < desired: low = mid + 1\nElse: high = mid",
    "variableBifurcation": [
      {
        "name": "low",
        "type": "int",
        "init": "min(matrix[i][0])",
        "role": "Lower bound of value search range",
        "update": "low = mid + 1 when count < desired"
      },
      {
        "name": "high",
        "type": "int",
        "init": "max(matrix[i][c-1])",
        "role": "Upper bound of value search range",
        "update": "high = mid when count >= desired"
      },
      {
        "name": "mid",
        "type": "int",
        "init": "low + (high - low) // 2",
        "role": "Candidate median value being evaluated",
        "update": "Recalculated each iteration"
      },
      {
        "name": "count",
        "type": "int",
        "init": "0",
        "role": "Total elements in entire matrix <= mid",
        "update": "Sum of bisect_right on each row"
      }
    ],
    "methods": [
      {
        "name": "Binary Search on Value Range + Row Upper Bounds (Optimal)",
        "time": "O(32 * R * log C)",
        "space": "O(1)",
        "desc": "Binary search over value range [min_val, max_val] with R upper_bound calls per iteration."
      }
    ],
    "code": {
      "py": "import bisect\n\nclass Solution:\n    def median(self, matrix: list[list[int]], R: int, C: int) -> int:\n        \"\"\"\n        Finds median of row-wise sorted matrix using binary search on answer range.\n        Time Complexity: O(32 * R * log C) | Space Complexity: O(1)\n        \"\"\"\n        # Search range for values\n        low = min(matrix[i][0] for i in range(R))\n        high = max(matrix[i][C - 1] for i in range(R))\n\n        desired_count = (R * C + 1) // 2\n\n        while low < high:\n            mid = low + (high - low) // 2\n\n            # Count elements <= mid across all rows\n            count = 0\n            for row in matrix:\n                count += bisect.bisect_right(row, mid)\n\n            if count < desired_count:\n                low = mid + 1\n            else:\n                high = mid\n\n        return low\n\nif __name__ == '__main__':\n    sol = Solution()\n    mat = [\n        [1, 3, 5],\n        [2, 6, 9],\n        [3, 6, 9]\n    ]\n    print(\"Median:\", sol.median(mat, 3, 3)) # Output: 5"
    },
    "timeComplexity": "O(32 * R * log C) - 32 binary search steps on 32-bit integer range",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-10-row-with-max-1s",
    "session": 10,
    "sessionTitle": "Session 10: Matrix Problems II",
    "topic": "Matrix",
    "title": "Identify Row with Maximum 1s (Staircase Elimination)",
    "lcNum": "GfG Row with max 1s",
    "link": "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Staircase traversal eliminating rows in O(R + C).",
    "subField": "Matrix",
    "problemStatement": "Given a boolean 2D array of n x m dimensions where each row is sorted (0s followed by 1s), find the 0-based index of the first row that has the maximum number of 1s. If no row has any 1, return -1.",
    "intuition": "Since each row is sorted, all 1s appear at the end of each row. We can avoid searching each row from scratch with Staircase Elimination:\n1. Start at top-right corner: row = 0, col = m - 1\n2. If matrix[row][col] == 1, this row has at least as many 1s as our previous best record! Save max_row_idx = row, and move LEFT (col -= 1) to see if this same row has even more 1s.\n3. If matrix[row][col] == 0, this row cannot beat our current column record, so move DOWN (row += 1) to inspect the next row at the current leftmost column boundary.\nBecause row only increases (at most n times) and col only decreases (at most m times), the entire traversal finishes in O(n + m) time!",
    "formulation": "Invariant: col points to the leftmost 1 seen so far.\nWhile row < n and col >= 0:\n  if matrix[row][col] == 1: max_row = row; col -= 1\n  else: row += 1",
    "variableBifurcation": [
      {
        "name": "row",
        "type": "int",
        "init": "0",
        "role": "Current row pointer",
        "update": "row += 1 when matrix[row][col] == 0"
      },
      {
        "name": "col",
        "type": "int",
        "init": "m - 1",
        "role": "Leftmost 1 frontier column",
        "update": "col -= 1 when matrix[row][col] == 1"
      },
      {
        "name": "max_row_idx",
        "type": "int",
        "init": "-1",
        "role": "Index of row holding the current record for most 1s",
        "update": "max_row_idx = row whenever col advances left"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Binary Search on Each Row",
        "time": "O(n * log m)",
        "space": "O(1)",
        "desc": "Find first 1 in each row using lower_bound."
      },
      {
        "name": "Method 2: Top-Right Staircase Traversal (Optimal)",
        "time": "O(n + m)",
        "space": "O(1)",
        "desc": "Walk from top-right. Move left on 1, move down on 0."
      }
    ],
    "code": {
      "py": "class Solution:\n    def rowWithMax1s(self, arr: list[list[int]], n: int, m: int) -> int:\n        \"\"\"\n        O(N + M) Staircase Traversal from top-right corner.\n        Time Complexity: O(N + M) | Space Complexity: O(1)\n        \"\"\"\n        row = 0\n        col = m - 1\n        max_row_idx = -1\n\n        while row < n and col >= 0:\n            if arr[row][col] == 1:\n                max_row_idx = row  # This row sets a new record for number of 1s\n                col -= 1           # Step left to see if this row has even more 1s\n            else:\n                row += 1           # 0 found, this row cannot beat the current col record\n\n        return max_row_idx\n\nif __name__ == '__main__':\n    sol = Solution()\n    matrix = [\n        [0, 1, 1, 1],\n        [0, 0, 1, 1],\n        [1, 1, 1, 1],\n        [0, 0, 0, 0]\n    ]\n    print(\"Row with max 1s:\", sol.rowWithMax1s(matrix, 4, 4)) # Output: 2 (row index 2 has all 1s)"
    },
    "timeComplexity": "O(N + M) - at most N down steps and M left steps",
    "spaceComplexity": "O(1) - strictly constant memory"
  },
  {
    "id": "session-10-rotate-image-90",
    "session": 10,
    "sessionTitle": "Session 10: Matrix Problems II",
    "topic": "Matrix",
    "title": "Rotate Matrix by 90 Degrees Clockwise (Rotate Image)",
    "lcNum": "LeetCode 48",
    "link": "https://leetcode.com/problems/rotate-image/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Two-step in-place matrix algebra: Transpose followed by horizontal row reflection.",
    "subField": "Matrix",
    "problemStatement": "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place without allocating another 2D matrix.",
    "intuition": "Rotating a matrix 90 degrees clockwise can be decomposed into two fundamental matrix transformations:\n1. Transpose the matrix: Swap matrix[i][j] with matrix[j][i] for all j > i. This flips the matrix along its main diagonal.\n2. Horizontally reflect each row: Reverse each individual row in-place (swap matrix[i][left] with matrix[i][right]).\nMathematically, (A^T)^R = 90-degree clockwise rotation! Both steps operate in-place in O(N^2) time and O(1) space.",
    "formulation": "Step 1 (Transpose): swap(matrix[i][j], matrix[j][i]) for 0 <= i < n, i < j < n\nStep 2 (Reverse Rows): matrix[i].reverse() for 0 <= i < n",
    "variableBifurcation": [
      {
        "name": "matrix",
        "type": "list[list[int]]",
        "init": "n x n 2D grid",
        "role": "Image pixel array",
        "update": "Transformed in-place"
      },
      {
        "name": "n",
        "type": "int",
        "init": "len(matrix)",
        "role": "Matrix dimension",
        "update": "Constant"
      },
      {
        "name": "i, j",
        "type": "int",
        "init": "Row/col indices",
        "role": "Diagonal swap indices for transpose",
        "update": "Iterates upper triangle"
      },
      {
        "name": "l, r",
        "type": "int",
        "init": "Row endpoints",
        "role": "Pointers for horizontal row reversal",
        "update": "l++, r--"
      }
    ],
    "methods": [
      {
        "name": "Transpose + Row Reversal (Optimal In-Place)",
        "time": "O(n\u00b2)",
        "space": "O(1)",
        "desc": "Transpose matrix across diagonal, then reverse each row horizontally."
      }
    ],
    "code": {
      "py": "class Solution:\n    def rotate(self, matrix: list[list[int]]) -> None:\n        \"\"\"\n        Rotates an n x n 2D matrix by 90 degrees clockwise in-place.\n        Time Complexity: O(N^2) | Space Complexity: O(1)\n        \"\"\"\n        n = len(matrix)\n\n        # Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i])\n        for i in range(n):\n            for j in range(i + 1, n):\n                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n\n        # Step 2: Reverse each row horizontally\n        for i in range(n):\n            matrix[i].reverse()\n\nif __name__ == '__main__':\n    sol = Solution()\n    mat = [\n        [1, 2, 3],\n        [4, 5, 6],\n        [7, 8, 9]\n    ]\n    sol.rotate(mat)\n    print(\"Rotated 90 degrees:\")\n    for row in mat:\n        print(row)\n    # Output:\n    # [7, 4, 1]\n    # [8, 5, 2]\n    # [9, 6, 3]"
    },
    "timeComplexity": "O(N\u00b2) - visits each cell twice",
    "spaceComplexity": "O(1) - strictly in-place"
  },
  {
    "id": "session-11-char-frequency",
    "session": 11,
    "sessionTitle": "Session 11: Strings I",
    "topic": "Strings",
    "title": "Character Frequency Counter & First Unique Character",
    "lcNum": "LeetCode 387",
    "link": "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Fixed 26-element frequency hashing array.",
    "subField": "Strings",
    "problemStatement": "Given a string s, find the frequency of each character, and return the index of the first non-repeating character. If it does not exist, return -1.",
    "intuition": "For strings consisting of lowercase English letters, a fixed array of size 26 acts as a direct-address hash table. In pass 1, count occurrences of each character: freq[ord(c) - ord('a')] += 1. In pass 2, iterate through the string in original left-to-right order; the first character with freq == 1 is the first non-repeating character.",
    "formulation": "Direct Address Index: idx = ord(c) - ord('a')\nPass 1: freq[ord(c) - ord('a')] += 1 for c in s\nPass 2: if freq[ord(s[i]) - ord('a')] == 1: return i",
    "variableBifurcation": [
      {
        "name": "s",
        "type": "str",
        "init": "Input string",
        "role": "Source text to analyze",
        "update": "Read-only"
      },
      {
        "name": "freq",
        "type": "list[int]",
        "init": "[0] * 26",
        "role": "Direct-mapped character frequency counts",
        "update": "freq[ord(ch) - 97] += 1"
      },
      {
        "name": "i",
        "type": "int",
        "init": "0",
        "role": "Index pointer in second pass",
        "update": "i += 1"
      }
    ],
    "methods": [
      {
        "name": "Two-Pass Direct-Address Frequency Array (Optimal)",
        "time": "O(n)",
        "space": "O(1) (26 integers)",
        "desc": "Count frequencies in pass 1, identify first unique index in pass 2."
      }
    ],
    "code": {
      "py": "class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        \"\"\"\n        Calculates character frequencies and finds first non-repeating character.\n        Time Complexity: O(N) | Space Complexity: O(1) (fixed 26-int array)\n        \"\"\"\n        # Frequency table for 26 lowercase English letters\n        freq = [0] * 26\n\n        # Pass 1: Tally counts\n        for ch in s:\n            freq[ord(ch) - ord('a')] += 1\n\n        # Pass 2: Find first character with count == 1\n        for i, ch in enumerate(s):\n            if freq[ord(ch) - ord('a')] == 1:\n                return i\n\n        return -1\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"First unique in 'leetcode':\", sol.firstUniqChar(\"leetcode\"))      # 0 ('l')\n    print(\"First unique in 'loveleetcode':\", sol.firstUniqChar(\"loveleetcode\")) # 2 ('v')\n    print(\"First unique in 'aabb':\", sol.firstUniqChar(\"aabb\"))              # -1"
    },
    "timeComplexity": "O(N) - two passes of length N",
    "spaceComplexity": "O(1) - fixed 26 integers space"
  },
  {
    "id": "session-11-count-words",
    "session": 11,
    "sessionTitle": "Session 11: Strings I",
    "topic": "Strings",
    "title": "Count Number of Words in a String",
    "lcNum": "LeetCode 434",
    "link": "https://leetcode.com/problems/number-of-segments-in-a-string/",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "State-machine word boundary transitions without library string splits.",
    "subField": "Strings",
    "problemStatement": "Given a string s, return the number of words in the string. A word is defined to be a contiguous sequence of non-space characters.",
    "intuition": "Instead of splitting the string which allocates O(N) memory, we count word starting boundaries in a single pass in O(1) space. A character at index i is the START of a new word if and only if:\n1. s[i] is NOT a space (' '), AND\n2. Either i == 0 OR the immediately preceding character s[i-1] was a space (' ').",
    "formulation": "Word start predicate: (s[i] != ' ') and (i == 0 or s[i-1] == ' ')\nIncrement word_count whenever predicate is True.",
    "variableBifurcation": [
      {
        "name": "s",
        "type": "str",
        "init": "Input string",
        "role": "Text containing spaces and words",
        "update": "Read-only traversal"
      },
      {
        "name": "word_count",
        "type": "int",
        "init": "0",
        "role": "Total words discovered",
        "update": "word_count += 1 on word boundary"
      },
      {
        "name": "i",
        "type": "int",
        "init": "0",
        "role": "Scanning index",
        "update": "i += 1"
      }
    ],
    "methods": [
      {
        "name": "Single-Pass Boundary Detection (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "desc": "Check if current char is non-space and predecessor is space."
      }
    ],
    "code": {
      "py": "class Solution:\n    def countSegments(self, s: str) -> int:\n        \"\"\"\n        Counts words in O(N) time and O(1) space without allocating split arrays.\n        \"\"\"\n        word_count = 0\n\n        for i in range(len(s)):\n            # An index marks the start of a word if it is non-space preceded by space/start\n            if s[i] != ' ' and (i == 0 or s[i - 1] == ' '):\n                word_count += 1\n\n        return word_count\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Word count in 'Hello, my name is John':\", sol.countSegments(\"Hello, my name is John\")) # 5\n    print(\"Word count in '   leading and   trailing   ':\", sol.countSegments(\"   leading and   trailing   \")) # 3"
    },
    "timeComplexity": "O(N) - single pass over string length N",
    "spaceComplexity": "O(1) - constant auxiliary memory"
  },
  {
    "id": "session-11-isomorphic-strings",
    "session": 11,
    "sessionTitle": "Session 11: Strings I",
    "topic": "Strings",
    "title": "Isomorphic Strings (Dual Bijection Mapping)",
    "lcNum": "LeetCode 205",
    "link": "https://leetcode.com/problems/isomorphic-strings/",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Bijective mapping enforcement (one-to-one and onto).",
    "subField": "Strings",
    "problemStatement": "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t, preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
    "intuition": "Isomorphism requires a strict mathematical bijection: every character in s must map to exactly one character in t, and every character in t must map to exactly one character in s (injective + surjective). If 'e' maps to 'a', no other character can map to 'a', and 'e' can never map to anything other than 'a'. We can track the LAST SEEN 1-based position of characters in both strings. If at any index i, the last seen index of s[i] does not equal the last seen index of t[i], the mapping pattern is broken!",
    "formulation": "Bijection condition: last_seen_s[s[i]] == last_seen_t[t[i]] at every index i\nUpdate: last_seen_s[s[i]] = i + 1; last_seen_t[t[i]] = i + 1",
    "variableBifurcation": [
      {
        "name": "s, t",
        "type": "str",
        "init": "Input strings",
        "role": "Strings being compared for isomorphism",
        "update": "Read-only"
      },
      {
        "name": "map_s",
        "type": "dict / list[int]",
        "init": "Empty / [0]*256",
        "role": "Last seen 1-based index of char in s",
        "update": "map_s[c] = i + 1"
      },
      {
        "name": "map_t",
        "type": "dict / list[int]",
        "init": "Empty / [0]*256",
        "role": "Last seen 1-based index of char in t",
        "update": "map_t[c] = i + 1"
      }
    ],
    "methods": [
      {
        "name": "Dual Last-Seen Position Tracking (Optimal)",
        "time": "O(n)",
        "space": "O(1) (256 ASCII entries)",
        "desc": "Check if s[i] and t[i] appeared at the same historical indices."
      }
    ],
    "code": {
      "py": "class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        \"\"\"\n        Enforces bidirectional one-to-one mapping in O(N) time and O(1) space.\n        \"\"\"\n        if len(s) != len(t):\n            return False\n\n        map_s = {}\n        map_t = {}\n\n        for i in range(len(s)):\n            ch_s = s[i]\n            ch_t = t[i]\n\n            # Check forward mapping: ch_s -> ch_t\n            if ch_s in map_s and map_s[ch_s] != ch_t:\n                return False\n            # Check reverse mapping: ch_t -> ch_s\n            if ch_t in map_t and map_t[ch_t] != ch_s:\n                return False\n\n            map_s[ch_s] = ch_t\n            map_t[ch_t] = ch_s\n\n        return True\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"'egg' and 'add':\", sol.isIsomorphic(\"egg\", \"add\"))     # True\n    print(\"'foo' and 'bar':\", sol.isIsomorphic(\"foo\", \"bar\"))     # False\n    print(\"'paper' and 'title':\", sol.isIsomorphic(\"paper\", \"title\")) # True"
    },
    "timeComplexity": "O(N) - single pass over string length N",
    "spaceComplexity": "O(1) - at most 256 unique ASCII mappings"
  },
  {
    "id": "session-12-valid-anagram",
    "session": 12,
    "sessionTitle": "Session 12: String II",
    "topic": "Strings",
    "title": "Valid Anagram (Frequency Delta Array)",
    "lcNum": "LeetCode 242",
    "link": "https://leetcode.com/problems/valid-anagram/",
    "difficulty": "Easy",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Single frequency delta array with net balance check.",
    "subField": "Strings",
    "problemStatement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "intuition": "Two strings are anagrams if and only if they have identical length and identical character counts. We can verify this using a single frequency delta array of 26 integers: increment count for characters in s, and decrement count for characters in t. If any character in the delta array is non-zero at the end, the strings cannot be anagrams.",
    "formulation": "1. If len(s) != len(t): return False\n2. For i in 0..len(s)-1: delta[s[i]] += 1; delta[t[i]] -= 1\n3. Return all(v == 0 for v in delta)",
    "variableBifurcation": [
      {
        "name": "s, t",
        "type": "str",
        "init": "Input strings",
        "role": "Strings compared",
        "update": "Read-only"
      },
      {
        "name": "delta",
        "type": "list[int]",
        "init": "[0] * 26",
        "role": "Net balance of each character",
        "update": "+1 for s[i], -1 for t[i]"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Sorting",
        "time": "O(n log n)",
        "space": "O(n)",
        "desc": "Check sorted(s) == sorted(t)."
      },
      {
        "name": "Method 2: Frequency Delta Array (Optimal)",
        "time": "O(n)",
        "space": "O(1) (26 integers)",
        "desc": "Increment on s, decrement on t. Ensure all counts are 0."
      }
    ],
    "code": {
      "py": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        \"\"\"\n        Validates anagram using a single frequency delta array.\n        Time Complexity: O(N) | Space Complexity: O(1)\n        \"\"\"\n        if len(s) != len(t):\n            return False\n\n        delta = [0] * 26\n\n        for i in range(len(s)):\n            delta[ord(s[i]) - ord('a')] += 1\n            delta[ord(t[i]) - ord('a')] -= 1\n\n        for count in delta:\n            if count != 0:\n                return False\n\n        return True\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Is anagram ('anagram', 'nagaram'):\", sol.isAnagram(\"anagram\", \"nagaram\")) # True\n    print(\"Is anagram ('rat', 'car'):\", sol.isAnagram(\"rat\", \"car\"))                 # False"
    },
    "timeComplexity": "O(N) - single pass over string length N",
    "spaceComplexity": "O(1) - 26 integers auxiliary space"
  },
  {
    "id": "session-12-longest-prefix-suffix",
    "session": 12,
    "sessionTitle": "Session 12: String II",
    "topic": "Strings",
    "title": "Longest Prefix Suffix (KMP LPS Array Preprocessing)",
    "lcNum": "GfG / LeetCode 1392",
    "link": "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
    "difficulty": "Medium",
    "teacherConfirmed": true,
    "teacherPriorityRank": null,
    "teacherNote": "\u2b50 Highlighted in question image as 'Suffix Prefix Quistion'. Foundation of Knuth-Morris-Pratt (KMP) linear string matching.",
    "subField": "Strings",
    "problemStatement": "Given a string s, find the length of the longest proper prefix of the string which is also a suffix of the string (a proper prefix cannot be the entire string itself).",
    "intuition": "This is the exact algorithm used to build the \u03c0 (LPS - Longest Prefix Suffix) array in the Knuth-Morris-Pratt (KMP) string matching algorithm! We maintain two pointers: 'length' (length of the previous longest prefix suffix, starting at 0) and 'i' (current character index, starting at 1).\n\u2022 If s[i] == s[length]: Match found! We extend the prefix suffix: length += 1, lps[i] = length, i += 1.\n\u2022 If s[i] != s[length]: Mismatch! Crucial KMP insight: We do NOT reset length to 0! Instead, we fall back to the next longest prefix suffix: length = lps[length - 1], without incrementing i!\n\u2022 If length is already 0, no prefix suffix matches: lps[i] = 0, i += 1.",
    "formulation": "KMP LPS State Machine:\n\u2022 Initialize: lps = [0] * n, length = 0, i = 1\n\u2022 While i < n:\n    if s[i] == s[length]: length += 1; lps[i] = length; i += 1\n    elif length > 0: length = lps[length - 1]\n    else: lps[i] = 0; i += 1\n\u2022 Result: lps[n - 1]",
    "variableBifurcation": [
      {
        "name": "s",
        "type": "str",
        "init": "Input string",
        "role": "String being analyzed",
        "update": "Read-only"
      },
      {
        "name": "length",
        "type": "int",
        "init": "0",
        "role": "Length of the matching prefix that is also a suffix",
        "update": "Increments on match; falls back to lps[length-1] on mismatch"
      },
      {
        "name": "i",
        "type": "int",
        "init": "1",
        "role": "Scanning index in string",
        "update": "i += 1 on match or when length == 0"
      },
      {
        "name": "lps",
        "type": "list[int]",
        "init": "[0] * len(s)",
        "role": "Stores longest prefix suffix length for each prefix s[0..i]",
        "update": "lps[i] = length"
      }
    ],
    "methods": [
      {
        "name": "Method 1: Brute Force Slicing",
        "time": "O(n\u00b2)",
        "space": "O(n)",
        "desc": "Check every length k from n-1 down to 1 for s[:k] == s[n-k:]. TLE for N = 10^5."
      },
      {
        "name": "Method 2: KMP LPS Two-Pointer State Machine (Optimal)",
        "time": "O(n)",
        "space": "O(n)",
        "desc": "Linear state transition algorithm guaranteeing amortized O(N) comparisons."
      }
    ],
    "code": {
      "py": "class Solution:\n    def lps(self, s: str) -> int:\n        \"\"\"\n        Computes the Longest Prefix Suffix (KMP LPS table construction).\n        Time Complexity: O(N) | Space Complexity: O(N)\n        \"\"\"\n        n = len(s)\n        if n <= 1:\n            return 0\n\n        lps = [0] * n\n        length = 0  # Length of the previous longest prefix suffix\n        i = 1\n\n        while i < n:\n            if s[i] == s[length]:\n                length += 1\n                lps[i] = length\n                i += 1\n            else:\n                # Mismatch after 'length' matches\n                if length != 0:\n                    # Fall back to previous prefix suffix length without incrementing i\n                    length = lps[length - 1]\n                else:\n                    lps[i] = 0\n                    i += 1\n\n        # The last value lps[n - 1] is the longest proper prefix that is also a suffix\n        return lps[n - 1]\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"LPS of 'abab':\", sol.lps(\"abab\"))           # 2 ('ab')\n    print(\"LPS of 'aaaa':\", sol.lps(\"aaaa\"))           # 3 ('aaa')\n    print(\"LPS of 'abcab':\", sol.lps(\"abcab\"))         # 2 ('ab')"
    },
    "timeComplexity": "O(N) - pointer 'i' strictly increases and 'length' decreases by at most the same amount",
    "spaceComplexity": "O(N) - LPS array storage"
  },
  {
    "id": "session-12-repeated-string-match",
    "session": 12,
    "sessionTitle": "Session 12: String II",
    "topic": "Strings",
    "title": "Minimum Repeat to Make Substring (Repeated String Match)",
    "lcNum": "LeetCode 686",
    "link": "https://leetcode.com/problems/repeated-string-match/",
    "difficulty": "Medium",
    "teacherConfirmed": false,
    "teacherPriorityRank": null,
    "teacherNote": "Mathematical lower and upper repetition bounds for substring containment.",
    "subField": "Strings",
    "problemStatement": "Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it or -1 if it is impossible.",
    "intuition": "What is the minimum number of repetitions of 'a' necessary for 'b' to possibly be a substring? 'a' repeated must at least be as long as 'b'! Let q = ceil(len(b) / len(a)). We repeat 'a' by q times. If 'b' is already a substring of a * q, the answer is q. However, 'b' could start near the end of one copy of 'a' and spill over into the next copy, requiring one additional repeat (q + 1 times)! If 'b' is not present in a * (q + 1), it can NEVER appear in any further repetitions because adding more copies only introduces periodic repetitions that have already been tested. Hence, we only need to test q and q + 1!",
    "formulation": "Repetition bounds:\n\u2022 q = ceil(len(b) / len(a)) = (len(b) + len(a) - 1) // len(a)\n\u2022 If b in (a * q): return q\n\u2022 If b in (a * (q + 1)): return q + 1\n\u2022 Else: return -1",
    "variableBifurcation": [
      {
        "name": "a, b",
        "type": "str",
        "init": "Input strings",
        "role": "Base string 'a' and target substring 'b'",
        "update": "Read-only"
      },
      {
        "name": "q",
        "type": "int",
        "init": "ceil(len(b) / len(a))",
        "role": "Minimum repetition count needed for length(a * q) >= length(b)",
        "update": "Constant"
      },
      {
        "name": "repeated_a",
        "type": "str",
        "init": "a * q",
        "role": "Concatenated copies of 'a'",
        "update": "Tested at q and q + 1"
      }
    ],
    "methods": [
      {
        "name": "Bounded Repetition Check (Optimal)",
        "time": "O(N * (len(b) + len(a)))",
        "space": "O(len(b) + len(a))",
        "desc": "Test q repetitions, then q+1 repetitions. Return -1 if not found."
      }
    ],
    "code": {
      "py": "class Solution:\n    def repeatedStringMatch(self, a: str, b: str) -> int:\n        \"\"\"\n        Repeated string match using mathematical length bounding.\n        Time Complexity: O(N * (len(a) + len(b))) | Space Complexity: O(len(a) + len(b))\n        \"\"\"\n        # Minimum repetitions needed so len(a * q) >= len(b)\n        q = (len(b) + len(a) - 1) // len(a)\n\n        repeated_a = a * q\n        if b in repeated_a:\n            return q\n\n        # Test one additional copy to account for boundary spillover\n        repeated_a += a\n        if b in repeated_a:\n            return q + 1\n\n        return -1\n\nif __name__ == '__main__':\n    sol = Solution()\n    print(\"Repeats for a='abcd', b='cdabcdab':\", sol.repeatedStringMatch(\"abcd\", \"cdabcdab\")) # 3\n    print(\"Repeats for a='a', b='aa':\", sol.repeatedStringMatch(\"a\", \"aa\"))                   # 2"
    },
    "timeComplexity": "O(N * (len(a) + len(b))) using string substring search",
    "spaceComplexity": "O(len(a) + len(b)) to store concatenated candidate string"
  }
];
