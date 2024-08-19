package entity;

public class ClassicGroupBean {
    String id,gid,groupName;

    public ClassicGroupBean(String id, String gid, String groupName) {
        this.id = id;
        this.gid = gid;
        this.groupName = groupName;
    }

    public ClassicGroupBean() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGid() {
        return gid;
    }

    public void setGid(String gid) {
        this.gid = gid;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}
