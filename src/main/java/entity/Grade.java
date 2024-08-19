package entity;

public class Grade {
    int id;
    String stuNo;
    String stuName;
    String groupName;
    String courseName;
    String courseGrade;

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    String schedule;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Grade(String stuID, String stuName, String groupName, String courseName, String courseGrade, String schedule) {
        this.stuNo = stuID;
        this.stuName = stuName;
        this.groupName = groupName;
        this.courseName = courseName;
        this.courseGrade = courseGrade;
        this.schedule = schedule;
    }

    @Override
    public String toString() {
        return "Grade{" +
                "stuNo='" + stuNo + '\'' +
                ", stuName='" + stuName + '\'' +
                ", groupName='" + groupName + '\'' +
                ", courseName='" + courseName + '\'' +
                ", courseGrade='" + courseGrade + '\'' +
                ", schedule='" + schedule + '\'' +
                '}';
    }

    public Grade() {
    }

    public String getCourseName() {
        return courseName;
    }

    public String getStuNo() {
        return stuNo;
    }

    public void setStuNo(String stuID) {
        this.stuNo = stuID;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseGrade() {
        return courseGrade;
    }


    public void setCourseGrade(String s) {
        this.courseGrade = s;
    }
}
