package servlet;

import com.alibaba.fastjson2.JSONObject;
import entity.User;
import service.IUserService;
import service.impl.UserServiceImpl;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

@WebServlet("/register.do")
public class registerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("RegisterGet");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        req.setCharacterEncoding("UTF-8");
        PrintWriter respWriter = resp.getWriter();
        HttpSession session = req.getSession();

        /**
         * 接收json
         */
        BufferedReader reader = req.getReader();
        String json = reader.readLine();
        System.out.println(json);
        JSONObject jsonObject = JSONObject.parseObject(json);
        User user = new User(jsonObject.getString("accountID"), jsonObject.getString("password"),jsonObject.getString("username"));
        IUserService userService = new UserServiceImpl();
        boolean flag = userService.insertUser(user);
        if(flag) {
            respWriter.print("注册成功");
            resp.setStatus(200);
        }else {
            respWriter.print("账号已存在");
            resp.setStatus(201);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        doGet(req, resp);
    }
}
