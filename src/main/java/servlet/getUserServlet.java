package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;

@WebServlet("/getUser")
public class getUserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse
            response) throws ServletException, IOException {
        Object action = request.getAttribute("action");
        if(action.equals("getImg")){
            getUserImg(request, response,50,50);
        }
    }

    void getUserImg(HttpServletRequest request, HttpServletResponse
            response,int w,int h){
        BufferedImage image =  new BufferedImage(w, h, 1);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}
