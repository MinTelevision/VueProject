let getCurrentProvinceName = function () {
    return new Promise(function (resolve) {
        /* global BMap*/

        const geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function getinfo(position) {
            //let city = position.address.city;             //获取城市信息
            let province = position.address.province;    //获取省份信息
            resolve(province)
        }, { provider: 'baidu' });
    })
}

export default getCurrentProvinceName
