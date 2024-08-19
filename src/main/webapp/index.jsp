<%@ page import="java.io.PrintWriter" %>
<%@ page import="com.alibaba.fastjson2.JSON" %><%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/22
  Time: 16:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<script type="text/javascript" src="JS\jquery-3.7.1.min.js"></script>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DPGOJ</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
</head>
<body>
<div class="layui-layout layui-layout-admin">
    <div class="layui-header">
        <div class="layui-logo layui-hide-xs layui-bg-black">DPGOJ</div>
        <!-- 头部区域（可配合layui 已有的水平导航） -->
        <ul class="layui-nav layui-layout-left" id="page-option">
            <!-- 移动端显示 -->
            <li class="layui-nav-item layui-show-xs-inline-block layui-hide-sm" lay-header-event="menuLeft">
                <i class="layui-icon layui-icon-spread-left"></i>
            </li>

        </ul>
        <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item layui-hide layui-show-sm-inline-block" id="minLoginInfo">
                <a href="javascript:;" id="mUserInfo">
                    游客
                </a>
                <dl class="layui-nav-child" , id="userList">

                </dl>
            </li>
            <li class="layui-nav-item" lay-header-event="menuRight" lay-unselect>
                <a href="javascript:;">
                    <i class="layui-icon layui-icon-more-vertical"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree" lay-filter="test">
                <li class="layui-nav-item layui-nav-itemed">
                    <a class="" href="javascript:;">DPG - CPC 主页</a>
                    <dl class="layui-nav-child" id="infomationBar">
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;">成绩集</a>
                    <dl class="layui-nav-child">
                        <dd><a class="menu" id="all_stuscores" src="all_stuscores.jsp">总成绩集</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;">用户集</a>
                    <dl class="layui-nav-child" id="user-option-list">
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;">课程集</a>
                    <dl class="layui-nav-child">
                        <dd><a class="menu" id="courses" src="all_courses.jsp">总课程集</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item"><a class="menu" id="batch_operation" src="test.jsp">批量导入</a></li>
                <li class="layui-nav-item"><a href="javascript:;">感谢列表</a></li>
                <li class="layui-nav-item"><a class="menu" id="question" src="questions.html">常见疑问</a></li>
            </ul>
        </div>
    </div>

    <div class="layui-body">
        <div class="layui-tab" lay-filter="nav_tab" lay-allowclose="true">
            <ul class="layui-tab-title">
                <li class="layui-this" lay-id="11">
                    <i class="layui-icon layui-icon-home" style="font-size: 20px; color: #1E9FFF;"></i>
                </li>
            </ul>
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <iframe frameborder="0" scrolling="yes" style="width:100%;height:100%"
                            src="main.jsp"></iframe>
                </div>
            </div>
        </div>
    </div>

    <div class="layui-footer">
        v1.0.0
    </div>
    <script>
        //JS
        layui.use(['element', 'layer', 'util'], function () {
            var user = JSON.parse('<%=session.getAttribute("curUser")%>');
            var grade = (user==null? '无权限' : user.UGrade);
            var element = layui.element;
            var layer = layui.layer;
            var util = layui.util;
            var $ = layui.$;
            var form = layui.form;

            //头部事件
            util.event('lay-header-event', {
                menuLeft: function (othis) { // 左侧菜单事件
                    layer.msg('展开左侧菜单的操作', {icon: 0});
                },
                menuRight: function () {  // 右侧菜单事件
                    layer.open({
                        type: 1,
                        title: '更多',
                        content: '<div style="padding: 15px;">' +
                            '目前用户权限为' + grade +
                            '</div>',
                        area: ['260px', '100%'],
                        offset: 'rt', // 右上角
                        anim: 'slideLeft', // 从右侧抽屉滑出
                        shadeClose: true,
                        scrollbar: false
                    });
                }
            });
            // 登录事件
            util.on('lay-on', {
                'page-login': function () {
                    layer.open({
                        type: 1,
                        area: '350px',
                        resize: false,
                        shadeClose: true,
                        title: '登录',
                        // language=HTML
                        content: `
                            <div class="layui-form" lay-filter="filter-test-layer" style="margin: 16px;">
                                <div class="demo-login-container">
                                    <div class="layui-form-item">
                                        <div class="layui-input-wrap">
                                            <div class="layui-input-prefix">
                                                <i class="layui-icon layui-icon-username"></i>
                                            </div>
                                            <input type="text" name="accountID" value="" lay-verify="required"
                                                   placeholder="用户名" lay-reqtext="请填写用户名" autocomplete="off"
                                                   class="layui-input" lay-affix="clear">
                                        </div>
                                    </div>
                                    <div class="layui-form-item">
                                        <div class="layui-input-wrap">
                                            <div class="layui-input-prefix">
                                                <i class="layui-icon layui-icon-password"></i>
                                            </div>
                                            <input type="password" name="password" value="" lay-verify="required"
                                                   placeholder="密   码" lay-reqtext="请填写密码" autocomplete="off"
                                                   class="layui-input" lay-affix="eye">
                                        </div>
                                    </div>
                                    <div class="layui-form-item">
                                        <div class="layui-row">
                                            <div class="layui-col-xs7">
                                                <div class="layui-input-wrap">
                                                    <div class="layui-input-prefix">
                                                        <i class="layui-icon layui-icon-vercode"></i>
                                                    </div>
                                                    <input type="text" name="captcha" value="" lay-verify="required"
                                                           placeholder="验证码" lay-reqtext="请填写验证码"
                                                           autocomplete="off" class="layui-input" lay-affix="clear">
                                                </div>
                                            </div>
                                            <div class="layui-col-xs5">
                                                <div style="margin-left: 10px;" id="captchaImg">
                                                    <img src="getVerifyCode" alt="captcha" onclick="function (){}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-form-item">
                                        <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
                                        <a href="#forget" style="float: right; margin-top: 7px;">忘记密码？</a>
                                    </div>
                                    <div class="layui-form-item">
                                        <button class="layui-btn layui-btn-fluid" lay-submit lay-filter="demo-login">
                                            登录
                                        </button>
                                    </div>
                                    <div class="layui-form-item demo-register">
                                        <a href="javascript:;" lay-on="page-register">注册帐号</a></span>
                                    </div>
                                </div>
                            </div>
                        `,
                        success: function () {
                            // 对弹层中的表单进行初始化渲染
                            form.render();
                            // 表单提交事件
                            form.on('submit(demo-login)', function (data) {
                                var field = data.field; // 获取表单字段值
                                console.log(field);

                                console.log(JSON.stringify(field));

                                var xhr = new XMLHttpRequest();

                                xhr.open("POST", "login.do"); //设置请求类型为post
                                xhr.setRequestHeader("Content-Type", "application/json"); //设置请求头中的Content-Type字段为application/json
                                xhr.send(JSON.stringify(field)); //发送JSON格式化后的数据

                                xhr.onload = function () {
                                    console.log(xhr.status);
                                    if (xhr.status == 200) { //如果状态码为200，表示请求成功
                                        window.location.replace("index.jsp");
                                        console.log(xhr.responseText); //打印出响应内容
                                    } else {
                                        alert(xhr.responseText);
                                        console.log("错误：" + xhr.status);
                                    }
                                };
                            });
                        }
                    });
                }
            });
            function FrameWH() {
                var h = $(window).height() + 120;
                console.log(h);
                $("iframe").css("height", h + "px");
            }
            // 定义动态tab事件对象
            var active = {
                tabAdd: function (title_name, url, tid) {
                    var html = '<iframe frameborder="0"style = "width:100%;height:100%"src = "' + url + '"> < /iframe>';
                    element.tabAdd('nav_tab', {
                        title: title_name,
                        content: html,
                        id: tid,
                    });
                    FrameWH();
                },
                tabDelete: function (othis) {
                },
                tabChange: function (id) {
                    element.tabChange('nav_tab', id);
                },
            };
            // 菜单点击事件
            $('.menu').click(function () {
                console.log($(this));
                let tabid = $(this).attr('id');
                url = $(this).attr('src'),
                name = $(this).text();
                var flag = false;
                $.each($('.layui-tab-title li[lay-id]'),function(){
                    if($(this).attr('lay-id') == tabid){
                        flag = true;
                    }
                });
                if(flag == false){
                    active.tabAdd(name, url, tabid);
                }
                active.tabChange(tabid);
            });
        });
    </script>
</div>
// 不同用户权限加载
<script>
    curUser = JSON.parse('<%=session.getAttribute("curUser")%>');
    console.log(curUser);
    var userlist = '<dd><a class="menu" id="profile" src="profile.jsp">个人主页</a></dd>';
    var informationBar = '<dd><a class="menu" id="news" src="main.jsp">新闻公告</a></dd>';
    userlist += '<dd><a href="javascript:;">设置</a></dd>';
    if (curUser == null) {
        console.log("无用户界面加载");
        userlist += '<dd><a lay-on="page-login" href="javascript:;">登录、注册</a></dd>';
        $("#userList").html(userlist);
        var userInfo = '<img src="res/imgs/portrait.png" class="layui-nav-img" id="mUserImg">';
        userInfo += '游客';
        $("#mUserInfo").html(userInfo);
        $("#infomationBar").html(informationBar);
    } else {

        userlist += '<dd><a lay-on="page-logout" href="logout.do">退出登录</a></dd>';
        $("#userList").html(userlist);
        var userInfo = '<img src="res/imgs/portrait.png" class="layui-nav-img" id="mUserImg">';
        userInfo += curUser.userName;

        $("#mUserInfo").html(userInfo);
        var upgop = '<dd><a id="stuList" class="menu" src ="all_student.jsp"> 学生信息列表</a></dd>';
        if (curUser.UGrade < 3) {
            console.log("高权限用户加载");
            upgop += '<dd><a id="stuGroup" class="menu" src ="stu_group.jsp">用户组</a></dd>';
            informationBar += '<dd><a class="menu" id="add_news" src="add_news.jsp">添加新闻</a></dd>';

            $("#user-option-list").html(upgop);
            $("#infomationBar").html(informationBar);
        } else {
            console.log("低权限用户加载");
            upgop += '<dd><a id="stuGroup" class="menu" src ="stu_group.jsp">用户组</a></dd>';
            $("#user-option-list").html(upgop);
            $("#infomationBar").html(informationBar);
        }
    }
</script>
<jsp:include page="register.jsp"></jsp:include>
</body>
</html>
