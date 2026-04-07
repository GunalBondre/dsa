---
description: "Use when writing or reviewing TypeScript LeetCode solutions. Covers idiomatic TypeScript DSA patterns, helper classes, and solution structure."
applyTo: "**/*.ts"
---
# TypeScript DSA Guidelines

## Solution Structure

```typescript
// <number>. <Problem Title>
// Time:  O(...)
// Space: O(...)

function methodName(...): ... {
    ...
}

// Test
console.log(methodName(...)); // expected: ...
```

## Patterns & Idioms

### Min-Heap (Top-K)
TypeScript has no built-in heap. Use a simple inline implementation or this template:
```typescript
class MinHeap {
    private heap: number[] = [];
    push(val: number) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b); // swap for proper sift-up in perf-critical code
    }
    pop(): number { return this.heap.shift()!; }
    peek(): number { return this.heap[0]; }
    size(): number { return this.heap.length; }
}
```
For performance-critical solutions, implement sift-up/sift-down explicitly.

### Frequency Map
```typescript
const freq = new Map<string, number>();
for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
```

### Queue (BFS)
```typescript
const queue: [node: number, dist: number][] = [[start, 0]];
const visited = new Set<number>([start]);
```

### Memoization
```typescript
const memo = new Map<string, number>();
function dp(i: number, j: number): number {
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key)!;
    // ...
    memo.set(key, result);
    return result;
}
```

### Binary Search
```typescript
let l = 0, r = nums.length - 1;
while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
}
```

### Union-Find
```typescript
const parent = Array.from({ length: n }, (_, i) => i);
function find(x: number): number {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}
function union(a: number, b: number) { parent[find(a)] = find(b); }
```

## Style Rules

- Always use explicit types; avoid `any` — use `unknown` when type is truly unknown
- Prefer `const` over `let`; never use `var`
- Use non-null assertion `!` only when you are certain the value exists
- Use `Map` and `Set` over plain objects for DSA collections
- `Infinity` and `-Infinity` for sentinel values
- `>>1` is fine for integer halving in binary search
