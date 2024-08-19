package service;

import entity.Grade;

import java.util.List;

public interface IGradeService {
    List<Grade> getAllGrade(int pageNo, int pageSize);


    int getRowCount();
}
