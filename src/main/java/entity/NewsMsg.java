package entity;

public class NewsMsg {
	int id;
	String title, body;
	String author;

	public String getAuthor() {
		return author;
	}

	public NewsMsg(String title, String body, String author) {
		this.title = title;
		this.body = body;
		this.author = author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public NewsMsg(int id, String title, String body, String author) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.author = author;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public NewsMsg() {
		super();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public String toString() {
		return "NewsMsg{" +
				"id=" + id +
				", title='" + title + '\'' +
				", body='" + body + '\'' +
				", author='" + author + '\'' +
				'}';
	}
}
