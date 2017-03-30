package cn.whbing.note.service;

import cn.whbing.note.entity.NoteResult;

public interface NoteService {
	public NoteResult loadNotes(String noteBookId);
	public NoteResult addNote(String noteName,String noteBookId,String userId);
	public NoteResult loadNote(String noteId);
	public NoteResult updateNote(String noteTitle,String noteBody,String noteId);
	public NoteResult recycleNote(String noteId);
}
