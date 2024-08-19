<%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/27
  Time: 9:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加消息</title>
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
    <script type="text/javascript" src="JS\jquery-3.7.1.min.js"></script>
</head>
<%@ page isELIgnored="false" %>

<body>
<style>
    .add-form {
        width: 1000px;
        margin: 21px auto 0;
    }
</style>
<div class="layui-container">
    <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
            <label class="layui-form-label">标题</label>
            <div class="layui-input-inline" style="width: 80%">
                <input type="text" name="title" placeholder="请输入" lay-verify="required" autocomplete="off"
                       class="layui-input">
            </div>
        </div>
        <hr class="ws-space-16">
            <label class=" layui-form-label layui-fluid" style="width:100%">主题内容</label>
        <div class="layui-form-item" style="margin:10px 10px 10px 10px">
            <textarea name="body" placeholder="新闻内容" class="layui-textarea" style="height: 400px"></textarea>
            </textarea>
        </div>
        <hr class="ws-space-16">
        <div class="layui-form-item" style="text-align: center">
            <button class="layui-btn btn-large layui-btn-radius" lay-submit lay-filter="submitBtn">立即提交</button>
        </div>
    </form>
</div>
<script>
    layui.use('form', function () {
        $ = layui.jquery;
        var form = layui.form;
        form.on('submit(submitBtn)', function (data) {
            console.log(data);
            $.post('addNewsMsg', data.field, function (d) {
                if (d.code == 0) {
                    layer.msg('添加了' + d.msg + '条数据', {time: 600}, function (index) {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.layer.close(index);
                    })
                } else {
                    layer("添加失败")
                }
            }, 'json')
            return false;
        });
    });
</script>
</body>
</html>
