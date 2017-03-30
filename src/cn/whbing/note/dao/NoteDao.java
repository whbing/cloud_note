package cn.whbing.note.dao;

import java.util.List;
import java.util.Map;

import cn.whbing.note.entity.Note;

public interface NoteDao {
	//public List<Note> findByNoteBookId(String noteBookId);
	public List<Map> findByNoteBookId(String noteBookId);
	public void save(Note note);
	public Note findByNoteId(String noteId);
	public void updateNote(Note note);
	public void updateStatusId(String noteId);
}
