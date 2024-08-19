package base.factory.impl;

import base.factory.Factory;
import entity.User;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserFactoryImpl implements Factory<User> {
    @Override
    public User create(ResultSet rs) throws SQLException {
        return new User(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4),
                rs.getInt(5)
        );
    }
}
