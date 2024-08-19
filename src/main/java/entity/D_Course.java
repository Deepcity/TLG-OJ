package entity;

public class D_Course {
    int cid;String courseName;

    public D_Course(int cid, String courseName) {
        this.cid = cid;
        this.courseName = courseName;
    }

    @Override
    public String toString() {
        return "D_Course{" +
                "cid=" + cid +
                ", courseName='" + courseName + '\'' +
                '}';
    }

    public D_Course() {
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
