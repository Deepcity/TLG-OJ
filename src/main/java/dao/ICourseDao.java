package dao;

import entity.D_Course;

import java.util.List;

public interface ICourseDao {
    String getCourseNameByCid(String cid);
    
    List<D_Course> getAll();

    List<D_Course> getAllByPage(int pageNo, int pageSize);

    int getRowCount();

    int insertCourse(String courseName);

    int deleteCourses(String[] ids);

    String getCourseCidByCourseName(String courseName);
}
