package servlet;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONObject;
import dao.INewsMsgDao;
import entity.NewsMsg;
import service.INewsMsgService;
import service.impl.NewsMsgServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

@WebServlet("/addNewsMsg")
public class addNewsMsgServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String title = req.getParameter("title");
        String body = req.getParameter("body");
        System.out.println(title);
        System.out.println(body);
        HttpSession session = req.getSession();
        String author = JSONObject.parseObject((String) session.getAttribute("curUser")).getString("userName");
        NewsMsg in =new NewsMsg(title,body,author);
        System.out.println(in.toString());

        NewsMsgServiceImpl newsMsgService = new NewsMsgServiceImpl();
        newsMsgService.addNewsMsg(in);

        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put("code",0);
        stringObjectHashMap.put("msg",1);
        String jsonString = JSON.toJSONString(stringObjectHashMap);
        PrintWriter out = resp.getWriter();
        out.print(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
