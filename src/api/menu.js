import query from "@/utils/query"

export default{
  getMenuList(callback){
    query.get("getMenus").then(res => {
      callback(res)
    })
  }
}