package cn.whbing.note.controller.note;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteService;

@Controller
@RequestMapping("/note")
public class addNoteController {
	@Resource
	private NoteService noteService;
	@RequestMapping("/add.do")
	@ResponseBody
	public NoteResult execute(String noteName,String noteBookId,String userId) {
		NoteResult result=noteService.addNote(noteName, noteBookId, userId);
		return result;
	}
}
