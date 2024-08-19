package dao;

import entity.Image;

public interface IImageDao {
    String getPathByIID(String id);

    int insertImage(Image img);
}
