<%--
  Created by IntelliJ IDEA.
  User: Deepcity
  Date: 2023/12/30
  Time: 23:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户组</title>
    <link href="layui/css/layui.css" rel="stylesheet">
    <script src="layui/layui.js"></script>
</head>
<body>
<div class="layui-container">
    <div style="margin: 10px 10px 10px 10px">
        <form class="layui-form layui-form-pane">
            <div class="layui-form-item">
                <div class="layui-inline" style="width: 80%">
                    <div class="layui-input-inline" style="width: 100%">
                        <input type="text" name="searchParam" autocomplete="off"
                               placeholder="用户组名称" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <button type="submit" class="layui-btn layui-btn-primary" lay-submit lay-filter="data-search-btn">
                        <i class="layui-icon layui-icon-search" style="font-size: 20px; color: #1E9FFF;"></i> 搜 索
                    </button>
                </div>
            </div>
        </form>
    </div>
    <table id="page_group" lay-filter="test"></table>

    <div class="layui-btn-group tableCheck">
        <button class="layui-btn" data-type="getCheckData">获取选中行数据</button>
        <button class="layui-btn" data-type="getCheckLength">获取选中数目</button>
        <button class="layui-btn" data-type="clearCheckData">清空选中数目</button>
    </div>
</div>
<script type="text/html" id="tableTabBar">
    <div class="layui-clear-space">
        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-xs" lay-event="del">删除</a>
    </div>
</script>
<script src="layui/layui.js"></script>
<script>
    layui.use(['table'], function () {
        var $ = layui.jquery;
        var rowCount;
        var form = layui.form;
        var table = layui.table;
        var pageData = [];

        var myDone = function (res) {
            var tbl = $('#page_group').next('.layui-table-view');

            //.记下当前页数据，Ajax 请求的数据集，对应你后端返回的数据字段
            pageData = res.data;
            var len = pageData.length;

            //.遍历当前页数据，对比已选中项中的 id
            for (var i = 0; i < len; i++) {
                if (layui.data('checked', pageData[i]['gid'])) {
                    //.选中它，目前版本没有任何与数据或表格 id 相关的标识，不太好搞，土办法选择它吧
                    tbl.find('table>tbody>tr').eq(i).find('td').eq(0).find('input[type=checkbox]').prop('checked', true);
                }
            }

            //.PS：table 中点击选择后会记录到 table.cache，没暴露出来，也不能 mytbl.renderForm('checkbox');
            //.暂时只能这样渲染表单
            form.render('checkbox');
        };

        layui.data('checked', null);

        table.render({
            elem: '#page_group',
            id: 'page_group',
            height: 920,
            url: 'getGroup', //数据接口
            toolbar: "default",
            defaultToolbar: ['filter', 'exports', 'print', {
                title: '提示',
                layEvent: 'refresh',
                icon: 'layui-icon-refresh'
            }],
            page: true, //开启分页
            limit: 20,
            cols: [[ //表头
                {
                    type: 'checkbox',
                    width: '10%'
                },
                {
                    field: 'gid',
                    title: 'GID',
                    width: '20%',
                    sort: true,
                    align: 'center'
                },{
                    field: 'groupName',
                    title: '用户组人数',
                    width: '40%',
                    align: 'center'
                }, {
                    field: 'countNum',
                    title: '用户组人数',
                    width: '20%',
                    align: 'center'
                },{
                    title: '操作',
                    minWidth: '10%',
                    toolbar: '#tableTabBar',
                    align: 'center'
                }]],
            done: function (res, curr, count) {
                rowCount = count;
                myDone(res);
            }
        });
        table.on('toolbar', function (obj) {
            if (obj.event === 'add') {
                layer.open({
                    type: 2,
                    title: '添加用户组',
                    content: 'addGroupBystuID.html',
                    area: ['600px', '600px'],
                    maxmin: true,
                    end: function () {
                        table.reload("page_group");
                    }
                })
            } else if (obj.event === 'delete') {
                var mySelected = [];
                $.each(layui.data('checked'), function (k, v) {
                    mySelected.push(v);
                });
                console.log(mySelected);
                if (mySelected.length == 0) {
                    layer.msg('请选择要删除的行');
                } else {
                    let str = "";
                    for (let i = 0; i < mySelected.length; i++)
                        str += mySelected[i].gid + ",";
                    layer.confirm('确定要删除吗？', {icon: 3, title: "提示"}, function (index) {
                        $.post('delGroup', "gid=" + str, function (d) {
                            if (d.code == 0) {
                                table.reload("page_group");
                                layer.msg("删除了" + d.msg + "条数据");
                            } else {
                                layer.msg("删除失败");
                            }
                        }, 'json')
                        layer.close(index);
                    })
                }
            } else if (obj.event === 'update') {
                var mySelected = [];
                $.each(layui.data('checked'), function (k, v) {
                    mySelected.push(v);
                });
                console.log(mySelected);
                if (mySelected.length == 0) {
                    layer.msg('请选择要组建用户群的行');
                } else {
                    layer.open({
                        type: 2,
                        title: '用户组添加',
                        skin: 'layui-layer-lan', //样式类名，即子页面边框样式
                        closeBtn: 1, //要显示关闭按钮
                        anim: 2,
                        shadeClose: false, //开启遮罩
                        moveOut: false,
                        area: ['500px', '500px'],
                        content: 'addGroupByGroup.html'
                        , resize: false
                        , maxmin: false //开启最大化最小化按钮
                        , success: function (layer, index) {
                            // 获取子页面的iframe
                            var iframe = window['layui-layer-iframe' + index];
                            // 向子页面的全局函数child传参
                            iframe.child(mySelected);
                        },end: function () {
                            layui.data('checked', null);
                            table.reload("page_group");
                        }
                    });
                }
            }else if(obj.event === 'refresh') {
                layui.data('checked', null);
                table.reload("page_group");
            }
        });
        //单元格事件
        table.on('tool(test)', function (obj) {
            console.log(obj)
            var data = obj.data;
            let event = obj.event;
            if (event == 'edit') {
                layer.open({
                    type: 2,
                    title: '编辑用户组',
                    content: 'editGroup.html',
                    area: ['480px', '365px'],
                    maxmin: true,
                    success: function (layero, index) {
                        var body = layer.getChildFrame('body', index);
                        var data = obj.data
                        body.find('#groupName').val(data.groupName);
                        var iframe = window['layui-layer-iframe'+index];
                        iframe.child(obj);
                    },
                    end: function () {
                        table.reload("page_group");
                    }
                })
            } else if (event == "del") {
                layer.confirm('确定要删除吗？', {icon: 3, title: "提示"}, function (index) {
                    $.post('delGroup', "gid=" + data.gid, function (d) {
                        if (d.code == 0) {
                            table.reload("page_group");
                            layer.msg("删除了" + d.msg + "条数据");
                        } else {
                            layer.msg("删除失败");
                        }
                    }, 'json')
                    layer.close(index);
                })
            }
        });

        table.on('checkbox(test)', function (obj) {
            console.log(obj);
            //.全选或单选数据集不一样
            var data = obj.type == 'one' ? [obj.data] : pageData;

            //.遍历数据
            $.each(data, function (k, v) {
                //.假设你数据中 id 是唯一关键字
                if (obj.checked) {
                    //.增加已选中项
                    layui.data('checked', {
                        key: v.gid, value: v
                    });
                } else {
                    //.删除
                    layui.data('checked', {
                        key: v.gid, remove: true
                    });
                }
            });
        });

        var active = {
            getCheckData: function () { //获取选中数据
                //.看看已选中的所有数据
                var mySelected = [];
                $.each(layui.data('checked'), function (k, v) {
                    mySelected.push(v);
                });
                console.log(mySelected);
                layer.alert(JSON.stringify(mySelected));

                //.看 myDone 的注释得知，下面的方法就不可用了
                //var checkStatus = table.checkStatus('maintb')
                //    ,data = checkStatus.data;
                //layer.alert(JSON.stringify(data));
            }
            , getCheckLength: function () { //获取选中数目
                layer.msg('选中了：' + Object.getOwnPropertyNames(layui.data('checked')).length + ' 个');

                //var checkStatus = table.checkStatus('maintb')
                //    ,data = checkStatus.data;
                //layer.msg('选中了：'+ data.length + ' 个');
            }
            , clearCheckData: function () {
                layui.data('checked', null);
                table.reload('page_group');
            }
        };

        $('.tableCheck .layui-btn').on('click', function () {
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });

        form.on('submit(data-search-btn)', function (data) {
            console.log(data)
            table.reload('page_group', {
                page: {
                    curr: 1
                }
                , where: {
                    searchParams: data.field.searchParam
                }
            });
            return false;
        });
    });
</script>
</body>
</html>
