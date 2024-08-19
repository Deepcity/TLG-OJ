package dao;
import java.util.List;

import entity.User;

public interface IUserDao {
    List<User> findAll();

    User findByAccountID(User in);

    boolean insertUser(User in);

    String getUNameByUid(int uid);
}