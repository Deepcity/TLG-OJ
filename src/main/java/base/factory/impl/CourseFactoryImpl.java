package base.factory.impl;

import base.factory.Factory;
import entity.D_Course;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CourseFactoryImpl implements Factory<D_Course> {

    @Override
    public D_Course create(ResultSet rs) throws SQLException {
        return new D_Course(rs.getInt(1),rs.getString(2));
    }
}
