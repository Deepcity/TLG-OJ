package dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import base.BaseDao;
import base.factory.impl.StudentFactoryImpl;
import dao.IStudentDao;
import entity.Student;
import utils.JDBCUtil;

public class StudentDaoImpl extends BaseDao<Student> implements IStudentDao {
    private static StudentFactoryImpl studentFactoryImpl;

    public StudentDaoImpl() {
        // TODO Auto-generated constructor stub
        table = "student";
        studentFactoryImpl = new StudentFactoryImpl();
    }

    @Override
    public List<Student> findAll() {
        return super.findAll(studentFactoryImpl);
    }

    @Override
    public int getRowCount(String queryString) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select count(*) from "+table+" where concat(id,stuName, sex, age) like concat('%',?,'%')";
            ps = conn.prepareStatement(sql);
            ps.setString(1, queryString);
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
    public List<Student> findAllByPage(int pageNo, int pageSize, String queryString) {
        List<Student> stuList = new ArrayList<>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from "+table+" where concat(id,stuName, sex, age) like concat('%',?,'%') limit ?,?";
            ps= conn.prepareStatement(sql);
            ps.setString(1, queryString);
            ps.setInt(2,(pageNo-1) * pageSize);
            ps.setInt(3,pageSize);
            rs = ps.executeQuery();
            while (rs.next()){
                stuList.add(studentFactoryImpl.create(rs));
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
        return stuList;
    }

    @Override
    public int insertStudent(Student in) {
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (stuNo,stuName,sex,age) values (?,?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, in.getStuNo());
            ps.setString(2, in.getStuName());
            ps.setString(3, in.getSex());
            ps.setInt(4,in.getAge());
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
    public int deleteStudents(String[] ids) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "delete from "+table+" where id = ?";
            ps = conn.prepareStatement(sql);
            for(String id:ids){
                ps.setInt(1, Integer.parseInt(id));
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
    public int updateStudent(Student in) {
        try {
            conn = JDBCUtil.getConnection();
            System.out.println(in.toString());
            String sql = "update "+table+" set stuNo = ?, stuName = ?,sex = ?,age = ? where id = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, in.getStuNo());
            ps.setString(2, in.getStuName());
            ps.setString(3, in.getSex());
            ps.setInt(4, in.getAge());
            ps.setInt(5, in.getId());
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
    public String getIDByNo(String no) {
        String id = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select id from "+table+" where stuNo = ?";
            ps= conn.prepareStatement(sql);
            ps.setString(1,no);
            rs=ps.executeQuery();
            while(rs.next())
                id = String.valueOf(rs.getInt(1));
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            try {
                JDBCUtil.close(rs,ps,conn);
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
        return id;
    }

    @Override
    public Student getStuByID(String id) {
        Student res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from "+table+" where id = ?";
            ps= conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(id));
            rs = ps.executeQuery();
            while (rs.next()){
                res = studentFactoryImpl.create(rs);
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