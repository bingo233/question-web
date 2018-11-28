import Vue from 'vue'
/**
 * 判断是否为数组
 */
function isArrayFn (o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function getArray (tree,childName,expendAll=false,level=1,parent) {
  let array = [];
  tree.forEach(item => {
    item._level = level;
    if (parent) {
      // item.parent = parent
      Vue.set(item,"parent",parent)
    }
    Vue.set(item,'_expanded',expendAll);
    if (item[childName] && isArrayFn(item[childName]) && item[childName].length > 0) {
      // item.isParent = true
      Vue.set(item,'isParent',true);
      array.push(item);
      const cLeve = level + 1;
      array = array.concat(getArray(item[childName],childName,expendAll,cLeve,item))
    } else {
      // item.isParent = false
      Vue.set(item,'isParent',false);
      array.push(item)
    }
  });
  return array;
}

function treeToArray (tree,childName,expendAll) {
  return getArray(tree,childName,expendAll)
}

export default getArray
