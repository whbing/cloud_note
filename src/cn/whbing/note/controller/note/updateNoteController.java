package cn.whbing.note.controller.note;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteService;

@Controller
@RequestMapping("/note")
public class updateNoteController {
	@Resource
	private NoteService noteService;
	@RequestMapping("/updatenote.do")
	@ResponseBody
	public NoteResult execute(String noteTitle,String noteBody,String noteId) {
		NoteResult result=noteService.updateNote(noteTitle, noteBody, noteId);
		return result;
	}
}
