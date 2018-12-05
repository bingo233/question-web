import query from "@/utils/query"

export default{
  // 查询所有公共数据
  queryAll(callback){
    query.get('getAllDatas').then(res => {
      callback(res)
    })
  },
  // 根据id删除公共数据
  deleteById(params, callback){
    query.post('deleteData', params).then(res => {
      callback(res)
    })
  },
  // 保存公共数据
  saveData(params, callback) {
    query.post('saveData', params).then(res => {
      callback(res)
    })
  }
}