package dao.impl;

import base.BaseDao;
import dao.IImageDao;
import entity.Image;
import utils.JDBCUtil;

import java.sql.SQLException;

public class ImageDaoImpl extends BaseDao<Image> implements IImageDao {
    public ImageDaoImpl(){
        table = "image";
    }
    @Override
    public String getPathByIID(String id) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (iid) values (?)";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(id));
            rs=ps.executeQuery();
            while(rs.next()){
                res = rs.getString(1);
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

    @Override
    public int insertImage(Image img) {
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (path) values (?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, img.getPath());
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
}
