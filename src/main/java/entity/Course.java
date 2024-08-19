package entity;

public class Course {
    String cid, courseName,courseStuCount;



    @Override
    public String toString() {
        return "Course{" +
                "cid='" + cid + '\'' +
                ", courseName='" + courseName + '\'' +
                ", courseStuCount='" + courseStuCount + '\'' +
                '}';
    }

    public String getCourseStuCount() {
        return courseStuCount;
    }

    public void setCourseStuCount(String courseStuCount) {
        this.courseStuCount = courseStuCount;
    }

    public Course(String cid, String courseName) {
        this.cid = cid;
        this.courseName = courseName;
    }

    public Course(String cid, String courseName, String courseStuCount) {
        this.cid = cid;
        this.courseName = courseName;
        this.courseStuCount = courseStuCount;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }



    public Course() {
    }
}
