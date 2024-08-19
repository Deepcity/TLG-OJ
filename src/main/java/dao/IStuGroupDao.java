package dao;

import entity.Group;

import java.util.Collection;
import java.util.List;

public interface IStuGroupDao {
    public int insertStuGroup(int gid,String[] ids);

    int getGroupCountByGid(int gid);

    List<String> getStuIDsByGroup(String gid);
}
