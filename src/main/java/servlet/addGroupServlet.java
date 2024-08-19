package servlet;

import com.alibaba.fastjson2.JSON;
import service.IGroupService;
import service.impl.GroupServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/addGroup")
public class addGroupServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        System.out.println(action);

        if(action.equals("addByID")){
            addByID(req,resp);
        }else if(action.equals("addBystuID")){
            addBystuID(req,resp);
        }else {
            addByGroup(req,resp);
        }
    }

    private void addByGroup(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String groupName = req.getParameter("groupName");
        String groupsID = req.getParameter("groupsID");
        System.out.println(groupName);
        System.out.println(groupsID);

        IGroupService groupService = new GroupServiceImpl();

        Map<String,Object> stuMap = new HashMap<>();
        if(groupService.getIDByGroupName(groupName)!=-1){
            System.out.println("!!!! 出现重复组");
            stuMap.put("code",1);
            stuMap.put("msg","当前群组已经存在，请更换群组名称");
        }else{
            groupService.addGroup(groupName);
            int idByGroupName = groupService.getIDByGroupName(groupName);
            String[] ids = groupsID.split(",");
            int n = groupService.addGroupByGroups(idByGroupName,ids);
            stuMap.put("code",0);
            stuMap.put("msg",n);
        }
        String jsonString = JSON.toJSONString(stuMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    private void addBystuID(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String groupName = req.getParameter("groupName");
        String membersID = req.getParameter("stuIDs");
        System.out.println(groupName);
        System.out.println(membersID);
        IGroupService groupService = new GroupServiceImpl();
        Map<String,Object> stuMap = new HashMap<>();
        if(groupService.getIDByGroupName(groupName)!=-1){
            System.out.println("!!!! 出现重复组");
            stuMap.put("code",1);
            stuMap.put("msg","当前群组已经存在，请更换群组名称");
        }else{
            groupService.addGroup(groupName);
            int idByGroupName = groupService.getIDByGroupName(groupName);
            String[] ids = membersID.split(",");
            int n = groupService.addGroupBystuID(idByGroupName,ids);
            stuMap.put("code",0);
            stuMap.put("msg",n);
        }
        String jsonString = JSON.toJSONString(stuMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    private void addByID(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String groupName = req.getParameter("groupName");
        String membersID = req.getParameter("membersID");
        System.out.println(groupName);
        System.out.println(membersID);
        PrintWriter respWriter = resp.getWriter();

        IGroupService groupService = new GroupServiceImpl();

        Map<String,Object> stuMap = new HashMap<>();
        if(groupService.getIDByGroupName(groupName)!=-1){
            System.out.println("!!!! 出现重复组");
            stuMap.put("code",1);
            stuMap.put("msg","当前群组已经存在，请更换群组名称");
        }else{
            groupService.addGroup(groupName);
            int idByGroupName = groupService.getIDByGroupName(groupName);
            String[] ids = membersID.split(",");
            int n = groupService.addGroupStu(idByGroupName,ids);
            stuMap.put("code",0);
            stuMap.put("msg",n);
        }
        String jsonString = JSON.toJSONString(stuMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }
}
