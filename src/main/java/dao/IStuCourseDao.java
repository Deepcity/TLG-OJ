package dao;

import java.util.List;

public interface IStuCourseDao {
    int getStuNumberByCid(int cid);

    List<Integer> getIdsByCid(int cid);

    int insertCourseStuByIds(int cid,List<Integer> ids);
}
