package dao.impl;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson2.JSON;

@WebServlet(urlPatterns = "/getArea", name ="AreaDao")
public class AreaDao extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String codeParam = request.getParameter("code");
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Drive YES!!!!");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        String dbname = "jsp_latte_branew";
        String username = "root";
        String password = "Sungang456...";
        String urlString = "jdbc:mysql://localhost:3306/" + dbname;
        String sql = "select code,name from sc_area where citycode = ?";
        Connection conn = null;
        ResultSet rs = null;
        PreparedStatement preparedStatement = null;
        int res = 0;
        try {
            conn = DriverManager.getConnection(urlString,username,password);
            preparedStatement = conn.prepareStatement(sql);
            preparedStatement.setString(1, codeParam);
            res = preparedStatement.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            try {
                if(rs != null)
                    rs.close();
                if(preparedStatement!=null)
                    preparedStatement.close();
                if(conn!=null)
                    conn.close();
            } catch (Exception e) {
                e.printStackTrace();
                // TODO: handle exception
            }
        }
        response.setContentType("text/html;charset=utf-8");
        PrintWriter outPrintWriter = response.getWriter();
        outPrintWriter.print(res);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}
