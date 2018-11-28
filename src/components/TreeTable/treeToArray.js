/**
 * 判断是否为数组
 */
function isArrayFn (o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function getArray (tree,childName,level=0,parent) {
  let array = []
  tree.forEach(item => {
    item._level = level
    if (parent) {
      item.parent = parent
    }
    if (item[childName] && isArrayFn(item[childName]) && item[childName].length > 0) {
      item.isParent = true
      array.push(item)
      const cLeve = level + 1
      array = array.concat(getArray(item[childName],childName,cLeve,item))
    } else {
      item.isParent = false
      array.push(item)
    }
  });
  return array;
}

function treeToArray (tree,childName) {
  return getArray(tree,childName)
}

export default getArray