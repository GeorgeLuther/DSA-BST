class BinarySesrchTree {
    construtor(key = null) {
        this.key = key
        this.left = null
        this.right = null
    }
}

function createBalancedBst(arr){
    const middleIndex = Math.floor(arr.length / 2)
    const middleVal = arr[middleIndex]

    const left = arr.slice(0, middleIndex)
    const right = arr.slice(middleIndex + 1)

    const leftSubtree = createBalancedBst(left)
    const rightSubtree = createBalancedBst(right)

    const node = new BinarySesrchTree(middleVal)
    node.left = leftSubtree
    node.right = rightSubtree

    return node
}

console.dir(createBalancedBst([1,2,3,5,7,9,11]), {depth: null})