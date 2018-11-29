import query from "@/utils/query"

export default function (callback){
  query.get("getSvg").then(res => {
    callback(res)
  })
}
