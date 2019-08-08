import Mock from 'mockjs'
// const Random = Mock.Random
// Random.county()
let data = Mock.mock(/http:\/\/localhost:3000/, 'get', function (options) {
  if (options.url.indexOf('addAndQueryCheJiPeccancyInfo') !== -1) {

    return Mock.mock({
      code: '1',
      message: 'ok',
      'data|2-10': [{
        title: '测试@id',
        "show|1": true,
        "name": "@cname(true)",
        "addr": "@county(true)",
        "privoList|2": {
          "310000": "上海市",
          "320000": "江苏省",
          "330000": "浙江省"
        }
      }]
    })
  } else if (options.url.indexOf('shopping/v3/restaurants') !== -1) {
    return Mock.mock({
      code: '1',
      message: 'ok',
      'data|10': [{
        "restaurant": {
          "act_tag": 0,
          "activities": [],
          "authentic_id": '1385362804843923',
          "business_info": "{\"recent_order_num_display\": \"月售1353\", \"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}], \"ad_info\": null}",
          "delivery_fee_discount": 0,
          "delivery_mode": {
            "border": "",
            "color": "2395FF",
            "gradient": {
              "rgb_from": "00AAFF",
              "rgb_to": "0085FF"
            },
            "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送",
            "text_color": "FFFFFF"
          },
          "description": "草厂马玉涛麻辣烫麻辣香锅 十年老店 感谢新老顾客的支持 我们会继续努力",
          "distance": 1624,
          "favored": false,
          "flavors": [{
            "id": 214,
            "name": "麻辣烫"
          }],
          "float_delivery_fee": 2,
          "float_minimum_order_amount": 20,
          "has_story": false,
          "id": "E4570764103875049880",
          "image_path": "19eb4115ad13f015c3a116d91b9dd7abjpeg",
          "is_new": false,
          "is_premium": false,
          "is_star": false,
          "is_stock_empty": 0,
          "is_valid": 1,
          "latitude": 39.822009,
          "longitude": 119.485313,
          "max_applied_quantity_per_order": -1,
          "name": "马玉涛麻辣香锅麻辣烫(草厂店)",
          "next_business_time": "明天 09:30",
          "only_use_poi": false,
          "opening_hours": ["09:30/00:30"],
          "order_lead_time": 30,
          "out_of_range": false,
          "piecewise_agent_fee": {
            "description": "配送费¥2",
            "extra_fee": 0,
            "is_extra": false,
            "no_subsidy_fee": "",
            "rules": [{
              "fee": 2,
              "price": 20
            }],
            "tips": "配送费¥2"
          },
          "platform": 0,
          "posters": [],
          "promotion_info": "（麻辣烫不赠米饭）麻辣烫，麻辣香锅，温馨提示，没有一点都不辣的，请适合自己的口味订餐，谢谢您的合作。\n麻辣香锅，（酒水配送费除外）满30赠送一盒米饭，40到50赠送两盒米饭，60到70赠三盒米饭，（80到100赠四盒米饭）不满30需单点米饭。\n电话☎️18232363815",
          "rating": 4.8,
          "rating_count": 1794,
          "recent_order_num": 1353,
          "recommend": {
            "is_ad": false,
            "reason": ""
          },
          "recommend_reasons": [{
            "name": "回头客多"
          }, {
            "name": "配送飞快"
          }],
          "regular_customer_count": 0,
          "scheme": "https://h5.ele.me/shop/#id=E4570764103875049880",
          "status": 1,
          "support_tags": [{
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "麻辣烫",
            "type": 1
          }, {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }],
          "supports": [{
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          }],
          "tags": [],
          "theme": {
            "default_color": "2395ff",
            "header_style": 0,
            "hongbao_style": 0,
            "price_color": "ff5339",
            "third_tab_name": "商家",
            "vanish_fields": []
          },
          "type": 0
        }
      }]
    })
  }
  //
  Mock.mock({
    "object|2-4": {
      "110000": "北京市",
      "120000": "天津市",
      "130000": "河北省",
      "140000": "山西省"
    }
  })
})
export default data;