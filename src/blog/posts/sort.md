---
title: On Sorting (...searching, and more)
date: 2026-06-01
tags: blog
---
Wrote about several basic algorithms cuz I found myself have a deeper understanding recently.
<!-- readmore -->
# Sortings
*all examples are based on small->large, index starts at 0*
## Insertion sorting
**basic idea**: divide target into ordered & unordered part, insert elements in unordered list to places where the elements in ordered part is greater/smaller than it, move the previous element in ordered list behind by 1.

**pseudo code**
```js
insertion_sort(list)
i=1

while(i<length.list)
{
    pivot=list(i) //1st of unsorted
    j=i-1 //sorted pointer from last to first
    while(j>=0){
        if(pivot<list(j))
        {
            list(j+1)=list(j)
            list(j)=pivot
            //swap j and pivot(pointer)
        }
        j-=1
    }
    i+=1
}

```
## Selection Sort
**basic idea**: devide target into ordered & unordered part, always *select* the smallest among unsorted and move it to the rear of sorted

**pseudo code**
```js
selection_sort(list){
    cur=0 //head of unsorted
    
    while(cur<=length.list)
    {
        next=cur+1
        min=cur
        while(next<length)
        {
            if(list(next)<list(min))
            {
                min=next
            }
            next+=1
        }
        swap list(cur) and list(min)
        cur+=1
    }
}
```
## Bubble Sort
**basic idea**: from the 1st one, compare with each of the rest until there's bigger, then compare from the current biggest until reach the end. start from 2nd one on the 2nd round

**pseudo code**
```js
bubble_sort(list){
    round=0
    while(round<length.list){
        i=0
        while{i<length.list-1-round}{
            if(list(i)>list(i+1))
            then swap
        i+=1
        }
        round+=1
    }
}
```
All of above have O(n^2) as their time complexity in avg & worst case, since they all include two loops. However, for insertion sort and optimized bubble sort, the time complexity can reach O(n) in the best case (when the list is already sorted) because we can break early. But for selection sort, it always takes O(n^2) since it has to scan the rest every single time no matter what!

## Recursive methods
Recursive is neat in the form, but the think process is harder since naturally we think linearly...
#### 3 steps converting
```js
// use bubble as example
recursive_bubble(round,list){
    // 1. halt condition(which to if)
    if(round>length.list)
    return

    // 2. main function remains
    i=round
        while{i<=length.list}{
            if(list(i)>list(i+1))
            then swap
        i+=1
        }
    
    // 3. variables iter
    // round+=1
    recursive_bubble(round+1,list)
}
```
To put it bluntly, recursive is a form of stacks/tree
A tree means that, in one logic layer, the layer calls itself more than once, like
$$
F(n) = F(n-1) + F(n-2)
$$
But stuff like bubble sort, which only call itself once (Single Recursion) is a tree only have one side of branch:
- root: bubble(list, n=0)
- child: n=1
- grandchild: n=2......

## Merge sort
```js
mergesort(L){
    // boundary
    if(length of L = 1)
      then return L
    else
      mid=length of L/2
      lefthalf=split(L, 0, mid)
      righthalf=split(L, mid+1, length-1)
      sorted=mergelist(lefthalf, righthalf)
    return sorted
}
mergelist(A, B)
{
    new list L
    i=0, j=0
    while(A is not empty AND B is not empty){
        if(A[i]<=B[j])
           then put A[i] in L, i++
        else put B[j], j++
    }

    if(A is not empty){
        push A to Lrear
    }
    if(B is not empty){
        Push B
    }
    return L
}

```
inner loop perform N times compare on a level logN tree. O(NlogN) for best, avg, worst case.
## Quick sort
Quick sort is recursive on both sides, so it's a binary tree.
The height of the tree is how many pieces we cut the question into
```js
Quicksort(L, low, high){
    if(low<high)
    {
        pivot_location=partition(L, low, high)
        Quicksort(L, low, pivot_location)
        Quicksort(L, pivot_location+1, high)
    }
}
Partition(L, low, high){
    pivot=L[high]
    leftwall i=low-1

    for j=low to high-1
    {
        if L[j]<=pivot
         then i++
         swap L[i] and L[j]
    }

    swap L[i+1] and A[high]
    return i+1
}
```

There is also... something based on graphs. If you think about Fibonacci sequence, F(5)=F(4)+F(3), F(4)=F(3)+F(2), WHERE F(3) was called twice. If we take each call as a node...(?)

# Searchings
- 状态空间（State Space $S$）：所有可能存在的世界状态的集合。  
- 初始状态（Initial State $s_0$）：エージェント（智能体）开始的起点。  
- 动作（Actions $A(s)$）：在某个状态下可以采取的合法操作。  
- 转移模型（Transition Model / Successor Function）：输入当前状态和动作，返回结果状态以及对应的步骤代价（Step Cost $c(s, a, s')$）。  
- 目标测试（Goal Test $G(s)$）：判断当前状态是否达到了最终目标的测试。

## Uninformed Search
Two very instinctive approach are sequence search and binary search
### Depth-First Search
LIFO Stack to manage fringe

ultility: 
1. space complexity $O(bm)$, b is branching factor, m is max depth
2. possible dead loop, always finding the leftest solution rather than the best

## Breadth-First Search
FIFO Queue
ultility: 
1. space complexity $O(b^s)$, s is the depth of shallowest solution
2. complete; best only when each step's cost is the same

## Uniform Cost Search
always expands the node where Backward Cost $g(n)$ is the smalleat.

Priority Queue

~Dijkstra
# Informed Search
Heuristic Function $h(n)$, estimate the cost from current node to goal
## Greedy Search
每次都优先展开 $h(n)$ 最小（即看起来离目标最近）的节点. 容易被错误的诱导带偏，最坏情况下会退化成像 DFS 一样糟糕，既不完整也不最优
## A* Search
$$f(n) = g(n) + h(n)$$
其中 $g(n)$ 是从起点到当前节点的实际代价，$h(n)$ 是估计的剩余代价。每次优先展开 $f(n)$ 最小的节点。

只有当Goal被从优先队列中弹出来（Remove-Front）时，搜索才宣告结束。仅仅看到它进入队列是不能停止的，因为后面可能还有更好的路径。
### Admissibility
to ensure A* tree search find the best solution. h(n) must be admissible:
$$0 \le h(n) \le h^*(n)$$
$h^*(n)$ 是实际到目标的真实最小代价。这意味着它绝不能高估实际代价。  