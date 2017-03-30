package cn.whbing.note.dao;

import java.util.List;

import cn.whbing.note.entity.NoteBook;

public interface NoteBookDao {
	public void save(NoteBook noteBook);
	public List<NoteBook> findByUser(String userId);
}
