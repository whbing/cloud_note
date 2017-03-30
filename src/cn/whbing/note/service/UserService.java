package cn.whbing.note.service;

import cn.whbing.note.entity.NoteResult;

public interface UserService {
	public NoteResult checkLogin(String name,String pwd) throws Exception;
	public NoteResult regist (String name,String password,String nickname) throws Exception;
}
