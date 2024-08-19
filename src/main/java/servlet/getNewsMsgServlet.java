package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson2.JSON;

import entity.NewsMsg;
import service.INewsMsgService;
import service.impl.NewsMsgServiceImpl;

@WebServlet("/getNewsMsg")
public class getNewsMsgServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse
            response) throws ServletException, IOException {
        getAllMsg(request, response);
    }
    
    void getAllMsg(HttpServletRequest request, HttpServletResponse
            response) throws IOException{
    	INewsMsgService newsMsgService = new NewsMsgServiceImpl();
        List<NewsMsg> newsMsgs = newsMsgService.getNewsMsgs();
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String jsonString = JSON.toJSONString(newsMsgs);
        out.print(jsonString);
    }
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}