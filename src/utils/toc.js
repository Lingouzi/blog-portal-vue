/**
 * 将数组数据转化为 ul>li 的 html 结构,
 * 采用栈的数据结构转化数据,
 * @param array [{ anchor: 'header-1', level: 1, text: 'header 1' },{ anchor: 'header-2', level: 2, text: 'header 2' },{ anchor: 'header-3', level: 1, text: 'header 3' }]
 * @returns {string}
 */
export default function toc(array) {
    const levelStack = []
    let result = ''
    // 加入开头
    const addStartUL = () => {
        result += '<ul class="catalog-list">'
    }
    // 加入结尾
    const addEndUL = () => {
        result += '</ul>'
    }
    // 加入 li
    const addLI = (index, itemText) => {
        result += '<li>' + itemText + '</li>'
    }
    // 循环数据,
    array.forEach(function (item, index) {
        // { anchor: 'header-1', level: 1, text: 'header 1' }
        // { anchor: 'header-2', level: 2, text: 'header 2' }
        // { anchor: 'header-3', level: 1, text: 'header 3' }
        const itemText = item.text
        const itemLabel = item.level
        // 先判断数组是否有这个标题,压栈
        let levelIndex = levelStack.indexOf(itemLabel)
        // 没有找到, 新增ul、li
        if (levelIndex === -1) {
            levelStack.unshift(itemLabel)
            addStartUL()
            addLI(index, itemText)
        } else if (levelIndex === 0) {
            // 找到了相应<h?>标签，并且在栈顶的位置则直接将li放在此ul下
            addLI(index, itemText)
        } else {
            // 找到了相应<h?>标签，但是不在栈顶位置，需要将之前的所有<h?>出栈并且打上闭合标签，最后新增li
            while (levelIndex--) {
                levelStack.shift()
                addEndUL()
            }
            addLI(index, itemText)
        }
    })
    // 如果栈中还有<h?>，全部出栈打上闭合标签
    while (levelStack.length) {
        levelStack.shift()
        addEndUL()
    }
    return result
}
