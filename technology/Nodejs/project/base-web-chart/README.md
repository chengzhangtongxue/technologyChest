# 最基础的socket.io聊天室 [socket.io](https://socket.io/get-started/chat/)

## 主要方法
```
// 发送消息
socket.emit('messge','xxx');
// 接受消息
socket.on('message',function(msg) {
    console.log(msg);
})
```