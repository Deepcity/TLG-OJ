package entity;

public class User {

    int uid;
    String accountID;
    String userName;
    String password;
    int uGrade;

    public User(String accountID, String password) {
        this.accountID = accountID;
        this.password = password;
    }

    public User(String accountID, String password,String userName) {
        this.accountID = accountID;
        this.password = password;
        this.userName = userName;
    }

    public int uGrade() {
        return uGrade;
    }

    public void setAdmin(int admin) {
        uGrade = admin;
    }

    public User() {
    }

    public User(int uid, String accountID, String userName, String password, int uGrade) {
        this.uid = uid;
        this.accountID = accountID;
        this.userName = userName;
        this.password = password;
        this.uGrade = uGrade;
    }


    public int getUGrade() {
        return uGrade;
    }

    public void setUGrade(int uGrade) {
        this.uGrade = uGrade;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getAccountID() {
        return accountID;
    }

    public void setAccountID(String accountID) {
        this.accountID = accountID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid=" + uid +
                ", accountID='" + accountID + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", uGrade=" + uGrade +
                '}';
    }
}
