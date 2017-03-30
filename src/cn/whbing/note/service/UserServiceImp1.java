package cn.whbing.note.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMessages_sk;

import cn.whbing.note.dao.UserDao;
import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.entity.User;
import cn.whbing.note.util.NoteUtil;

@Service
public class UserServiceImp1 implements UserService{

	/*private UserDao UserDao = new UserDao();
	 * 以上这样写是不行的，UserDao只是一个接口。
	 * 这里我们采用 注入方式*/
	
	@Resource
	private UserDao userDao;  //以注入的方式生成一个dao
	
	@Override
	public NoteResult checkLogin(String name, String pwd) throws Exception {
//		传入用户名和密码，查询数据库进行校验，返回不同的状态，结果以NoteResult存储
		NoteResult result = new NoteResult();
//		这里还需要dao来查询数据库。为了使dao在其他方法中也可以使用，将其定义在外边
		User user=userDao.findByName(name);
		if(user==null){
			result.setStatus(1);
			result.setMsg("用户名不存在");
			return result;			
		}
		String md5_pwd=NoteUtil.md5(pwd);
		if(!user.getCn_user_password().equals(md5_pwd)){
			result.setStatus(2);
			result.setMsg("密码错误");
			return result;
		}
		result.setStatus(0);
		result.setMsg("用户名密码正确");
		result.setData(user.getCn_user_id());
		return result;		
	}

	@Override
	public NoteResult regist(String name, String password, String nickname) throws Exception {
		
		NoteResult result=new NoteResult();
		User has_user = userDao.findByName(name);
		
		if(has_user!=null){
			result.setStatus(1);
			result.setMsg("用户名已经存在");
			return result;
		}
		//注册
		User user=new User();
		user.setCn_user_id(NoteUtil.createId());
		user.setCn_user_name(name);
		user.setCn_user_password(NoteUtil.md5(password));
		user.setCn_user_desc(nickname);
		
		userDao.save(user);		

		result.setStatus(0);
		result.setMsg("注册成功");
		return result;
	}
}
