package utils;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import javax.sql.DataSource;

public class JDBCUtil {
	private static DataSource dataSource = null;
	static {
		InputStream inputStream = JDBCUtil.class.getClassLoader().getResourceAsStream("druid.properties");
		Properties properties = new Properties();
		try {
			properties.load(inputStream);
			dataSource = DruidDataSourceFactory.createDataSource(properties);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection() throws SQLException {
		return dataSource.getConnection();
	}

	public static void close(ResultSet rs, Statement stat, Connection conn) throws SQLException {
		if (rs != null)
			rs.close();
		if (stat != null)
			stat.close();
		if (conn != null)
			conn.close();
	}
}