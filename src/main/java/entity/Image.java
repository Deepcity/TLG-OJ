package entity;

public class Image {
    int id;
    String Path;

    public Image(int id, String path) {
        this.id = id;
        Path = path;
    }

    public Image(String path) {
        Path = path;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", Path='" + Path + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPath() {
        return Path;
    }

    public void setPath(String path) {
        Path = path;
    }
}
