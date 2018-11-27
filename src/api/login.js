import query from "@/utils/query"

export default{
  loginCheck(params,callback) {
    query.post("loginCheck",params).then(res => {
      callback(res)
    })
  }
}