package dao.impl;
import java.sql.SQLException;
import java.util.List;

import base.BaseDao;
import base.factory.impl.NewsMsgFactoryImpl;
import dao.INewsMsgDao;
import entity.NewsMsg;
import utils.JDBCUtil;

public class NewsMsgDaoImpl extends BaseDao<NewsMsg> implements INewsMsgDao {
    private static NewsMsgFactoryImpl newsMsgFactoryImpl;
    
    public NewsMsgDaoImpl() {
		// TODO Auto-generated constructor stub
    	table = "news";
    	newsMsgFactoryImpl = new NewsMsgFactoryImpl();
	}

	@Override
	public List<NewsMsg> findAll() {
		return super.findAll(newsMsgFactoryImpl);
	}

	@Override
	public int insertNew(NewsMsg in){
		try {
			conn = JDBCUtil.getConnection();
			String sql = "insert "+table+" (title,body,author) values (?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1,in.getTitle());
			ps.setString(2, in.getBody());
			ps.setString(3, in.getAuthor());
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