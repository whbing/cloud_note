package cn.whbing.note.controller.note;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteServiceImp1;

@Controller	
@RequestMapping("/note")
public class loadNotesController {
	@Resource
	private NoteServiceImp1 noteService;
	@RequestMapping("/loadnotes.do")
	@ResponseBody
	public NoteResult excute(String noteBookId){
		NoteResult result=noteService.loadNotes(noteBookId);
		return result;
	}
}
