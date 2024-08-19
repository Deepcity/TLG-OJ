package service;

import entity.Image;

public interface IImageService {
    int addImage(Image img);

    String getPathByID(String id);
}
