package base.factory.impl;

import base.factory.Factory;
import entity.D_Grade;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GradeFactoryImpl implements Factory<D_Grade> {
    @Override
    public D_Grade create(ResultSet rs) throws SQLException {
        return new D_Grade(rs.getInt(1),rs.getInt(2),rs.getInt(3),
                rs.getString(4),rs.getInt(5));
    }
}
