<%@ page import="entity.User" %><%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/22
  Time: 16:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<head>
    <meta charset="utf-8">
    <title>DPGOJ新闻页</title>
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
    <script type="text/javascript" src="JS\jquery-3.7.1.min.js"></script>
</head>
<div class="layui-layout layui-layout-admin">
    <!-- 内容主体区域 -->
    <div class="news" id="card_new"></div>

    <script type="text/javascript">

        $(function () {
            var html = '<div style="padding: 15px;">' +
                '<div class="layui-card layui-panel">' +
                '<div class="layui-card-header">' +
                '常驻通知' +
                '</div>' +
                '<div class="layui-card-body">' +
                '正在开发中' +
                '</div>' +
                '</div>' +
                '</div>';
            $.ajax({
                type: "get",
                url: "getNewsMsg",
                dataType: "json",
                success: function (news) {
                    console.log(news);
                    for (var i = 0; i < news.length; i++) {
                        var item = news[i];
                        html += '<div style="padding: 15px;">' +
                            '<div class="layui-card layui-panel">' +
                            '<div class="layui-card-header">' +
                            item.title +
                            '</div>' +
                            '<div class="layui-card-body">' +
                            item.body +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                    $("#card_new").html(html);
                }
            })
        })
        curUser = JSON.parse('<%=session.getAttribute("curUser")%>');
        if (curUser == null || curUser.UGrade > 3) {
            console.log("新闻无权限用户界面加载");
            var pgop = '<li class="layui-nav-item layui-hide-xs"><a href="mainmain.jsp">现在新闻</a></li>';
            $("#page-option").html(pgop);

        } else {
            var pgop = '<li class="layui-nav-item layui-hide-xs"><a href="mainmain.jsp">现在新闻</a></li>';
            pgop += '<li class="layui-nav-item layui-hide-xs"><a href="add_news.jsp">添加新闻</a></li>';
            $("#page-option").html(pgop);
        }
    </script>
</div>