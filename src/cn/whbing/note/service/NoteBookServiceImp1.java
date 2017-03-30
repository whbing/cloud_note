package cn.whbing.note.service;

import java.sql.Timestamp;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.whbing.note.dao.NoteBookDao;
import cn.whbing.note.entity.NoteBook;
import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.util.NoteUtil;

@Service
public class NoteBookServiceImp1 implements NoteBookService{

	@Resource
	private NoteBookDao noteBookDao;
	
	@Override
	public NoteResult loadNoteBooks(String userId) {
		List<NoteBook> list=noteBookDao.findByUser(userId);
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("查询笔记本成功");
		result.setData(list);
		
		return result;
	}

	@Override
	public NoteResult addNoteBook(String noteBookName,String userId) {
		//用户传入的noteBookName及userId将赋给新建的笔记本
		//新建笔记本
		NoteBook noteBook=new NoteBook();
		noteBook.setCn_notebook_name(noteBookName);
		noteBook.setCn_user_id(userId);
		noteBook.setCn_notebook_type_id("1");//默认类型
		noteBook.setCn_notebook_id(NoteUtil.createId());
		//desc字段先为空
		//创建时间为Timestamp类型
		Timestamp nowTime=new Timestamp(System.currentTimeMillis());
		noteBook.setCn_notebook_createtime(nowTime);
		noteBookDao.save(noteBook);;
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("添加笔记本成功");		
		result.setData(noteBook.getCn_notebook_id());//返回noteId是为了后面工作
		return result;
	}

}
