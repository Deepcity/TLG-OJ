package servlet;

import com.alibaba.fastjson2.JSON;
import dao.IStuGroupDao;
import dao.IStudentDao;
import dao.impl.StuGroupDaoImpl;
import dao.impl.StudentDaoImpl;
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

@WebServlet("/getGroupMembers")
public class getGroupMembersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse
            response) throws ServletException, IOException {
        String gid = request.getParameter("gid");
        GroupServiceImpl groupService = new GroupServiceImpl();
        IStudentService studentService = new StudentServiceImpl();
        System.out.println(gid);

        List<String> ids = groupService.getIDsByGID(gid);
        System.out.println(ids);

        List<Student> students =
                studentService.getStudentsByIDs(ids);
        System.out.println(students);
        int count = groupService.getMembersRowCount(gid);
        Map<String, Object> stuMap = new HashMap<>();
        stuMap.put("code", 0);
        stuMap.put("msg", "");
        stuMap.put("count", count);
        stuMap.put("data", students);
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
