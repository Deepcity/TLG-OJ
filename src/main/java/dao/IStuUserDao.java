package dao;

import entity.Student;
import entity.User;

public interface IStuUserDao {
    Student findStuByID(Student in);

    String findStuIDByUID(String UID);
}
