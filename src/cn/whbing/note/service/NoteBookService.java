package cn.whbing.note.service;

import cn.whbing.note.entity.NoteBook;
import cn.whbing.note.entity.NoteResult;

public interface NoteBookService {
	NoteResult loadNoteBooks(String userId);
	NoteResult addNoteBook(String noteBookName,String userId);
}
