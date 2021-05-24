(   
    function () {
        let t = null;
        t = setInterval(time,1000);
        function time() {
            clearInterval(t); //清除定时器
            dt = new Date();
            let hour = dt.getHours();
            let year = dt.getFullYear();
            let mon = dt.getMonth() + 1;
            let day = dt.getDate();
            let min = dt.getMinutes();
            let sec = dt.getSeconds();
            document.querySelector(".showtime").innerHTML = 
            "当前时间 ：" + year + "年" + mon + "月" + day + "日" + " " + hour + "时" + min + "分" + sec + "秒";
            t = setInterval(time,1000);
        }
    }
)(document)

