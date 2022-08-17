/**
 * 层数最深叶子节点的和
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    /**
     * 层级递归,获取每一层的值的和
     * @param root 对象
     * @param level 层级
     * @param map 返回值
     */
    const depth = function (root, level = 1, map = {}) {
        // 1. 先获取map中当前层级的值
        let d = map[level] | 0
        // 2. 当前层级的值加上当前节点的值
        map[level] = d + root.val
        // 3. 如果有左节点 则继续递归左节点,并且层级+1
        if (root.left) {
            depth(root.left, level + 1, map)
        }
        // 4. 如果有右节点 则继续递归右节点,并且层级+1
        if (root.right) {
            depth(root.right, level + 1, map)
        }
        return map;
    }

    const map = depth(root)
    // 获取最大层级
    const strings = Object.keys(map);
    const max = Math.max.apply(null, strings)
    // 返回最大层级的值
    return map[max];
};


function test() {
    const data = {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 4,
                left: {
                    val: 7
                }
            },
            right: {
                val: 5
            }
        },
        right: {
            val: 3,
            right: {
                val: 6,
                right: {
                    val: 8
                }
            }
        }
    }
    deepestLeavesSum(data)
}

test()
