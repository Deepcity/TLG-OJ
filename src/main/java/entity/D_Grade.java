package entity;

public class D_Grade {
    int id,cid, grade;
    String schedule;
    int gid;

    public D_Grade(int id, int cid, int grade, String schedule,int gid) {
        this.id = id;
        this.cid = cid;
        this.grade = grade;
        this.schedule = schedule;
        this.gid = gid;
    }

    public int getGid() {
        return gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }
}
