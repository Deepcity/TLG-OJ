package dao.impl;

import base.BaseDao;
import dao.IGroupDao;
import entity.Group;
import entity.Student;
import utils.JDBCUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class GroupDaoImpl extends BaseDao<Group> implements IGroupDao {

    public GroupDaoImpl(){
        table = "sgroup";
    }

    @Override
    public int insertGroup(String groupName) {
        try {
            conn = JDBCUtil.getConnection();
            String sql = "insert "+table+" (groupName) values (?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, groupName);
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
    public int getIDByGroupName(String groupName) {
        int res = -1;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select gid from "+table+" where groupName = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, groupName);
            rs = ps.executeQuery();
            while(rs.next())
                return rs.getInt(1);
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
    public List<Group> getGroupsByPage(int pageNo, int pageSize, String queryString) {
        List<Group> groupList = new ArrayList<>();
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select * from "+table+" where concat(groupName) like concat('%',?,'%') limit ?,?";
            ps= conn.prepareStatement(sql);
            ps.setString(1, queryString);
            ps.setInt(2,(pageNo-1) * pageSize);
            ps.setInt(3,pageSize);
            rs = ps.executeQuery();
            while (rs.next()){
                groupList.add(new Group(rs.getInt(1),rs.getString(2)));
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
        return groupList;
    }

    @Override
    public int getRowCount(String queryString) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select count(*) from "+table+" where concat(gid,groupName) like concat('%',?,'%')";
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
    public int deleteGroup(String[] ids) {
        int res = 0;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "delete from "+table+" where gid = ?";
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
    public String getGroupNameById(String id) {
        String res = null;
        try {
            conn = JDBCUtil.getConnection();
            String sql = "select groupName from "+table+" where gid = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(id));
            rs = ps.executeQuery();
            while(rs.next())
                return rs.getString(1);
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
