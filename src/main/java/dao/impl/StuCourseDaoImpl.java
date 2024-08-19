package dao.impl;

import base.BaseDao;
import dao.IStuCourseDao;
import entity.D_StuCourse;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StuCourseDaoImpl extends BaseDao<D_StuCourse> implements IStuCourseDao {
    public StuCourseDaoImpl() {
        table="group_course";
    }
    @Override
    public int getStuNumberByCid(int cid) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select count(*) from "+table+" where cid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, cid);
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
    public List<Integer> getIdsByCid(int cid) {
        List<Integer> res = new ArrayList<>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select gid from "+table+" where cid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, cid);
            rs = ps.executeQuery();
            if (rs.next())
                res.add(rs.getInt(1));
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
    public int insertCourseStuByIds(int cid, List<Integer> ids) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (cid,gid) values (?,?)";
            ps = conn.prepareStatement(sql);
            for(int id:ids){
                ps.setInt(1, cid);
                ps.setInt(2, id);
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
}
