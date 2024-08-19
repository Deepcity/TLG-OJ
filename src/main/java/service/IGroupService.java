package service;

import entity.Group;

import java.util.List;

public interface IGroupService {
    int addGroup(String groupName);

    int getIDByGroupName(String groupName);

    int addGroupStu(int gid,String[] ids);

    List<Group> getGroupsByPage(int pageNo, int pageSize, String queryString);

    int getRowCount(String queryString);

    int addGroupBystuID(int idByGroupName, String[] ids);

    int delGroup(String[] ids);

    int addGroupByGroups(int idByGroupName, String[] ids);

    List<String> getIDsByGID(String gid);

    int getMembersRowCount(String gid);
}
