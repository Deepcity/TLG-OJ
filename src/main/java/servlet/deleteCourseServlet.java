package servlet;

import com.alibaba.fastjson2.JSON;
import service.ICourseService;
import service.IGroupService;
import service.impl.CourseServiceImpl;
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
import java.util.Map;

@WebServlet("/delCourse")
public class deleteCourseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String data = req.getParameter("cids");
        System.out.println(data);
        String[] ids = data.split(",");
        ICourseService courseService = new CourseServiceImpl();
        int n = courseService.delCourses(ids);
        Map<String,Object> respMap = new HashMap<>();
        respMap.put("code",0);
        respMap.put("msg",n);
        String jsonString = JSON.toJSONString(respMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
