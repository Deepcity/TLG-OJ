package service.impl;
import java.util.List;

import dao.INewsMsgDao;
import dao.impl.NewsMsgDaoImpl;
import entity.NewsMsg;
import service.INewsMsgService;

public class NewsMsgServiceImpl implements INewsMsgService {
    private INewsMsgDao newsMsgDao;
    public NewsMsgServiceImpl() {
    	newsMsgDao = new NewsMsgDaoImpl();
    }
    @Override
    public List<NewsMsg> getNewsMsgs() {
        return newsMsgDao.findAll();
    }

    @Override
    public int addNewsMsg(NewsMsg newsMsg) {
        return newsMsgDao.insertNew(newsMsg);
    }
}