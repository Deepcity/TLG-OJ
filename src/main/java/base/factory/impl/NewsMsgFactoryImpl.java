package base.factory.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import base.factory.Factory;
import entity.NewsMsg;

public class NewsMsgFactoryImpl implements Factory<NewsMsg>{

	@Override
	public NewsMsg create(ResultSet rs) throws SQLException {
		NewsMsg resNewsMsg = new NewsMsg(rs.getInt(1)
				,rs.getString(2)
				,rs.getString(3)
				,rs.getString(4)
				);
		return resNewsMsg;
	}

}
