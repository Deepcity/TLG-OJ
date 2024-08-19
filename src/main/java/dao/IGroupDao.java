package dao;

import entity.Group;

import java.util.List;

public interface IGroupDao {
    public int insertGroup(String groupName);

    public int getIDByGroupName(String groupName);

    List<Group> getGroupsByPage(int pageNo, int pageSize, String queryString);

    int getRowCount(String queryString);

    int deleteGroup(String[] ids);

    String getGroupNameById(String id);
}
