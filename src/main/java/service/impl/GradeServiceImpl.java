package service.impl;

import dao.*;
import dao.impl.*;
import entity.D_Grade;
import entity.Grade;
import service.IGradeService;

import java.util.ArrayList;
import java.util.List;

public class GradeServiceImpl implements IGradeService {
    IGroupDao groupDao;
    IGradeDao gradeDao;
    IStudentDao studentDao;
    ICourseDao courseDao;
    IStuGroupDao stuGroupDao;

    public GradeServiceImpl(){
        groupDao = new GroupDaoImpl();
        gradeDao = new GradeDaoImpl();
        studentDao = new StudentDaoImpl();
        courseDao = new CourseDaoImpl();
        stuGroupDao = new StuGroupDaoImpl();
    }


    @Override
    public List<Grade> getAllGrade(int pageNo, int pageSize) {
        List<Grade> res = new ArrayList<>();
        List<D_Grade> all = gradeDao.getAllByPage(pageNo,pageSize);
        int id= 0;
        for (D_Grade item: all
             ) {
            Grade grade = new Grade();
            grade.setCourseGrade(String.valueOf(item.getGrade()));
            grade.setSchedule(item.getSchedule());
            grade.setCourseName(courseDao.getCourseNameByCid(String.valueOf(item.getCid())));
            grade.setGroupName(groupDao.getGroupNameById(String.valueOf(item.getGid())));
            grade.setStuNo(studentDao.getStuByID(String.valueOf(item.getId())).getStuNo());
            grade.setStuName(studentDao.getStuByID(String.valueOf(item.getId())).getStuName());
            grade.setId(++id);
            res.add(grade);
        }
        return res;
    }

    @Override
    public int getRowCount() {
        return gradeDao.getRowCount();
    }
}
