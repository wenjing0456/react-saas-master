import Mock from 'mockjs'
// const Random = Mock.Random
// Random.county()

let data = Mock.mock({
  code:'1',
  message:'ok',
  'data|2-10':[{
    title:'测试@id',
    "show|1":true,
    "name":"@cname(true)",
    "addr":"@county(true)",
    "privoList|2": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省"
    }
  }]
})
export default data;