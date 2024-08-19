package dao.impl;

import base.BaseDao;
import base.factory.impl.StudentFactoryImpl;
import dao.IStuUserDao;
import dao.IStudentDao;
import entity.Student;
import entity.User;
import utils.JDBCUtil;

import java.sql.SQLException;

public class StuUserDaoImpl extends BaseDao<Student> implements IStuUserDao {
    public StuUserDaoImpl() {
        // TODO Auto-generated constructor stub
        table = "stu_user";
    }
    @Override
    public Student findStuByID(Student in) {
        Student res = in;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select uid from "+table+" where id = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, in.getId());
            rs = ps.executeQuery();
            while(rs.next())
                res.setUid(rs.getInt(1));
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
    public String findStuIDByUID(String UID) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select id from "+table+" where uid = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, UID);
            rs = ps.executeQuery();
            while(rs.next())
                res = rs.getString(1);
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
