package cn.whbing.note.controller.note;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteService;

@Controller
@RequestMapping("/note")
public class recycleNote {
	@Resource
	private NoteService noteService;
	@RequestMapping("/recyclenote.do")
	@ResponseBody
	public NoteResult execute(String noteId){
		NoteResult result=noteService.recycleNote(noteId);
		return result;
	}	
}
