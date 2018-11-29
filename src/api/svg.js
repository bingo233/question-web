import query from "@/utils/query"

export default function (params,callback){
  query.get("getSvg",params).then(res => {
    callback(res)
  })
}
