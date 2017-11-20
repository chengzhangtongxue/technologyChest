<template>
    <div class="header">
        <div class="header-con">
            <div class="icon">炸鸡音乐</div>
            <div class="name">炸鸡音乐</div>
        </div>
    </div>
</template>

<script type="">
    export default {

    }
</script>

<style lang="scss" scoped>
    .header {
        background:#ccc;
        height:40px;
        line-height:40px;
        text-align:center;
        .header-con {
            display:inline-block;
            text-align:center;
            font-size:0;
        }
        .icon {
            display:inline-block;
            width:30px;
            height:32px;
            background-image:url('./logo@2x.png');
            background-size:100%;
            text-indent:-10px;
        }
        .name {
            margin-left:6px;
            height:40px;
            display:inline-block;
            font-size:14px;
            color:#666;
        }
    }
</style>