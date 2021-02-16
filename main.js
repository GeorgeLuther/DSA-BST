const BinarySearchTree = require('./binary-tree.js')

//3.
const BST = new BinarySearchTree()
let insertions = [3,1,4,6,9,2,5,7]
insertions.forEach((item,idx) => BST.insert(item, item))
console.log(BST)

//4.
/*
This program finds and returns the sum of all values in a tree by recursively adding the children to the parent.

Given a tree of

        5
    3       6
1      4 5.5    7

((1+null = 1) + 3 + (4 + null = 4) = 8)  + 5  ((5.5 + null = 5) + 6 + (7 + null = 7) = 17.5) = 30.5

*/

//5. To find the 'height' of a BST you would find the longest ssl or the leaf furthest from the root.
/*
base: 0

recursively move down each branch, incrementing the count of steps til null.

*/

// function findHeightOLD(tree, count, longestBranch){
//     //base case
//     if (!tree) return 0

//     //must start at top... recursively move down each branch, stopping at null
//     if (tree.left !== null) {   
//         findHeight(tree.left, count++, longestBranch)
//     }
//     else {
//         if (count > longestBranch) longestBranch = count 
//     }
//     if (tree.right !== null) {
//         if (count > longestBranch) longestBranch = count    
//         findHeight(tree.right, count++, longestBranch)
//     }
//     else {
//         if (count > longestBranch) longestBranch = count 
//     }
//     return longestBranch
// }

let longestBranch = 0
function findHeight(tree, count) {
    if (!tree) return longestBranch
    if (tree.left !== null){
        let Lcount = count+1
        findHeight(tree.left, Lcount)
    }
    else {
        if (count > longestBranch) longestBranch = count
    }
    if (tree.right !== null){
        let Rcount = count+1
        findHeight(tree.right, Rcount)
    }
    else {
        if (count > longestBranch) longestBranch = count
    }

    return longestBranch
}

// console.log(findHeight(BST, 1))

const newTree = new BinarySearchTree()
insertions = [9,8,7,6,5,4,3,2,1]
insertions.forEach((item,idx) => newTree.insert(item, item))

console.dir(newTree)
console.log(findHeight(newTree, 1))

//6. Is it a BST

/* 
In order for it to be a BST:
- each node must have only two children (given)
- the left node must be less than parent / null
- the right node must be greater than the parent / null

start at the root node

*/

let bool = false
function isBST(tree){
    if (tree.left !== null && tree.left.value > tree.value || tree.right !== null && tree.right.value < tree.value ) {
        return false
    }
    else {
        if (tree.left !== null) isBST(tree.left)
        if (tree.right !== null) isBST(tree.right)
    }
    return true
}

console.log(isBST(BST))


//7. 3rd largest

/*
favor the right side?
search whole tree (ignore leftmost somehow?)
if the number is larger than the current max, move them down and add
*/
let L1 = 0
let L2 = 0
let L3 = 0
function thirdLargest(tree){
    if (!tree) return 0
    if (tree.value > L1) {
        L3 = L2
        L2 = L1
        L1 = tree.value
    }
    if (tree.left) thirdLargest(tree.left)
    if (tree.right) thirdLargest(tree.right)
    return L1
}

console.log('third', thirdLargest(BST))

