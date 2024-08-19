package servlet;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONObject;
import entity.User;
import service.IUserService;
import service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.http.HttpRequest;

@WebServlet("/login.do")
public class loginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    private void logout(HttpServletRequest request,HttpServletResponse response) throws IOException{
        request.getSession().removeAttribute("CurUser");
        response.sendRedirect("main.jsp");
    }

    void login(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("LoginPost");
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
        User user = new User(jsonObject.getString("accountID"), jsonObject.getString("password"));
        IUserService userService = new UserServiceImpl();
        User userByAcoountID = userService.getUserByAcoountID(user);

        String captcha = jsonObject.getString("captcha");
        System.out.println(captcha);

        String cCaptcha = (String) req.getSession().getAttribute("captcha");

        System.out.println(cCaptcha);

        if (!captcha.equals(cCaptcha)) {
            respWriter.print("验证码不正确");
            resp.setStatus(202);
            reader.close();
            respWriter.close();
            return;
        }

        if (userByAcoountID != null && userByAcoountID.getPassword().equals(user.getPassword())) {
            session.setAttribute("curUser", JSON.toJSONString(userByAcoountID));
            System.out.println(session.getAttribute("curUser"));
            respWriter.print("登录成功");
        } else {
            respWriter.print("账号或密码不正确");
            resp.setStatus(201);
        }
        reader.close();
        respWriter.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        login(req, resp);
    }
}
