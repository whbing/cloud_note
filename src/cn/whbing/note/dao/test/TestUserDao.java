package cn.whbing.note.dao.test;

import cn.whbing.note.dao.UserDao;
import cn.whbing.note.entity.User;

public class TestUserDao extends TestBase{
	//测试findbyname
	public static void main(String[] args) {
		UserDao userDao=getContext().getBean("userDao",UserDao.class);
		User user = userDao.findByName("whb");
		if(user == null){
			System.out.println("用户名不正确");
		}else{
			System.out.println(
				user.getCn_user_password());
		}
	}

}
