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

Quick sort is recursive on both sides, so it's a binary tree.
The height of the tree is how many pieces we cut the question into

There is also... something based on graphs. If you think about Fibonacci sequence, F(5)=F(4)+F(3), F(4)=F(3)+F(2), WHERE F(3) was called twice. If we take each call as a node...(?)

# Searchings
Two very instinctive approach are sequence search and binary search