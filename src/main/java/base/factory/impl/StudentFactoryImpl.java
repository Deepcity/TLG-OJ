package base.factory.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import base.factory.Factory;
import entity.Student;

public class StudentFactoryImpl implements Factory<Student> {
	@Override
	public Student create(ResultSet rs) throws SQLException {
		Student resStudent = new Student(rs.getInt(1),
				rs.getString(2),rs.getString(3),
				rs.getString(4),rs.getInt(5));
		return resStudent;
	}
}
