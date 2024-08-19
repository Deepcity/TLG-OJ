package dao.impl;

import base.BaseDao;
import base.factory.impl.UserFactoryImpl;
import dao.IUserDao;
import entity.User;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.List;

public class UserDaoImpl extends BaseDao<User> implements IUserDao {
    private static UserFactoryImpl userFactoryImpl;

    public UserDaoImpl() {
        // TODO Auto-generated constructor stub
        table = "user";
        userFactoryImpl = new UserFactoryImpl();
    }

    @Override
    public List<User> findAll() {
        return super.findAll(userFactoryImpl);
    }

    @Override
    public User findByAccountID(User in) {
        User res = null;

        if(in==null)return res;

        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from "+table+" where accountID = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, in.getAccountID());
            rs = ps.executeQuery();
            while(rs.next()) {
                res = userFactoryImpl.create(rs);
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
    public boolean insertUser(User in) {
        boolean res=false;
        if(findByAccountID(in)!=null) return false;

        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (accountID,password,username) values (?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, in.getAccountID());
            ps.setString(2, in.getPassword());
            ps.setString(3, in.getUserName());
            ps.execute();res=true;
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
    public String getUNameByUid(int uid) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select username from "+table+" where uid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, uid);
            rs = ps.executeQuery();
            while (rs.next())
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