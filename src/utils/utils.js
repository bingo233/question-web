export default{
  isString(value) {
    return typeof value === 'string'
  },
  arrToThree(array, {idName='id',pName='pid',cName='children'}) {
     if(!array) {
      return []
     }
     if(this.isString(array)){
      array = JSON.parse(array)
     }
     if(!Array.isArray(array)) {
      return []
     }
    //  console.log(arr)
    array.forEach(item => {
      array.forEach((a,idx) => {
         if (a[pName] === item[idName]) {
          //item[cName] = a
          if(!item[cName]){
            item[cName] = []
          }
          item[cName].push(Object.assign({},a));
          a._delete = true
         }
       })
     });

     const newArr = array.filter(item => {
       return !item._delete
     });

     return newArr
  }
}
