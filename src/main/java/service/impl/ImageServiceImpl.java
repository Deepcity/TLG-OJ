package service.impl;

import dao.IImageDao;
import dao.impl.ImageDaoImpl;
import entity.Image;
import service.IGroupService;
import service.IImageService;

public class ImageServiceImpl implements IImageService {

    IImageDao imageDao;
    public ImageServiceImpl(){
        imageDao = new ImageDaoImpl();
    }
    @Override
    public int addImage(Image img) {
        return imageDao.insertImage(img);
    }

    @Override
    public String getPathByID(String id) {
        return imageDao.getPathByIID(id);
    }
}
