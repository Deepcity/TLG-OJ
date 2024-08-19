package service;

import entity.User;

import java.util.List;

public interface IUserService {
    List<User> getUsers();

    User getUserByAcoountID(User in);
    boolean insertUser(User in);

    String getIDByUID(String uid);

    String getImagePahtByUID(String uid);
}
