import query from "@/utils/query"

export default{
  getUserMenus(callback){
    query.get("getUserMenus").then(res => {
      callback(res)
    })
  },
  getMenus(callback){
    query.get("getMenus").then(res => {
      callback(res)
    })
  },
  saveMenu(params, callback){
    query.get("saveMenu",params).then(res => {
      callback(res)
    })
  },
  deleteMenu(params, callback) {
    query.get("deleteMenu", params).then(res => {
      callback(res)
    })
  }
}
