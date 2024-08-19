package entity;

import java.util.List;

public class Group {
    int gid;
    String groupName;
    List<Integer> membersID;
    int countNum;

    public Group(int gid, String groupName, List<Integer> membersID, int countNum) {
        this.gid = gid;
        this.groupName = groupName;
        this.membersID = membersID;
        this.countNum = countNum;
    }

    public Group() {

    }

    public int getCountNum() {
        return countNum;
    }

    public void setCountNum(int countNum) {
        this.countNum = countNum;
    }

    public Group(int gid, String groupName, List<Integer> membersID) {
        this.gid = gid;
        this.groupName = groupName;
        this.membersID = membersID;
    }

    public Group(int gid, String groupName) {
        this.gid = gid;
        this.groupName = groupName;
    }

    @Override
    public String toString() {
        return "Group{" +
                "gid=" + gid +
                ", groupName='" + groupName + '\'' +
                ", membersID=" + membersID +
                ", countNum=" + countNum +
                '}';
    }

    public int getGid() {
        return gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public List<Integer> getMembersID() {
        return membersID;
    }

    public void setMembersID(List<Integer> membersID) {
        this.membersID = membersID;
    }
}
