package dao;

import java.util.List;

import entity.NewsMsg;

public interface INewsMsgDao {
	List<NewsMsg> findAll();
	int insertNew(NewsMsg in);
}
