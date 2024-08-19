package dao.impl;

import base.BaseDao;
import dao.IUserImageDao;
import entity.Image;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.time.Year;

public class UserImageDao extends BaseDao<Image> implements IUserImageDao {
    public UserImageDao(){
        table="user_image";
    }


    @Override
    public String findIIDByuid(String uid) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select iid from "+table+" where uid = ?";
            ps= conn.prepareStatement(sql);
            ps.setString(1,uid);
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
}
