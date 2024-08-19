package dao.impl;

import base.BaseDao;
import base.factory.impl.GradeFactoryImpl;
import dao.IGradeDao;
import entity.D_Grade;
import entity.Student;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class GradeDaoImpl extends BaseDao<D_Grade> implements IGradeDao {
    static GradeFactoryImpl gradeFactory;
    public GradeDaoImpl(){
        table="grade";
        gradeFactory = new GradeFactoryImpl();
    }

    @Override
    public String getGradeByIdAndCid(String id, String cid) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select grade from "+table+" where id = ? and cid = ?";
            ps= conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(id));
            ps.setInt(2, Integer.parseInt(cid));
            rs=ps.executeQuery();
            while(rs.next())
                res = String.valueOf(rs.getInt(1));
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

    public List<D_Grade> getAllByPage(int pageNo, int pageSize){
        return super.getAllByPage(pageNo,pageSize,gradeFactory);
    }

    @Override
    public List<D_Grade> getAll() {
        return super.findAll(gradeFactory);
    }

    @Override
    public int getRowCount() {
        return super.getRowCount();
    }
}
