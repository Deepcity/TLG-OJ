package service;

import entity.Course;

import java.util.List;

public interface ICourseService {
    List<Course> getAll();

    List<Course> getAllByPage(int pageNo, int pageSize);

    String getCourseCidByCourseName(String courseName);

    int getRowCount();

    int getStuCountByCid(int cid);

    int addCourse(String courseName);

    int delCourses(String[] ids);

    int addCourseStuByCourse(String courseName,String[] cids);
    List<Integer> getIdsByCid(int cid);
}
