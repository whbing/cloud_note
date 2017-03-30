package cn.whbing.note.dao.test;

import java.util.List;

import cn.whbing.note.dao.NoteDao;
import cn.whbing.note.entity.Note;
import java.util.Map;

public class TestNote extends TestBase {
	public static void main(String[] args) {
		NoteDao noteDao=getContext().getBean("noteDao", NoteDao.class);
		//List<Note> list=noteDao.findByNoteBookId("cb39475f-7ceb-4eda-b0ab-e97c97d0473f");
		List<Map> list=noteDao.findByNoteBookId("cb39475f-7ceb-4eda-b0ab-e97c97d0473f");
		//for (Note note : list) {
		//	System.out.println(note.getCn_note_body());
		//}

	}

}
