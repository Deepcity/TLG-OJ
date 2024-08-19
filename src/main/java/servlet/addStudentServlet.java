package servlet;

import com.alibaba.fastjson2.JSON;
import entity.Student;
import service.impl.StudentServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/addStudent")
public class addStudentServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String stuNo = req.getParameter("stuNo");
        String stuName = req.getParameter("stuName");
        int stuAge = Integer.parseInt(req.getParameter("stuAge"));
        String stuSex = req.getParameter("stuSex");
        Student student = new Student(stuNo, stuName, stuSex, stuAge);
        StudentServiceImpl studentService = new StudentServiceImpl();
        int n = studentService.addStudent(student);
        Map<String,Object> stuMap = new HashMap<>();
        stuMap.put("code",0);
        stuMap.put("msg",n);
        stuMap.put("data",student);
        String jsonString = JSON.toJSONString(stuMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
