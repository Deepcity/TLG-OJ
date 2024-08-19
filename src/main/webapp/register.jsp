<%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/26
  Time: 16:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>注册</title>
</head>
<body>
<script>
    layui.use(function() {
        var $ = layui.$;
        var layer = layui.layer;
        var util = layui.util;
        var form = layui.form;
        util.on('lay-on', {
            'page-register': function () {
                layer.open({
                    type: 1,
                    area: '450px',
                    resize: false,
                    shadeClose: true,
                    title: '注册',
                    // language=HTML
                    content: `
                        <style>
                            .demo-reg-container{width: 320px; margin: 21px auto 0;}
                            .demo-reg-other .layui-icon{position: relative; display: inline-block; margin: 0 2px; top: 2px; font-size: 26px;}
                        </style>
                        <div class="layui-form"">
                            <div class="demo-reg-container">
                                <div class="layui-form-item">
                                    <div class="layui-input-wrap">
                                        <div class="layui-input-prefix">
                                            <i class="layui-icon layui-icon-vercode"></i>
                                        </div>
                                        <input type="text" name="accountID" value="" lay-verify="required"
                                               placeholder="用户名"
                                               class="layui-input">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <div class="layui-input-wrap">
                                        <div class="layui-input-prefix">
                                            <i class="layui-icon layui-icon-password"></i>
                                        </div>
                                        <input type="password" name="password" value="" lay-verify="required"
                                               placeholder="密码" autocomplete="off" class="layui-input"
                                               id="reg-password" lay-affix="eye">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <div class="layui-input-wrap">
                                        <div class="layui-input-prefix">
                                            <i class="layui-icon layui-icon-password"></i>
                                        </div>
                                        <input type="password" name="confirmPassword" value=""
                                               lay-verify="required|confirmPassword" placeholder="确认密码"
                                               autocomplete="off" class="layui-input" lay-affix="eye">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <div class="layui-input-wrap">
                                        <div class="layui-input-prefix">
                                            <i class="layui-icon layui-icon-username"></i>
                                        </div>
                                        <input type="text" name="username" value="" lay-verify="required"
                                               placeholder="昵称" autocomplete="off" class="layui-input"
                                               lay-affix="clear">
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <button class="layui-btn layui-btn-fluid" lay-submit lay-filter="demo-reg">注册
                                    </button>
                                </div>
                                <div class="layui-form-item demo-reg-other">
                                </div>
                            </div>
                        </div>`,
                    success: function () {
                        form.render();
                        // 表单提交事件
                        form.on('submit(demo-reg)', function(data){
                            var field = data.field; // 获取表单字段值
                            console.log(field);

                            console.log(JSON.stringify(field));

                            if(field.confirmPassword==field.password) {

                                var xhr = new XMLHttpRequest();

                                xhr.open("POST", "register.do"); //设置请求类型为post
                                xhr.setRequestHeader("Content-Type", "application/json"); //设置请求头中的Content-Type字段为application/json
                                xhr.send(JSON.stringify(field)); //发送JSON格式化后的数据

                                xhr.onload = function() {
                                    console.log(xhr.status);
                                    if (xhr.status == 200) { //如果状态码为200，表示请求成功
                                        window.location.replace("index.jsp");
                                        alert("注册成功");
                                        console.log(xhr.responseText); //打印出响应内容
                                    } else {
                                        alert(xhr.responseText);
                                        console.log("错误：" + xhr.status);
                                    }
                                };

                            }else {
                                alert("验证码错误");
                            }
                        });
                    }
                });
            }
        })
    })
</script>
</body>
</html>
