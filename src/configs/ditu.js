
var MapSet = {
    
    GetLocation: function () {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var rp = new BMap.Point(r.point.lng, r.point.lat);
                var gc = new BMap.Geocoder();
                gc.getLocation(rp, function (rs) {
                    var addComp = rs.addressComponents;
                    console.log(addComp.city);

                    // $("input[name='address']").val(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });
            }
        }, { enableHighAccuracy: true })
    }
};
export default MapSet;