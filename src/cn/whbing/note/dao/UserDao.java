package cn.whbing.note.dao;

import cn.whbing.note.entity.User;

public interface UserDao {
	public User findByName(String name); 
	public void save(User user);
}
