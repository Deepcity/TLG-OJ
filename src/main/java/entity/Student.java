package entity;
public class Student {
    private int id;
    private String stuNo;
    private String stuName;
    private String sex;
    private int age;
    private int uid = -1;
    private String uName = "未绑定";
    public Student() {
    }
    public Student(int id, String stuNo, String stuName, String
            sex, int age) {
        this.id = id;
        this.stuNo = stuNo;
        this.stuName = stuName;
        this.sex = sex;
        this.age = age;
    }

    public Student(int id, String stuNo, String stuName, String sex, int age, int uid,String uName) {
        this.id = id;
        this.stuNo = stuNo;
        this.stuName = stuName;
        this.sex = sex;
        this.age = age;
        this.uid = uid;
        this.uName = uName;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getStuNo() {
        return stuNo;
    }
    public void setStuNo(String stuNo) {
        this.stuNo = stuNo;
    }
    public String getStuName() {
        return stuName;
    }
    public void setStuName(String stuName) {
        this.stuName = stuName;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public Student(String stuNo, String stuName, String sex, int age) {
        this.stuNo = stuNo;
        this.stuName = stuName;
        this.sex = sex;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", stuNo='" + stuNo + '\'' +
                ", stuName='" + stuName + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", uid=" + uid +
                ", uName='" + uName + '\'' +
                '}';
    }
}