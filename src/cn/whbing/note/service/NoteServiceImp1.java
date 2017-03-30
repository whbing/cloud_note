package cn.whbing.note.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.whbing.note.dao.NoteDao;
import cn.whbing.note.entity.Note;
import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.util.NoteUtil;

@Service
public class NoteServiceImp1 implements NoteService{
	@Resource
	private NoteDao noteDao;
	
	public NoteResult loadNotes(String noteBookId){
		List<Map> list=noteDao.findByNoteBookId(noteBookId);
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("笔记查询成功");
		result.setData(list);
		return result;
	}

	@Override
	public NoteResult addNote(String noteName, String noteBookId, String userId) {
		Note note =new Note();
		note.setCn_user_id(userId);
		note.setCn_notebook_id(noteBookId);
		note.setCn_note_title(noteName);
		note.setCn_note_id(NoteUtil.createId());
		note.setCn_note_body("");
		note.setCn_note_status_id("1");//默认
		note.setCn_note_type_id("1");
		note.setCn_note_create_time(System.currentTimeMillis());
		noteDao.save(note);
		
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("添加成功");
		result.setData(note.getCn_note_id());		
		return result;
	}

	@Override
	public NoteResult loadNote(String noteId) {
		Note note=noteDao.findByNoteId(noteId);
		NoteResult result=new NoteResult();		
		result.setStatus(0);
		result.setMsg("笔记查找成功");
		result.setData(note);
		return result;
	}

	@Override
	public NoteResult updateNote(String noteTitle, String noteBody,String noteId) {
		// TODO Auto-generated method stub
		Note note=noteDao.findByNoteId(noteId);
		note.setCn_note_title(noteTitle);
		note.setCn_note_body(noteBody);
		note.setCn_note_last_modify_time(System.currentTimeMillis());
		noteDao.updateNote(note);
		
		//TODO如果有分享表，这里同时将分享的表也更新
		
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("更新笔记成功");//更新操作没有绑定返回
		return result;
	}

	@Override
	public NoteResult recycleNote(String noteId) {
		// TODO Auto-generated method stub
		noteDao.updateStatusId(noteId);
		NoteResult result=new NoteResult();
		result.setStatus(0);
		result.setMsg("移入回收站成功");		
		return result;		
	}
	
}
