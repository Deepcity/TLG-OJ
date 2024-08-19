<%@ page import="com.alibaba.fastjson2.JSONObject" %>
<%@ page import="dao.IStuUserDao" %>
<%@ page import="dao.impl.StuUserDaoImpl" %>
<%@ page import="com.alibaba.fastjson2.JSON" %>
<%@ page import="entity.Student" %>
<%@ page import="service.IUserService" %>
<%@ page import="service.impl.UserServiceImpl" %><%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/26
  Time: 16:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>个人页面</title>
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
    <script src="JS/global.js"></script>
    <script src="layui/modules/croppers.js"></script>
</head>
<body>
<div class="layui-container">
    <div class="layui-form layui-form-pane">
        <div class="layui-form-item">
            <label class="layui-form-label">头像</label>
            <div class="layui-input-inline">
                <input type="text" name="head" lay-verify="required" id="inputimgurl" placeholder="图片地址"
                       value="portrait.png" class="layui-input" readonly>
            </div>
            <div class="layui-input-inline">
                <div class="layui-upload-list" style="margin:0">
                    <img src="res/imgs/portrait.png" id="srcimgurl" class="layui-upload-img">
                </div>
            </div>
            <div class="layui-input-inline layui-btn-container" style="width: auto;">
                <button class="layui-btn layui-btn-primary" id="editimg">修改图片</button>
            </div>
            <div class="layui-form-mid layui-word-aux">头像的尺寸限定150x150px,大小在50kb以内</div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label"> 昵称</label>
            <input class="layui-input layui-input-inline" placeholder="userName" id="userName"></div>


        <div class="layui-form-item">
            <label class="layui-form-label"> 账号</label>
            <input class="layui-input layui-input-inline" placeholder="accountID" readonly id="accountID"></div>

        <div class="layui-form-item">
            <label class="layui-form-label"> 密码</label>
            <button type="submit" class="layui-btn layui-btn-primary" lay-submit lay-filter="password-modify-btn">修改密码
            </button>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label"> 账号等级</label>
            <input class="layui-input layui-input-inline" placeholder="账号等级" readonly id="uGrade"></div>

        <div class="layui-form-item">
            <label class="layui-form-label"> 绑定学生id</label>
            <input class="layui-input layui-input-inline" placeholder="id" readonly id="stuID"></div>
    </div>
</div>
<script>
    layui.use(['form', 'croppers'], function () {
        var $ = layui.jquery
            , form = layui.form
            , croppers = layui.croppers
            , layer = layui.layer;

        curUser = JSON.parse('<%=session.getAttribute("curUser")%>');
        console.log(curUser);
        if (curUser != null) {
            $("#accountID").val(curUser.accountID);
            $("#userName").val(curUser.userName);
            $("#uGrade").val(curUser.UGrade);
            if (curUser.uGrade != null && curUser.uGrade < 3) {
                $("#stuID").readOnly;
            } else if (curUser != null) {
                <%
                    IUserService userService = new UserServiceImpl();
                    JSONObject curUser = JSONObject.parse((String) session.getAttribute("curUser"));
//                     System.out.println((curUser);
                    String uid = null;
                    if(curUser != null){
                        uid = userService.getIDByUID(curUser.getString("uid"));
                    }
                %>
                console.log(<%=uid%>);
                let uid = <%= uid%>;
                if (uid != null)
                    $("#stuID").val(<%=uid%>);
                else $("#stuID").val("未绑定");
            }
        }

        form.on('submit(password-modify-btn)', function () {
            console.log(curUser);
            layer.open({
                type: 2,
                title: '密码修改',
                skin: 'layui-layer-lan', //样式类名，即子页面边框样式
                closeBtn: 1, //要显示关闭按钮
                anim: 2,
                shadeClose: false, //开启遮罩
                moveOut: false,
                area: ['350px', '300px'],
                content: 'modifyPassword.html'
                , resize: false
                , maxmin: false //开启最大化最小化按钮
                , success: function (layer, index) {
                    // 获取子页面的iframe
                    var iframe = window['layui-layer-iframe' + index];
                    // 向子页面的全局函数child传参
                    if (curUser == null) console.log("error: 未登录");
                    else iframe.child(curUser);
                }
            });
            return false;
        });


        //创建一个头像上传组件
        croppers.render({
            elem: '#editimg'
            , saveW: 150     //保存宽度
            , saveH: 150
            , mark: 1 / 1    //选取比例
            , area: '900px'  //弹窗宽度
            , url: "uploadImg"  //图片上传接口返回和（layui 的upload 模块）返回的JSON一样
            , done: function (url) { //上传完毕回调
                $("#inputimgurl").val(url);
                $("#srcimgurl").attr('src', url);
                console.log("DONE!!!")
            }
        });

    });
</script>
</body>
</html>
