<%@ page import="com.alibaba.fastjson2.JSON" %><%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/26
  Time: 14:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
    <script src="JS/global.js"></script>
</head>
<body>
<div class="layui-container">
    <div class="layui-form layui-form-pane">
        <div class="layui-form-item">
            <button type="button" class="layui-btn" id="LAY-excel-upload">
                <i class="layui-icon"></i>导入
            </button>
            <div class="layui-input-inline">
                <input type="text" name="excelName" lay-verify="required" id="excelName" placeholder="excel地址"
                       value="" class="layui-input" readonly>
            </div>
            <button class="layui-btn" id="choose-table">
                <span>下拉菜单</span>
                <i class="layui-icon layui-icon-down layui-font-12"></i>
            </button>
        </div>

        <button type="submit" class="layui-btn layui-btn-primary" lay-submit lay-filter="upload-define-btn">确认上传
        </button>
    </div>

    <table class="layui-table" lay-size="sm" id="groupTable"></table>
</div>

</body>
<script>
    layui.use(function () {
        var $ = layui.$;
        var upload = layui.upload;
        //upload上传实例
        var dropdown = layui.dropdown;
        var chooseItem=null;
        var inData;
        var form = layui.form;
        // 渲染
        dropdown.render({
            elem: '#choose-table', // 绑定元素选择器，此处指向 class 可同时绑定多个元素
            data: [{
                title: '学生表',
                id: 100
            },{
                title: '用户组表',
                id: 101
            },{
                title: '课程表',
                id: 102
            }],
            click: function(obj){
                this.elem.find('span').text(obj.title);
                chooseItem = obj.title;
            }
        });

        var uploadInst = upload.render({
            elem: '#LAY-excel-upload' //绑定元素
            , url: '/uploadExcelObject/' //上传接口（PS:这里不用传递整个 excel）
            , auto: false //选择文件后不自动上传
            , accept: 'file'
            , choose: function (obj) {// 选择文件回调
                var files = obj.pushFile()
                var fileArr = Object.values(files)// 注意这里的数据需要是数组，所以需要转换一下
                console.log(files);
                console.log(fileArr);

                $("#excelName").val(fileArr.at(0).name);

                // 用完就清理掉，避免多次选中相同文件时出现问题
                for (var index in files) {
                    if (files.hasOwnProperty(index)) {
                        delete files[index]
                    }
                }
                $('#LAY-excel-upload').next().val('');

                uploadExcel(fileArr) // 如果只需要最新选择的文件，可以这样写： uploadExcel([files.pop()])
            }
        });

        form.on('submit(upload-define-btn)',function ()
        {
            if(chooseItem==null) {
                layer.msg('未选择表',{time : 600});
                return;
            }
            console.log(chooseItem);
            console.log(inData);
            console.log(JSON.stringify(inData));
            if(chooseItem=="学生表"){
                $.post('batchInput',{"action":"stu","data":JSON.stringify(inData)}, function (d){
                    if(d.code==0){
                        console.log("Y");
                        layer.msg('新建了' + d.msg + '个学生',{time : 600});
                    }else {
                        layer.msg('新建失败，原因：'+ d.msg,{time : 600});
                    }
                }, 'json');
            }else if(chooseItem=="课程表"){

            }else{

            }
        })

        /**
         * 上传excel的处理函数，传入文件对象数组
         */
        function uploadExcel(files) {
            layui.use(['excel', 'layer'], function () {
                var excel = layui.excel
                var layer = layui.layer
                var table = layui.table

                try {
                    excel.importExcel(files, {
                        // 读取数据的同时梳理数据
                        fields: {
                            'id': 'A'
                            , 'stuNo': 'B'
                            , 'stuName': 'C'
                            , 'sex': 'D'
                            , 'age': 'E'
                        }
                    }, function (data) {
                        // 还可以再进行数据梳理
                        console.log(data);
                        console.log(data[0].Sheet1[0]);

                        let cols = [[]];
                        let colsData = data[0].Sheet1.shift();
                        for (var key in colsData) {
                            cols[0].push({field: key, width: 100, title: colsData[key], rowspan: 1});
                        }
                        let tableData = data[0].Sheet1;
                        inData=data[0].Sheet1;
                        console.log(cols);

                        var tableInst = table.render({
                            elem: '#groupTable',
                            id: 'groupTable',
                            height: 800,
                            width: 600,
                            data: tableData,
                            cols: cols,
                            skin: 'line', // 表格风格
                            //even: true,
                            page: true, // 是否显示分页
                            limit: 20
                        })
                    })
                } catch (e) {
                    layer.alert(e.message)
                }
            })
        }
    })
</script>
</html>