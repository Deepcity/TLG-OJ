package servlet;

import com.alibaba.fastjson2.JSON;
import dao.IStuCourseDao;
import service.ICourseService;
import service.impl.CourseServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

@WebServlet("/addCourse")
public class addCourseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        if(action.equals("addByCourse")){
            addCourseByCourse(req,resp);
        }
        else if (action.equals("addByCourseName")){
            addCourse(req, resp);
        }
    }

    private void addCourseByCourse(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String courseName = req.getParameter("courseName");
        String coursesID = req.getParameter("coursesID");
        String[] ids = coursesID.split(",");
        System.out.println("2:"+courseName);
        ICourseService courseService = new CourseServiceImpl();
        int n = courseService.addCourse(courseName);
        HashMap<String,Object> respMap = new HashMap<>();
        if(n==-1){
            respMap.put("code",-1);
            respMap.put("msg","存在同名");
            String jsonString = JSON.toJSONString(respMap);
            resp.setContentType("text/html;charset=utf-8");
            PrintWriter out = resp.getWriter();
            out.print(jsonString);
            return;
        }
        int res = courseService.addCourseStuByCourse(courseName, ids);
        respMap.put("code",0);
        respMap.put("msg",res);
        String jsonString = JSON.toJSONString(respMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }


    void addCourse(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String courseName = req.getParameter("courseName");
        System.out.println(courseName);
        ICourseService courseService = new CourseServiceImpl();

        HashMap<String,Object> respMap = new HashMap<>();
        int n = courseService.addCourse(courseName);
        if(n==-1){
            respMap.put("code",-1);
            respMap.put("msg","存在同名");
            String jsonString = JSON.toJSONString(respMap);
            resp.setContentType("text/html;charset=utf-8");
            PrintWriter out = resp.getWriter();
            out.print(jsonString);
            return;
        }
        respMap.put("code",0);
        respMap.put("msg",n);
        String jsonString = JSON.toJSONString(respMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
