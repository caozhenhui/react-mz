export default {
    createCookie(key,value,expires){
        //'key=value;path=/'
        var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ";path=/";
        //判断是否设置cookie的有效期
        if(!isNaN(expires)){
            var date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText += ";expires=" + date;
        }
        document.cookie = cookieText;
    },
    getCookie(key){
        var arr = document.cookie.split('; ');
        for(var i = 0,len = arr.length;i < len;i ++){
            var list = arr[i].split('=');
            if(encodeURIComponent(key) === list[0]){
                return decodeURIComponent(list[1]);
            }
        }
    },
    removeCookie(key){
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0) + ';path=/';
    }
}