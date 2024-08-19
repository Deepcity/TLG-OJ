package service.impl;
import java.util.ArrayList;
import java.util.List;

import dao.IStuUserDao;
import dao.IStudentDao;
import dao.IUserDao;
import dao.impl.StuUserDaoImpl;
import dao.impl.StudentDaoImpl;
import dao.impl.UserDaoImpl;
import entity.Student;
import service.IStudentService;

public class StudentServiceImpl implements IStudentService {
    private IStudentDao studentDao;
    private IStuUserDao stuUserDao;
    private IUserDao userDao;
    public StudentServiceImpl() {
        studentDao = new StudentDaoImpl();
        stuUserDao = new StuUserDaoImpl();
        userDao = new UserDaoImpl();
    }

    private List<Student> getAllInfomation(List<Student> resl){
        for (Student item: resl
        ) {
            item.setUid(stuUserDao.findStuByID(item).getUid());
            if(item.getUid()!=-1)
                item.setuName(userDao.getUNameByUid(item.getUid()));
        }
        return resl;
    }
    @Override
    public List<Student> getStudents() {
        return getAllInfomation(studentDao.findAll());
    }

    @Override
    public List<Student> getStudentsByPage(int pageNo, int pageSize, String queryString) {
        return getAllInfomation(studentDao.findAllByPage(pageNo,pageSize,queryString));
    }

    @Override
    public int getRowCount(String queryString) {
        return studentDao.getRowCount(queryString);
    }

    @Override
    public int addStudent(Student student) {
        return studentDao.insertStudent(student);
    }

    @Override
    public int delStudent(String[] ids) {
        return studentDao.deleteStudents(ids);
    }

    @Override
    public int updateStudent(Student in) {
        return studentDao.updateStudent(in);
    }

    @Override
    public List<Student> getStudentsByIDs(List<String> ids) {
        List<Student> res = new ArrayList<>();

        for (String id: ids
             ) {
            res.add(studentDao.getStuByID(id));
        }

        return getAllInfomation(res);
    }
}