var Cookie = {
    set: function(name, value, prop) {
      var str = name + "=" + value;
      if (prop.expires) {
        str += ";expires=" + prop.expires.toUTCString(); 
      }
      if (prop.path) {
        str += ";path=" + prop.path;
      }
      if (prop.domain) {
        str += ";domain=" + prop.domain;
      }
      document.cookie = str;
    },
    get: function(key) {
      var cookies = document.cookie; 
      var arr = cookies.split("; ");
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("="); 
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    },
    remove: function(key) {
      var now = new Date();
      now.setDate(now.getDate() - 1);
      this.set(key, "no", {
        expires: now
      });
    }
  };
  export default Cookie;