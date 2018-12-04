import query from "@/utils/query"

export default {
  getRoles(params, callback){
    query.get('getRoles', params).then(res => {
      callback(res)
    })
  }
}