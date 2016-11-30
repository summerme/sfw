    $(function() {
        // 获取头
        $.get("public-head.html", null, function(data) {
            $("header").append(data);
        });
        $.get("foot.html",null,function(data){
            $("footer").append(data)
        });
        

    });