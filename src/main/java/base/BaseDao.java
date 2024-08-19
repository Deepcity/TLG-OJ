package base;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import base.factory.Factory;
import entity.D_Course;
import entity.User;
import utils.JDBCUtil;

public class BaseDao<T>{
    protected Connection conn;
    protected PreparedStatement ps;
    protected ResultSet rs;
    protected String table;
    
    protected List<T> findAll(Factory<T> factory) {
        List<T> list = new ArrayList<T>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from " + table;
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()) {
                T instance = factory.create(rs);
                list.add(instance);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                JDBCUtil.close(rs, ps, conn);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return list;
    }
    protected int getRowCount() {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select count(*) from " + table;
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()) {
                res = rs.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                JDBCUtil.close(rs, ps, conn);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return res;
    }

    public List<T> getAllByPage(int pageNo, int pageSize,Factory<T> factory) {
        List<T> res = new ArrayList<>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from "+table+"  limit ?,?";
            ps= conn.prepareStatement(sql);
            ps.setInt(1,(pageNo-1) * pageSize);
            ps.setInt(2,pageSize);
            rs = ps.executeQuery();
            while (rs.next()){
                res.add(factory.create(rs));
            }
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            try {
                JDBCUtil.close(rs,ps,conn);
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
        return res;
    }
}