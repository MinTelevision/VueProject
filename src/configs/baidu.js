// let getCurrentProvinceName = function () {
//     return new Promise(function (resolve, reject) {
//         const geolocation = new BMap.Geolocation();
//         geolocation.getCurrentPosition(function getinfo(position){
//             //let city = position.address.city;             //获取城市信息
//             let province = position.address.province;    //获取省份信息
//             resolve(province)
//         },{provider: 'baidu'});		
//     })
//   }
  //https://blog.csdn.net/weixin_42941619/article/details/85346681
  //成功的方式进行了定位 https://www.imooc.com/article/35794?block_id=tuijian_wz

//   city(){    //定义获取省份城市方法
//     const geolocation = new BMap.Geolocation();
//     geolocation.getCurrentPosition(function getinfo(position){
//         let city = position.address.city;             //获取城市信息
//         let province = position.address.province;    //获取省份信息
//         resolve(province)
//     },{provider: 'baidu'});		
// }

//简单定位城市

/* global BMap*/
let getCurrentCityName = function () {
    return new Promise(function (resolve) {
      let myCity = new BMap.LocalCity()
      myCity.get(function (result) {
        resolve(result.name)
      })
    })
  }


  export default getCurrentCityName


//   let getCurrentCityName = function () {
//     return new Promise(function (resolve,reject) {
//       let myCity = new BMap.LocalCity()
//       myCity.get(function (result) {
//         resolve(result.name)
//       })
//     })
//   }
