package dao;

import entity.D_Grade;

import java.util.List;

public interface IGradeDao {
    String getGradeByIdAndCid(String id,String cid);
    List<D_Grade> getAllByPage(int pageNo, int pageSize);
    List<D_Grade> getAll();

    int getRowCount();
}
