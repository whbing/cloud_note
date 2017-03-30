package cn.whbing.note.controller.notebook;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteBookService;

@Controller
@RequestMapping("/notebook")
public class addNoteBookController {
	@Resource
	private NoteBookService noteBookService;
	@RequestMapping("/add.do")
	@ResponseBody
	public NoteResult excute(String noteBookName,String userId) {
		NoteResult result=noteBookService.addNoteBook(noteBookName, userId);
		return result;
	}
}
