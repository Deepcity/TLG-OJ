package servlet;

import com.alibaba.fastjson2.JSON;
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

@WebServlet("/delStudent")
public class deleteStudentServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String data = req.getParameter("id");
        System.out.println(data);
        String[] ids = data.split(",");
        String stuSex = req.getParameter("stuSex");
        StudentServiceImpl studentService = new StudentServiceImpl();
        int n = studentService.delStudent(ids);
        Map<String,Object> stuMap = new HashMap<>();
        stuMap.put("code",0);
        stuMap.put("msg",n);
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
