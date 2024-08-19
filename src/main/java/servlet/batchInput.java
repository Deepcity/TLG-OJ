package servlet;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
import dao.IStuCourseDao;
import dao.IStudentDao;
import dao.impl.StudentDaoImpl;
import entity.Student;
import service.IStudentService;
import service.impl.StudentServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Objects;

@WebServlet("/batchInput")
public class batchInput extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        System.out.println(action);
        if (action.equals("stu")) {
            batchInputStu(req, resp);
        } else if (action.equals("cou")) {
            batchInputCou(req, resp);
        } else {
            batchInputGro(req, resp);
        }
    }

    private void batchInputStu(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String data = req.getParameter("data");
        JSONArray parse = JSONArray.parse(data);
        IStudentService studentService = new StudentServiceImpl();
        int res = 0, cou = 0;
        for (int i = 0; i < parse.size(); i++) {
            JSONObject jsonObject = (JSONObject) parse.get(i);
            Student student = new Student(Integer.parseInt(jsonObject.getString("id")), jsonObject.getString("stuNo"), jsonObject.getString("stuName")
                    , jsonObject.getString("sex"), Integer.parseInt(jsonObject.getString("age")));
            cou += studentService.addStudent(student);
            res++;
        }
        HashMap < String,Object > respMap = new HashMap<>();
        respMap.put("msg", cou);
        respMap.put("code", 0);
        String jsonString = JSON.toJSONString(respMap);
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    private void batchInputGro(HttpServletRequest req, HttpServletResponse resp) {
    }

    private void batchInputCou(HttpServletRequest req, HttpServletResponse resp) {
    }
}
