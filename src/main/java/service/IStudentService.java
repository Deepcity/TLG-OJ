package service;
import java.util.List;
import entity.Student;
public interface IStudentService {
	List<Student> getStudents();
	List<Student> getStudentsByPage(int pageNo, int pageSize, String queryString);
	int getRowCount(String queryString);

    int addStudent(Student student);

	int delStudent(String[] ids);

    int updateStudent(Student in);

    List<Student> getStudentsByIDs(List<String> ids);
}