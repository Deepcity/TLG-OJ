package entity;

public class D_StuCourse {
    int id,cid;

    public D_StuCourse() {
    }

    @Override
    public String toString() {
        return "D_StuCourse{" +
                "id=" + id +
                ", cid=" + cid +
                '}';
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

    public D_StuCourse(int id, int cid) {
        this.id = id;
        this.cid = cid;
    }
}
