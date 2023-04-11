
export const fillTree = (trees: Set<TreeNode>, data: Map<string,Set<TreeNode>>) => {
    for (const node of trees) {
        if (data.get(node.id)) {
            let children = data.get(node.id)
            if (children && children.size > 0) {
                fillTree(children, data)
                node.children.push(...children)
            }
        }
    }
}
