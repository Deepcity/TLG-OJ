package service.impl;

import base.BaseDao;
import dao.ICourseDao;
import dao.IStuCourseDao;
import dao.impl.CourseDaoImpl;
import dao.impl.StuCourseDaoImpl;
import entity.Course;
import entity.D_Course;
import entity.Student;
import service.ICourseService;

import java.util.ArrayList;
import java.util.List;

public class CourseServiceImpl extends BaseDao<D_Course> implements ICourseService {
    ICourseDao courseDao;
    IStuCourseDao stuCourseDao;

    public CourseServiceImpl() {
        courseDao = new CourseDaoImpl();
        stuCourseDao = new StuCourseDaoImpl();
    }

    @Override
    public List<Course> getAll() {
        List<Course> res = new ArrayList<>();
        List<D_Course> all = courseDao.getAll();
        for (D_Course item : all
        ) {
            res.add(new Course(String.valueOf(item.getCid()), item.getCourseName(),
                    String.valueOf(getStuCountByCid(item.getCid()))));
        }
        return res;
    }

    @Override
    public List<Course> getAllByPage(int pageNo, int pageSize) {
        List<Course> res = new ArrayList<>();
        List<D_Course> all = courseDao.getAllByPage(pageNo, pageSize);
        System.out.println(all.toString());
        for (D_Course item : all
        ) {
            res.add(new Course(String.valueOf(item.getCid()), item.getCourseName(),
                    String.valueOf(getStuCountByCid(item.getCid()))));
        }
        return res;
    }

    @Override
    public String getCourseCidByCourseName(String courseName) {
        return courseDao.getCourseCidByCourseName(courseName);
    }

    @Override
    public int getRowCount() {
        return courseDao.getRowCount();
    }

    @Override
    public int getStuCountByCid(int cid) {
        return stuCourseDao.getStuNumberByCid(cid);
    }

    @Override
    public int addCourse(String courseName) {
        if (getCourseCidByCourseName(courseName)== null)
            return courseDao.insertCourse(courseName);
        else return -1;
    }

    public List<Integer> getIdsByCid(int cid) {
        return stuCourseDao.getIdsByCid(cid);
    }

    @Override
    public int delCourses(String[] ids) {
        return courseDao.deleteCourses(ids);
    }

    public int addCourseStuByIds(int cid, List<Integer> ids) {
        return stuCourseDao.insertCourseStuByIds(cid, ids);
    }

    @Override
    public int addCourseStuByCourse(String courseName, String[] cids) {
        String courseCidByCourseName = getCourseCidByCourseName(courseName);
        List<Integer> ids = new ArrayList<>();
        for (String cid : cids
        ) {
            List<Integer> idsByCid = getIdsByCid(Integer.parseInt(cid));
            ids.addAll(idsByCid);
        }
        int res = addCourseStuByIds(Integer.parseInt(courseCidByCourseName), ids);
        return res;
    }
}
