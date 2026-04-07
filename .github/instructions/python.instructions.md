---
description: "Use when writing or reviewing Python LeetCode solutions. Covers idiomatic Python DSA patterns, standard library usage, and solution structure."
applyTo: "**/*.py"
---
# Python DSA Guidelines

## Solution Structure

```python
# <number>. <Problem Title>
# Time:  O(...)
# Space: O(...)

from typing import List, Optional

class Solution:
    def methodName(self, ...) -> ...:
        ...

if __name__ == "__main__":
    s = Solution()
    print(s.methodName(...))  # expected: ...
```

## Preferred Standard Library

| Need | Use |
|------|-----|
| Queue / deque | `from collections import deque` |
| Frequency map | `from collections import Counter` |
| Default dict | `from collections import defaultdict` |
| Min-heap | `import heapq` — `heapq.heappush/heappop` |
| Max-heap | negate values: push `-val` |
| Ordered insert | `import bisect` — `bisect.insort`, `bisect_left`, `bisect_right` |
| Memoization | `@functools.lru_cache(maxsize=None)` or `@functools.cache` |
| Inf | `float("inf")` |

## Patterns

- **Two pointers**: `l, r = 0, len(nums) - 1`
- **Sliding window**: expand `r`, shrink `l` when constraint violated
- **BFS**: `deque([(start, 0)])`, `visited = set()`
- **DFS recursive**: add `@lru_cache` for memoization
- **Union-Find**:
  ```python
  parent = list(range(n))
  def find(x):
      while parent[x] != x:
          parent[x] = parent[parent[x]]
          x = parent[x]
      return x
  def union(a, b):
      parent[find(a)] = find(b)
  ```
- **Binary search template**:
  ```python
  l, r = 0, len(nums) - 1
  while l <= r:
      mid = (l + r) // 2
      if nums[mid] == target: return mid
      elif nums[mid] < target: l = mid + 1
      else: r = mid - 1
  ```

## Style Rules

- Use type hints: `List[int]`, `Optional[TreeNode]`, `dict[str, int]`
- Ternary one-liners are fine: `x if cond else y`
- List/dict/set comprehensions preferred over explicit loops for simple transforms
- Avoid `global`; pass state as arguments or use closures/nonlocal sparingly
