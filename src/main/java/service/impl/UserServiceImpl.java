package service.impl;

import dao.*;
import dao.impl.*;
import entity.User;
import service.IUserService;

import java.util.List;

public class UserServiceImpl implements IUserService {

    private IUserDao userDao;
    private IStuUserDao stuUserDao;
    public IUserImageDao userImageDao;
    private IImageDao imageDao;

    public UserServiceImpl() {
        userDao = new UserDaoImpl();
        stuUserDao = new StuUserDaoImpl();
        userImageDao = new UserImageDao();
        imageDao = new ImageDaoImpl();
    }

    @Override
    public List<User> getUsers() {
        return userDao.findAll();
    }

    @Override
    public User getUserByAcoountID(User in) {
        return userDao.findByAccountID(in);
    }

    @Override
    public boolean insertUser(User in) {
        return userDao.insertUser(in);
    }

    @Override
    public String getIDByUID(String uid) {
        return stuUserDao.findStuIDByUID(uid);
    }

    @Override
    public String getImagePahtByUID(String uid) {
        return imageDao.getPathByIID(userImageDao.findIIDByuid(uid));
    }
}
