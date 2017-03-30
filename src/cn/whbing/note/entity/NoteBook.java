package cn.whbing.note.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class NoteBook implements Serializable{
	private String cn_notebook_id;
	private String cn_user_id;
	private String cn_notebook_type_id;
	private String cn_notebook_name;
	private String cn_notebook_desc;
	private Timestamp cn_notebook_createtime; //java sql下有这个类型
	public String getCn_notebook_id() {
		return cn_notebook_id;
	}
	public void setCn_notebook_id(String cn_notebook_id) {
		this.cn_notebook_id = cn_notebook_id;
	}
	public String getCn_user_id() {
		return cn_user_id;
	}
	public void setCn_user_id(String cn_user_id) {
		this.cn_user_id = cn_user_id;
	}
	public String getCn_notebook_type_id() {
		return cn_notebook_type_id;
	}
	public void setCn_notebook_type_id(String cn_notebook_type_id) {
		this.cn_notebook_type_id = cn_notebook_type_id;
	}
	public String getCn_notebook_name() {
		return cn_notebook_name;
	}
	public void setCn_notebook_name(String cn_notebook_name) {
		this.cn_notebook_name = cn_notebook_name;
	}
	public String getCn_notebook_desc() {
		return cn_notebook_desc;
	}
	public void setCn_notebook_desc(String cn_notebook_desc) {
		this.cn_notebook_desc = cn_notebook_desc;
	}
	public Timestamp getCn_notebook_createtime() {
		return cn_notebook_createtime;
	}
	public void setCn_notebook_createtime(Timestamp cn_notebook_createtime) {
		this.cn_notebook_createtime = cn_notebook_createtime;
	}
	
	

}
