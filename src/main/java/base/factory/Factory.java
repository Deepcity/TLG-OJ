package base.factory;

import java.sql.ResultSet;
import java.sql.SQLException;

public interface Factory<T> {
    T create(ResultSet rs) throws SQLException;
}
