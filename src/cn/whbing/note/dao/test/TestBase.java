package cn.whbing.note.dao.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestBase {
	private static ApplicationContext ac=null;
	public static ApplicationContext getContext(){
		String conf="applicationContext.xml";
		ac=new ClassPathXmlApplicationContext(conf);
		return ac;
	}
}

