package dao;
import java.util.List;
import entity.Student;
public interface IStudentDao {
	List<Student> findAll();

    int getRowCount(String queryString);

    List<Student> findAllByPage(int pageNo, int pageSize, String queryString);

    int insertStudent(Student in);

    int deleteStudents(String[] ids);

    int updateStudent(Student in);

    String getIDByNo(String no);

    Student getStuByID(String id);
}