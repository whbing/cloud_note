package cn.whbing.note.dao.test;

import cn.whbing.note.dao.UserDao;
import cn.whbing.note.entity.User;
import cn.whbing.note.util.NoteUtil;

public class TestUserDao2 extends TestBase{
	public static void main(String[] args) throws Exception {
//测试save（insert）
		UserDao userDao=getContext().getBean("userDao",UserDao.class);
		
		User user = new User();
		user.setCn_user_id("3");
		user.setCn_user_name("zhangsan");
		user.setCn_user_password(NoteUtil.md5("zhangsan"));
		user.setCn_user_token("test1");
		user.setCn_user_desc("test1");
		
		userDao.save(user);

		if(!(userDao.findByName("zhangsan") == null)){
			System.out.println("保存成功");
		}else{
			System.out.println("保存失败");
		}
	}

}
