var socket;


if(typeof(WebSocket) == "undefined") {
    console.log("您的浏览器不支持WebSocket");
}else{
    console.log("您的浏览器支持WebSocket");

    socket = new WebSocket("ws://localhost:8080/websocket");
    //打开事件
    socket.onopen = function() {
        console.log("Socket 已打开");
        //socket.send("这是来自客户端的消息" + location.href + new Date());
    };
    //获得消息事件
    socket.onmessage = function(msg) {
        console.log(msg.data);
        $('#area').val($('#area').val()+"\t"+msg.data);

    };
    //关闭事件
    socket.onclose = function() {
        console.log("Socket已关闭");
    };
    //发生了错误事件
    socket.onerror = function() {
        alert("Socket发生了错误");
    }

}
var btnClick = function(){
    socket.send("first message!");

}

$(function(){
    console.log("启动");
})
