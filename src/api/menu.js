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
  }
}