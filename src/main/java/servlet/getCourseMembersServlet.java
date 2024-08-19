package servlet;

import com.alibaba.fastjson2.JSON;
import dao.IGradeDao;
import dao.IGroupDao;
import dao.IStuGroupDao;
import dao.IStudentDao;
import dao.impl.GroupDaoImpl;
import dao.impl.StuGroupDaoImpl;
import dao.impl.StudentDaoImpl;
import entity.ClassicGroupBean;
import entity.Group;
import entity.Student;
import service.ICourseService;
import service.IGroupService;
import service.IStudentService;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/getCourseMembers")
public class getCourseMembersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse
            response) throws ServletException, IOException {
        String cid = request.getParameter("cid");
        ICourseService courseService = new CourseServiceImpl();
        IGroupDao groupDao = new GroupDaoImpl();

        List<ClassicGroupBean> res = new ArrayList<>();
        List<Integer> ids = courseService.getIdsByCid(Integer.parseInt(cid));

        int id = 0;
        for (int item: ids
             ) {
            ClassicGroupBean group = new ClassicGroupBean();
            group.setId(String.valueOf(++id));
            group.setGid(String.valueOf(item));
            group.setGroupName(groupDao.getGroupNameById(String.valueOf(item)));
            res.add(group);
        }
        int count = courseService.getStuCountByCid(Integer.parseInt(cid));
        Map<String, Object> stuMap = new HashMap<>();
        stuMap.put("code", 0);
        stuMap.put("msg", "");
        stuMap.put("count", count);
        stuMap.put("data", res);
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
