export default{
  isString(value) {
    return typeof value === 'string'
  },
  arrToThree(arr, {idName='id',pName='pid',cName='childrens'}) {
     if(!arr) {
      return []
     }
     if(this.isString(arr)){
       arr = JSON.parse(arr)
     }
     if(!Array.isArray(arr)) {
      return []
     }
    //  console.log(arr)
     arr.forEach(item => {
      arr.forEach((a,idx) => {
         if (a[pName] === item[idName]) {
          //item[cName] = a
          if(!item[cName]){
            item[cName] = new Array()
          }
          item[cName].push(a)
          a._delete = true
         }
       })
     })

     const newArr = arr.filter(item => {
       return !item._delete
     })
     
     return newArr
  }
}