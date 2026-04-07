# DSA / LeetCode Workspace

This workspace is for solving LeetCode and general DSA problems in Python and TypeScript.

## Problem Solving Approach

- Always analyze **time complexity** (Big-O) and **space complexity** before writing code
- Prefer optimal solutions; comment when a brute-force is written intentionally
- Add a brief comment block at the top of each solution with:
  - Problem number and title
  - Time complexity: O(...)
  - Space complexity: O(...)

## File Naming Conventions

| Language   | Pattern                              | Example                         |
|------------|--------------------------------------|---------------------------------|
| Python     | `<number>_<slug>/solution.py`        | `0001_two_sum/solution.py`      |
| TypeScript | `<number>_<slug>/solution.ts`        | `0001_two_sum/solution.ts`      |

## Code Style

- Keep solutions self-contained — no external dependencies
- Include at least one example test case at the bottom (under `if __name__ == "__main__"` for Python, or a simple `console.log` block for TypeScript)
- Use clear variable names; single-letter names only for well-known conventions (i, j, l, r, n, m)

## Common Patterns Reference

- Two pointers, sliding window, binary search → use for array/string problems
- BFS/DFS with a visited set → for graph/tree problems
- Monotonic stack/queue → for next greater element / sliding window max
- Top-K with a heap → `heapq` (Python) / `MinPriorityQueue` (TypeScript via custom class)
- Memoization → `@functools.lru_cache` (Python) / `Map` cache (TypeScript)
- Union-Find (DSU) → path compression + union by rank
