package service;

import java.util.List;
import entity.NewsMsg;

public interface INewsMsgService {
	List<NewsMsg> getNewsMsgs();

    int addNewsMsg(NewsMsg newsMsg);
}