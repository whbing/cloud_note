package cn.whbing.note.controller.notebook;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.whbing.note.entity.NoteResult;
import cn.whbing.note.service.NoteBookService;

@Controller
@RequestMapping("/notebook")
public class LoadBooksController {
	@Resource
	private NoteBookService bookService;
	
	@RequestMapping("/loadbooks.do")
	@ResponseBody
	public NoteResult execute(String userId){
		NoteResult result = bookService.loadNoteBooks(userId);
		return result;
	}
	
}
