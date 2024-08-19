package service.impl;

import dao.IGroupDao;
import dao.IStuGroupDao;
import dao.IStudentDao;
import dao.impl.GroupDaoImpl;
import dao.impl.StuGroupDaoImpl;
import dao.impl.StudentDaoImpl;
import entity.Group;
import service.IGroupService;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

public class GroupServiceImpl implements IGroupService {
    private IGroupDao groupDao;
    private IStuGroupDao stuGroupDao;
    private IStudentDao studentDao;

    public GroupServiceImpl() {
        groupDao = new GroupDaoImpl();
        stuGroupDao = new StuGroupDaoImpl();
        studentDao = new StudentDaoImpl();
    }

    @Override
    public int addGroup(String groupName) {
        return groupDao.insertGroup(groupName);
    }

    @Override
    public int getIDByGroupName(String groupName) {
        return groupDao.getIDByGroupName(groupName);
    }

    @Override
    public int addGroupStu(int gid, String[] ids) {
        return stuGroupDao.insertStuGroup(gid, ids);
    }

    @Override
    public List<Group> getGroupsByPage(int pageNo, int pageSize, String queryString) {
        List<Group> groupList = groupDao.getGroupsByPage(pageNo, pageSize, queryString);

        for (Group item : groupList)
            item.setCountNum(stuGroupDao.getGroupCountByGid(item.getGid()));
        return groupList;
    }

    @Override
    public int getRowCount(String queryString) {
        return groupDao.getRowCount(queryString);
    }

    @Override
    public int addGroupBystuID(int idByGroupName, String[] nos) {
        List<String> ids = new ArrayList<>();
        for(String no:nos){
            ids.add(studentDao.getIDByNo(no));
        }
        ids = new ArrayList<String>(new TreeSet<String>(ids));
        System.out.println(ids);
        System.out.println(ids.toArray(new String[ids.size()]));
        return addGroupStu(idByGroupName,ids.toArray(new String[ids.size()]));
    }

    @Override
    public int delGroup(String[] ids) {
        return groupDao.deleteGroup(ids);
    }

    @Override
    public int addGroupByGroups(int idByGroupName, String[] gids) {
        List<String> ids = new ArrayList<>();
        for(String gid: gids)
        {
            ids.addAll(stuGroupDao.getStuIDsByGroup(gid));
        }
        ids = new ArrayList<String>(new TreeSet<String>(ids));
        System.out.println(ids);
        return addGroupStu(idByGroupName,ids.toArray(new String[ids.size()]));
    }

    @Override
    public List<String> getIDsByGID(String gid) {
        return stuGroupDao.getStuIDsByGroup(gid);
    }

    @Override
    public int getMembersRowCount(String gid) {
        return stuGroupDao.getGroupCountByGid(Integer.parseInt(gid));
    }
}
