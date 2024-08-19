package servlet;

import com.alibaba.fastjson2.JSON;
import entity.Group;
import entity.Student;
import service.IGroupService;
import service.IStudentService;
import service.impl.GroupServiceImpl;
import service.impl.StudentServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/getGroup")
public class getGroupServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse
            response) throws ServletException, IOException {
        String queryString = request.getParameter("searchParams");
        if(queryString == null) {
            queryString = "";
        }

        String page = request.getParameter("page");//默认传1
        String limit = request.getParameter("limit");//默认传10
        int pageNo = Integer.valueOf(page);//当前页
        int pageSize = Integer.valueOf(limit);//每页条数
        IGroupService groupService = new GroupServiceImpl();
        List<Group> groups =
                groupService.getGroupsByPage(pageNo,pageSize, queryString);
        int count = groupService.getRowCount(queryString);
        Map<String, Object> stuMap = new HashMap<>();
        stuMap.put("code", 0);
        stuMap.put("msg", "");
        stuMap.put("count", count);
        stuMap.put("data", groups);
        String jsonString = JSON.toJSONString(stuMap);
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.print(jsonString);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}
