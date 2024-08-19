package dao.impl;

import base.BaseDao;
import base.factory.impl.CourseFactoryImpl;
import dao.ICourseDao;
import entity.D_Course;
import entity.D_Grade;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CourseDaoImpl extends BaseDao<D_Course> implements ICourseDao {
    CourseFactoryImpl courseFactory;
    public CourseDaoImpl(){
        table = "course";
        courseFactory = new CourseFactoryImpl();
    }


    @Override
    public String getCourseNameByCid(String cid) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select courseName from "+table+" where cid = ?";
            ps= conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(cid));
            rs=ps.executeQuery();
            while(rs.next())
                res = String.valueOf(rs.getString(1));
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

    public List<D_Course> getAll(){
        return super.findAll(courseFactory);
    }

    @Override
    public List<D_Course> getAllByPage(int pageNo, int pageSize) {
        return super.getAllByPage(pageNo,pageSize,courseFactory);
    }

    @Override
    public int getRowCount() {
        return super.getRowCount();
    }

    @Override
    public int insertCourse(String courseName) {
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (courseName) values (?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, courseName);
            return ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                JDBCUtil.close(rs, ps, conn);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return 0;
    }

    @Override
    public int deleteCourses(String[] ids) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "delete from "+table+" where cid = ?";
            ps = conn.prepareStatement(sql);
            for(String id:ids){
                ps.setInt(1, Integer.parseInt(id));
                ps.addBatch();
            }
            int[] executeBatch = ps.executeBatch();
            for(int i: executeBatch)
                res += i;
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
    public String getCourseCidByCourseName(String courseName) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select cid from "+table+" where courseName = ?";
            ps= conn.prepareStatement(sql);
            ps.setString(1, courseName);
            rs=ps.executeQuery();
            while(rs.next())
                res = String.valueOf(rs.getString(1));
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
