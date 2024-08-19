package dao.impl;

import base.BaseDao;
import dao.IStuGroupDao;
import entity.Group;
import entity.Student;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StuGroupDaoImpl extends BaseDao<Group> implements IStuGroupDao {
    public StuGroupDaoImpl(){
        table = "stu_group";
    }
    @Override
    public int insertStuGroup(int gid,String[] ids) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (gid,id) values (?,?)";
            ps = conn.prepareStatement(sql);
            for(String id:ids){
                ps.setInt(1, gid);
                ps.setInt(2, Integer.parseInt(id));
                ps.addBatch();
            }
            int[] executeBatch = ps.executeBatch();
            for(int i: executeBatch)
                res +=i;
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

    @Override
    public int getGroupCountByGid(int gid) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select count(*) from "+table+" where gid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, gid);
            rs = ps.executeQuery();
            if (rs.next())
                res = rs.getInt(1);
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            try{
                JDBCUtil.close(rs,ps,conn);
            }catch (SQLException e)
            {
                e.printStackTrace();
            }
        }
        return res;
    }

    @Override
    public List<String> getStuIDsByGroup(String gid) {
        List<String> res = new ArrayList<>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select id from "+table+" where gid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(gid));
            rs = ps.executeQuery();
            while (rs.next())
                res.add(String.valueOf(rs.getInt(1)));
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            try{
                JDBCUtil.close(rs,ps,conn);
            }catch (SQLException e)
            {
                e.printStackTrace();
            }
        }
        return res;
    }
}
